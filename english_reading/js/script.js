// HTMLエスケープ関数
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return unsafe;
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

// テキスト中から単語や文節を検索する関数（大文字小文字区別なし）
function findTextInPassage(passage, searchText, startFrom = 0) {
    // 単語の境界を考慮して検索
    // 元のテキストと検索テキストを取得
    const originalPassage = passage.substring(startFrom);
    const passageLower = originalPassage.toLowerCase();
    const searchLower = searchText.toLowerCase();
    
    // 単語を検索
    let relativeIndex = passageLower.indexOf(searchLower);
    
    // 完全な単語または句として一致するかチェック
    while (relativeIndex !== -1) {
        // 単語の前後の文字をチェック
        const prevChar = relativeIndex > 0 ? passageLower[relativeIndex - 1] : ' ';
        const nextChar = relativeIndex + searchLower.length < passageLower.length ? 
                          passageLower[relativeIndex + searchLower.length] : ' ';
        
        // 単語境界をチェック
        // 単語の前後が単語文字（アルファベット、数字、アンダースコア）でないこと
        // または、フレーズ（スペースを含む）の場合はそのまま受け入れる
        const isPrevBoundary = !/[a-z0-9_]/.test(prevChar) || searchLower.includes(' ');
        const isNextBoundary = !/[a-z0-9_]/.test(nextChar) || searchLower.includes(' ');
        
        if (isPrevBoundary && isNextBoundary) {
            // 単語境界が正しければ位置を返す
            break;
        }
        
        // 次の出現を検索
        relativeIndex = passageLower.indexOf(searchLower, relativeIndex + 1);
    }
    
    // 見つからなければ-1を返す
    if (relativeIndex === -1) return -1;
    
    // 実際の位置（元のケースを保持）
    const absoluteIndex = startFrom + relativeIndex;
    return absoluteIndex;
}

// 単語/フレーズを解説付きのHTML要素に変換する関数
function createAnnotatedWordHtml(text, annotation, position = 0) {
    // 品詞または文法要素に基づいてクラスを決定
    let classNames = '';
    if (annotation.type === 'phrase' || annotation.type === 'clause') {
        classNames = annotation.type;
    } else if (annotation.type) {
        classNames = annotation.type; // noun, verb など
    }
    
    // 質問と回答のHTMLを生成
    let questionsHtml = '';
    if (annotation.questions && annotation.questions.length > 0) {
        questionsHtml = '<div class="questions"><div>';
        annotation.questions.forEach((q, index) => {
            // よりユニークなIDを生成: 出現位置とテキストを含める
            const answerId = `answer-${annotation.text.replace(/\W+/g, '-')}-${position}-${index}`;
            const questionText = escapeHtml(q.question || '');
            const answerText = escapeHtml(q.answer || '');
            questionsHtml += `
                <button class="question" onclick="toggleAnswer('${answerId}')">${questionText}</button>
                <div class="answer" id="${answerId}">${answerText}</div>
            `;
        });
        questionsHtml += '</div></div>';
    }
    
    // ツールチップ付きの単語/フレーズを追加
    const explanationText = escapeHtml(annotation.explanation || '');
    const escapedText = escapeHtml(text);
    
    return `<span class="word ${classNames}" data-text="${escapeHtml(annotation.text)}" data-pos="${position}">${escapedText}<div class="tooltip"><div class="tooltip-title">${escapedText}</div><div class="explanation">${explanationText}</div>${questionsHtml}</div></span>`;
}

// 長文とアノテーションを表示する関数
function renderPassage() {
    const passageElement = document.getElementById('passage');
    if (!passageElement) return; // 要素がなければ終了
    
    // passageData が存在するか確認
    if (!passageData) {
        console.error("passageData is not defined.");
        return;
    }

    console.log("アノテーション数:", passageData.annotations?.length || 0);
    
    // タイトルと本文を別々に処理
    let htmlContent = '';
    
    // タイトルを追加（解説付き）
    if (passageData.title) {
        const titleHtml = processTextWithAnnotations(passageData.title, passageData.annotations, 'title-');
        htmlContent += `<h2 class="passage-title">${titleHtml}</h2>`;
    }
    
    // 本文がない場合は終了
    if (!passageData.text || !passageData.annotations) {
        passageElement.innerHTML = htmlContent;
        return;
    }
    
    // 本文を処理
    const bodyHtml = processTextWithAnnotations(passageData.text, passageData.annotations);
    
    // 段落に分割（HTMLタグを壊さないように注意）
    let bodyContent = splitIntoParagraphs(bodyHtml);
    
    // 本文をhtmlContentに追加
    htmlContent += '<div class="passage-body">' + bodyContent + '</div>';
    
    passageElement.innerHTML = htmlContent;
    
    // デバッグ用：特定の単語を検索
    ['decades', 'platforms', 'Impact', 'Technology'].forEach(word => {
        const elements = document.querySelectorAll(`.word[data-text="${word}"]`);
        console.log(`${word} 要素数:`, elements.length);
        
        if (elements.length > 0) {
            console.log(`${word} 出現位置:`, [...elements].map(el => el.getAttribute('data-pos')));
        }
    });
}

// テキストを解説付きで処理する関数
function processTextWithAnnotations(text, annotations, idPrefix = '') {
    // 全てのアノテーションの出現位置を記録
    const allOccurrences = [];
    
    for (const annotation of annotations) {
        const annotationText = annotation.text || '';
        if (!annotationText) continue;
        
        // この単語/フレーズの全ての出現位置を見つける
        let currentPos = 0;
        let startIndex;
        
        while ((startIndex = findTextInPassage(text, annotationText, currentPos)) !== -1) {
            const endIndex = startIndex + annotationText.length;
            
            allOccurrences.push({
                start: startIndex,
                end: endIndex,
                text: text.substring(startIndex, endIndex),
                annotation: annotation
            });
            
            // 次の検索開始位置
            currentPos = startIndex + 1;
        }
    }
    
    // 重複を解決: 範囲が重なる場合、長い方を優先
    const finalOccurrences = resolveOverlappingOccurrences(allOccurrences, text.length);
    
    // 開始位置でソート
    finalOccurrences.sort((a, b) => a.start - b.start);
    
    // デバッグ: Technology の出現をチェック
    const technologyOccurrences = finalOccurrences.filter(o => 
        o.text.toLowerCase() === 'technology');
    console.log("Technology 出現数:", technologyOccurrences.length);
    
    // HTMLを生成
    let resultHtml = '';
    let currentIndex = 0;
    
    for (const occurrence of finalOccurrences) {
        // 前のテキスト部分を追加
        if (occurrence.start > currentIndex) {
            resultHtml += escapeHtml(text.substring(currentIndex, occurrence.start));
        }
        
        // アノテーション部分を追加（idPrefixを付けて区別）
        resultHtml += createAnnotatedWordHtml(
            occurrence.text, 
            occurrence.annotation, 
            idPrefix + occurrence.start
        );
        
        currentIndex = occurrence.end;
    }
    
    // 残りのテキストを追加
    if (currentIndex < text.length) {
        resultHtml += escapeHtml(text.substring(currentIndex));
    }
    
    return resultHtml;
}

// 重複するアノテーションを解決する関数
function resolveOverlappingOccurrences(occurrences, textLength) {
    const finalOccurrences = [];
    
    // 各位置がカバーされているかチェック用の配列
    const coveredPositions = new Array(textLength).fill(false);
    
    // 長さの降順にソート
    occurrences.sort((a, b) => {
        const lenDiff = (b.end - b.start) - (a.end - a.start);
        if (lenDiff !== 0) return lenDiff;
        return a.start - b.start;  // 同じ長さなら開始位置が早い方を優先
    });
    
    // 長い方から順に処理
    for (const occurrence of occurrences) {
        // この範囲が既にカバーされているかチェック
        let isUncovered = true;
        for (let i = occurrence.start; i < occurrence.end; i++) {
            if (coveredPositions[i]) {
                isUncovered = false;
                break;
            }
        }
        
        if (isUncovered) {
            // この範囲を使用
            finalOccurrences.push(occurrence);
            
            // 範囲をカバー済みとしてマーク
            for (let i = occurrence.start; i < occurrence.end; i++) {
                coveredPositions[i] = true;
            }
        }
    }
    
    return finalOccurrences;
}

// HTMLタグを保持しながら段落に分割する関数
function splitIntoParagraphs(html) {
    // 単一の改行をスペースに変換（HTMLタグは変更しない）
    // 正規表現で「タグの外側の改行」だけを対象にする
    const htmlWithoutSingleBreaks = html.replace(/([^>])\n([^<])/g, '$1 $2');
    
    // 文を分割する正規表現パターン
    // 1. ピリオド+スペース+大文字で始まる単語
    // 2. ピリオド+大文字で始まる単語（スペースなし）
    
    // 各文をdivで囲む処理
    let result = htmlWithoutSingleBreaks;
    
    // ピリオド+スペース+大文字のパターン
    result = result.replace(/\.(\s+)(?![^<]*>|[a-z])([A-Z][^\.]*\.)/g, '.</div><div class="sentence">$1$2');
    
    // ピリオド+大文字のパターン（スペースなし）
    result = result.replace(/\.(?![^<]*>|[a-z0-9])([A-Z][^\.]*\.)/g, '.</div><div class="sentence">$1');
    
    // 最初のdivの閉じタグを削除し、最後のdivの開始タグを追加
    result = '<div class="sentence">' + result;
    
    // 連続した改行を検出して段落に分割
    const paragraphs = result.split(/\n\n+/);
    
    // 各段落を<p>タグで囲む
    return '<p>' + paragraphs.join('</p><p>') + '</div></p>';
}

// 回答の表示/非表示を切り替える関数 (IDを受け取るように変更)
function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (!answerElement) return; // 要素が見つからない場合は何もしない

    if (answerElement.style.display === 'block') {
        answerElement.style.display = 'none';
    } else {
        // 他に開いている回答があれば閉じる処理は省略
        answerElement.style.display = 'block';
    }
}

// グローバルスコープで関数を利用できるようにする
window.toggleAnswer = toggleAnswer;

// ページ読み込み時に長文を表示
document.addEventListener('DOMContentLoaded', renderPassage); 