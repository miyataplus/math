document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('unitCircle');
    const ctx = canvas.getContext('2d');
    const slider = document.getElementById('angleSlider');
    const angleValueDisplay = document.getElementById('angleValue');
    const radianValueDisplay = document.getElementById('radianValue');
    const sinValueDisplay = document.getElementById('sinValue');
    const cosValueDisplay = document.getElementById('cosValue');
    const tanValueDisplay = document.getElementById('tanValue');
    const sinTitleDisplay = document.getElementById('sinTitle');
    const cosTitleDisplay = document.getElementById('cosTitle');
    const tanTitleDisplay = document.getElementById('tanTitle');
    const cursorGuide = document.getElementById('cursorGuide');
    
    // 辺の長さラベル要素
    const baseLabelDisplay = document.getElementById('baseLabel');
    const heightLabelDisplay = document.getElementById('heightLabel');
    const hypotenuseLabelDisplay = document.getElementById('hypotenuseLabel');
    
    // タイトルをKaTeXで表示
    katex.render("\\sin(\\theta) = \\frac{\\color{#4CAF50}{\\phantom{|} \\text{高さ} \\phantom{|}}}{\\color{#E91E63}{\\phantom{|} \\text{斜辺} \\phantom{|}}}", sinTitleDisplay);
    katex.render("\\cos(\\theta) = \\frac{\\color{#2196F3}{\\phantom{|} \\text{底辺} \\phantom{|}}}{\\color{#E91E63}{\\phantom{|} \\text{斜辺} \\phantom{|}}}", cosTitleDisplay);
    katex.render("\\tan(\\theta) = \\frac{\\color{#4CAF50}{\\phantom{|} \\text{高さ} \\phantom{|}}}{\\color{#2196F3}{\\phantom{|} \\text{底辺} \\phantom{|}}}", tanTitleDisplay);
    
    // 特殊角度のリスト (スライダーのステップに対応)
    const specialAngles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330];
    
    // キャンバスの中心と半径（後でupdateCanvasDimensions()で更新される）
    let centerX;
    let centerY;
    let radius;
    
    // 最後に設定された角度を保存する変数
    let lastAngleValue = 0;
    
    // キャンバスの中心と半径を計算する関数（レスポンシブ対応）
    function updateCanvasDimensions() {
        const canvas = document.getElementById('unitCircle');
        // キャンバスの実際の表示サイズに合わせる
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        
        // キャンバスの内部解像度を表示サイズに合わせる（高解像度ディスプレイ対応）
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
        }
        
        // 中心と半径を再計算
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
        radius = Math.min(centerX, centerY) * 0.8; // 表示領域の80%を使用
        
        // サイズが変わった場合は現在の角度で再描画
        const angleIndex = parseInt(slider.value);
        const angle = specialAngles[angleIndex] || lastAngleValue;
        draw(angle);
    }
    
    // 初期サイズ調整
    updateCanvasDimensions();
    
    // ウィンドウサイズが変更されたときに再調整
    window.addEventListener('resize', function() {
        updateCanvasDimensions();
    });
    
    // 描画関数の呼び出しを抑制するフラグ
    let isDrawingLocked = false;
    
    // 描画処理を最適化する関数
    function optimizedDraw(angleInDegrees) {
        // 描画ロックがかかっている場合は処理をスキップ
        if (isDrawingLocked) return;
        
        // 短時間の連続描画を防止するために描画ロックをかける
        isDrawingLocked = true;
        
        // 角度が特殊角でなければ、最も近い特殊角に修正
        if (specialAngles.indexOf(angleInDegrees) === -1) {
            // 最も近い特殊角を見つける
            let closestAngle = specialAngles[0];
            let minDiff = Math.abs(specialAngles[0] - angleInDegrees);
            
            for (let i = 1; i < specialAngles.length; i++) {
                const diff = Math.abs(specialAngles[i] - angleInDegrees);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestAngle = specialAngles[i];
                }
            }
            
            angleInDegrees = closestAngle;
        }
        
        // 実際の描画処理
        draw(angleInDegrees);
        
        // 短時間後に描画ロックを解除
        setTimeout(() => {
            isDrawingLocked = false;
        }, 50);
    }
    
    // 角度を更新する関数
    function updateAngle(angle) {
        // 特殊角度配列のインデックスを見つける
        const angleIndex = specialAngles.indexOf(angle);
        if (angleIndex !== -1) {
            slider.value = angleIndex;
            // 角度を保存
            lastAngleValue = angle;
            // 最適化された描画関数を使用
            optimizedDraw(angle);
            return;
        }
        
        // 特殊角以外の場合は最も近い特殊角に強制する
        let closestIndex = 0;
        let minDiff = Math.abs(specialAngles[0] - angle);
        
        for (let i = 1; i < specialAngles.length; i++) {
            const diff = Math.abs(specialAngles[i] - angle);
            if (diff < minDiff) {
                minDiff = diff;
                closestIndex = i;
            }
        }
        
        const closestAngle = specialAngles[closestIndex];
        slider.value = closestIndex;
        // 角度を保存
        lastAngleValue = closestAngle;
        // 最適化された描画関数を使用
        optimizedDraw(closestAngle);
    }
    
    // スライダーの値が変更されたときのイベントリスナー
    slider.addEventListener('input', function() {
        const angleIndex = parseInt(this.value);
        const angle = specialAngles[angleIndex];
        // 角度を保存
        lastAngleValue = angle;
        // 最適化された描画関数を使用
        optimizedDraw(angle);
    });
    
    // キャンバスのクリックイベントリスナー
    canvas.addEventListener('click', function(event) {
        handleMouseInteraction(event, true);
    });
    
    // マウス移動イベントリスナー
    canvas.addEventListener('mousemove', function(event) {
        handleMouseInteraction(event, false);
    });
    
    // マウスがキャンバスから離れたときのイベントリスナー
    canvas.addEventListener('mouseleave', function() {
        cursorGuide.style.display = 'none';
    });
    
    // タッチイベントのサポート（モバイルデバイス用）
    canvas.addEventListener('touchstart', function(event) {
        event.preventDefault(); // デフォルトのスクロール動作を防止
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            handleTouchInteraction(touch);
        }
    }, { passive: false });
    
    canvas.addEventListener('touchmove', function(event) {
        event.preventDefault(); // デフォルトのスクロール動作を防止
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            handleTouchInteraction(touch);
        }
    }, { passive: false });
    
    // ウィンドウのスクロールイベントを追加（モバイルでのスクロール時の修正）
    let scrollTimeout;
    
    // スライダーの値が変わったときに最後の角度を更新
    slider.addEventListener('change', function() {
        const angleIndex = parseInt(this.value);
        lastAngleValue = specialAngles[angleIndex];
    });
    
    window.addEventListener('scroll', function() {
        // スクロール中は何もしない（スクロールだけでは角度を変更しない）
        clearTimeout(scrollTimeout);
        
        // スクロール停止後、現在設定されている角度を再描画
        scrollTimeout = setTimeout(function() {
            // スライダーの現在値から角度を取得
            const angleIndex = parseInt(slider.value);
            const angle = specialAngles[angleIndex] || lastAngleValue;
            
            // 通常の描画関数を使用
            draw(angle);
        }, 100);
    });
    
    // タッチエンドイベント後にも角度を正しく保つための処理
    canvas.addEventListener('touchend', function(event) {
        // タッチ終了後、正しい特殊角を設定
        const angleIndex = parseInt(slider.value);
        const angle = specialAngles[angleIndex];
        
        // カーソルガイドをすぐに非表示
        cursorGuide.style.display = 'none';
        
        // 描画ロックが解除された後に一度だけ描画を確実に実行
        setTimeout(function() {
            // 通常の描画関数を使用（ロックされていない状態で確実に描画）
            isDrawingLocked = false; // 強制的にロック解除
            draw(angle); // 確実に描画
        }, 100);
    });
    
    // マウス操作の共通処理関数
    function handleMouseInteraction(event, isClick) {
        // クリック/カーソル位置を取得（キャンバス内の相対座標）
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // 中心からの距離と角度を計算
        const dx = x - centerX;
        const dy = centerY - y; // y軸は下向きが正なので反転
        
        // 中心からの距離（半径）を計算
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 円周からの距離を計算
        const distanceFromCircle = Math.abs(distance - radius);
        
        // カーソルガイドの表示・位置設定
        const CIRCLE_PROXIMITY_THRESHOLD = 80; // 円周からの距離のしきい値（px）
        
        if (distanceFromCircle <= CIRCLE_PROXIMITY_THRESHOLD) {
            // 円周に近い場合、角度を計算
            let angle = Math.atan2(dy, dx);
            if (angle < 0) angle += 2 * Math.PI; // 0～2πの範囲に調整
            
            // ラジアンから度数法に変換
            let degrees = angle * 180 / Math.PI;
            
            // 最も近い特殊角を見つける
            let closestAngle = specialAngles[0];
            let minDiff = Math.abs(degrees - specialAngles[0]);
            
            for (let i = 1; i < specialAngles.length; i++) {
                const diff = Math.abs(degrees - specialAngles[i]);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestAngle = specialAngles[i];
                }
            }
            
            // カーソルガイドの位置を特殊角に合わせて更新
            const guideAngleInRadians = closestAngle * Math.PI / 180;
            const guideX = centerX + radius * Math.cos(guideAngleInRadians);
            const guideY = centerY - radius * Math.sin(guideAngleInRadians);
            
            cursorGuide.style.display = 'block';
            cursorGuide.style.left = `${guideX}px`;
            cursorGuide.style.top = `${guideY}px`;
            
            // クリック時またはクリック可能距離内の場合のみ角度を更新
            if (isClick) {
                // 角度を保存
                lastAngleValue = closestAngle;
                updateAngle(closestAngle);
            }
        } else {
            // 円周から離れている場合、カーソルガイドを非表示
            cursorGuide.style.display = 'none';
            
            // クリック時に円内部をクリックした場合、最も近い特殊角を選択
            if (isClick && distance <= radius * 1.2) {
                let angle = Math.atan2(dy, dx);
                if (angle < 0) angle += 2 * Math.PI;
                let degrees = angle * 180 / Math.PI;
                
                // 最も近い特殊角を見つける
                let closestAngle = specialAngles[0];
                let minDiff = Math.abs(degrees - specialAngles[0]);
                
                for (let i = 1; i < specialAngles.length; i++) {
                    const diff = Math.abs(degrees - specialAngles[i]);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestAngle = specialAngles[i];
                    }
                }
                
                // 角度を保存
                lastAngleValue = closestAngle;
                updateAngle(closestAngle);
            }
        }
    }
    
    // タッチイベント処理の共通関数
    function handleTouchInteraction(touch) {
        const rect = canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // 中心からの距離と角度を計算
        const dx = x - centerX;
        const dy = centerY - y;
        
        // 中心からの距離（半径）を計算
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 円周からの距離を計算
        const distanceFromCircle = Math.abs(distance - radius);
        
        // 円周の近く（半径の±25%）のタッチのみ処理
        const proximityThreshold = radius * 0.25;
        if (distanceFromCircle > proximityThreshold && distance > radius) {
            return; // 円周から離れている場合は何もしない
        }
        
        // 角度をラジアンで計算
        let angle = Math.atan2(dy, dx);
        if (angle < 0) angle += 2 * Math.PI;
        
        // ラジアンから度数法に変換
        let degrees = angle * 180 / Math.PI;
        
        // 最も近い特殊角を見つける
        let closestAngle = specialAngles[0];
        let minDiff = Math.abs(degrees - specialAngles[0]);
        
        for (let i = 1; i < specialAngles.length; i++) {
            const diff = Math.abs(degrees - specialAngles[i]);
            if (diff < minDiff) {
                minDiff = diff;
                closestAngle = specialAngles[i];
            }
        }
        
        // 角度を保存
        lastAngleValue = closestAngle;
        
        // 特殊角に即座に更新（表示もすぐに更新）
        updateAngle(closestAngle);
        
        // カーソルガイドの位置を特殊角に合わせて更新
        const angleInRadians = closestAngle * Math.PI / 180;
        const guideX = centerX + radius * Math.cos(angleInRadians);
        const guideY = centerY - radius * Math.sin(angleInRadians);
        
        cursorGuide.style.display = 'block';
        cursorGuide.style.left = `${guideX}px`;
        cursorGuide.style.top = `${guideY}px`;
    }
    
    // 三角関数の値を分数形式に変換する関数
    function getFractionRepresentation(value, angle) {
        // nullの場合は「無し」と表示
        if (value === null) {
            return "無し";
        }
        
        // 特殊角における正確な値を返す
        const cos30 = Math.sqrt(3) / 2;
        const sin30 = 1 / 2;
        
        // 誤差を考慮して近似値を比較
        const isCloseTo = (a, b) => Math.abs(a - b) < 0.0001;
        
        // sinの値
        if (isCloseTo(value, 0)) return "0";
        if (isCloseTo(value, 1)) return "1";
        if (isCloseTo(value, -1)) return "-1";
        if (isCloseTo(value, 1/2)) return '<div class="frac"><span>1</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, -1/2)) return '<div class="frac"><span>-1</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, Math.sqrt(2)/2)) return '<div class="frac"><span>√2</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, -Math.sqrt(2)/2)) return '<div class="frac"><span>-√2</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, Math.sqrt(3)/2)) return '<div class="frac"><span>√3</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, -Math.sqrt(3)/2)) return '<div class="frac"><span>-√3</span><span class="bottom">2</span><span class="symbol">/</span></div>';
        
        // tanの値
        if (isCloseTo(value, Math.sqrt(3))) return "√3";
        if (isCloseTo(value, -Math.sqrt(3))) return "-√3";
        if (isCloseTo(value, 1/Math.sqrt(3))) return '<div class="frac"><span>1</span><span class="bottom">√3</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, -1/Math.sqrt(3))) return '<div class="frac"><span>-1</span><span class="bottom">√3</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, Math.sqrt(3)/3)) return '<div class="frac"><span>√3</span><span class="bottom">3</span><span class="symbol">/</span></div>';
        if (isCloseTo(value, -Math.sqrt(3)/3)) return '<div class="frac"><span>-√3</span><span class="bottom">3</span><span class="symbol">/</span></div>';
        
        // その他の値
        if (angle % 90 === 0 && !isFinite(value)) {
            return "無し";
        }
        
        // 少数表示（特殊角以外の場合）
        return value.toFixed(4);
    }
    
    // ラジアン表示をKaTeXを使って数式として表示する関数
    function getRadianKatexRepresentation(angleInDegrees) {
        // 角度からラジアン表示の分数とπの形式を返す
        switch(angleInDegrees) {
            case 0: return "0";
            case 30: return "\\frac{1}{6}\\pi";
            case 45: return "\\frac{1}{4}\\pi";
            case 60: return "\\frac{1}{3}\\pi";
            case 90: return "\\frac{1}{2}\\pi";
            case 120: return "\\frac{2}{3}\\pi";
            case 135: return "\\frac{3}{4}\\pi";
            case 150: return "\\frac{5}{6}\\pi";
            case 180: return "\\pi";
            case 210: return "\\frac{7}{6}\\pi";
            case 225: return "\\frac{5}{4}\\pi";
            case 240: return "\\frac{4}{3}\\pi";
            case 270: return "\\frac{3}{2}\\pi";
            case 300: return "\\frac{5}{3}\\pi";
            case 315: return "\\frac{7}{4}\\pi";
            case 330: return "\\frac{11}{6}\\pi";
            default:
                // その他の角度の場合は少数表示にフォールバック
                return (angleInDegrees * Math.PI / 180).toFixed(2) + " \\text{ rad}";
        }
    }
    
    // 角度から点の座標を計算する関数
    function getPointCoordinates(angleInDegrees) {
        const angleInRadians = angleInDegrees * Math.PI / 180;
        const x = centerX + radius * Math.cos(angleInRadians);
        const y = centerY - radius * Math.sin(angleInRadians);
        return { x, y, radians: angleInRadians };
    }
    
    // 描画関数
    function draw(angleInDegrees) {
        // 角度が特殊角でなければ、最も近い特殊角に修正
        if (specialAngles.indexOf(angleInDegrees) === -1) {
            // 最も近い特殊角を見つける
            let closestAngle = specialAngles[0];
            let minDiff = Math.abs(specialAngles[0] - angleInDegrees);
            
            for (let i = 1; i < specialAngles.length; i++) {
                const diff = Math.abs(specialAngles[i] - angleInDegrees);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestAngle = specialAngles[i];
                }
            }
            
            angleInDegrees = closestAngle;
        }
        
        // requestAnimationFrameを使用して描画を最適化
        requestAnimationFrame(function() {
            performDraw(angleInDegrees);
        });
    }
    
    // 実際の描画処理を行う関数
    function performDraw(angleInDegrees) {
        // キャンバスをクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 座標軸を描画
        ctx.strokeStyle = '#aaa';
        ctx.lineWidth = 1;
        
        // x軸
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvas.width, centerY);
        ctx.stroke();
        
        // y軸
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvas.height);
        ctx.stroke();
        
        // 単位円を描画
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 角度のラベルを追加
        const labels = [
            {angle: 0, text: '0°'},
            {angle: 30, text: '30°'},
            {angle: 45, text: '45°'},
            {angle: 60, text: '60°'},
            {angle: 90, text: '90°'},
            {angle: 120, text: '120°'},
            {angle: 135, text: '135°'},
            {angle: 150, text: '150°'},
            {angle: 180, text: '180°'},
            {angle: 210, text: '210°'},
            {angle: 225, text: '225°'},
            {angle: 240, text: '240°'},
            {angle: 270, text: '270°'},
            {angle: 300, text: '300°'},
            {angle: 315, text: '315°'},
            {angle: 330, text: '330°'}
        ];
        
        // 画面サイズに応じてラベルの数を調整
        const labelsToShow = window.innerWidth < 480 
            ? labels.filter(l => l.angle % 90 === 0) // モバイルでは90度間隔のみ表示
            : window.innerWidth < 768 
                ? labels.filter(l => l.angle % 45 === 0) // タブレットでは45度間隔で表示
                : labels; // デスクトップでは全て表示
        
        ctx.font = window.innerWidth < 480 ? '9px Arial' : '12px Arial';
        ctx.fillStyle = '#666';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        labelsToShow.forEach(label => {
            const pos = getPointCoordinates(label.angle);
            const labelRadius = radius + (window.innerWidth < 480 ? 10 : 20);
            const labelX = centerX + labelRadius * Math.cos(pos.radians);
            const labelY = centerY - labelRadius * Math.sin(pos.radians);
            ctx.fillStyle = '#666'; // 角度ラベルの色を設定
            ctx.fillText(label.text, labelX, labelY);
        });
        
        // 角度に対応する点の座標を計算
        const point = getPointCoordinates(angleInDegrees);
        const angleInRadians = point.radians;
        
        // 三角関数の値を計算
        const sinValue = Math.sin(angleInRadians);
        const cosValue = Math.cos(angleInRadians);
        let tanValue = Math.tan(angleInRadians);
        
        // tan値が非常に大きい場合（90度や270度付近）は特別に処理
        if (Math.abs(tanValue) > 1000000 || !isFinite(tanValue)) {
            tanValue = null; // 表示用に無効値を設定
        }
        
        // 角度を表示
        angleValueDisplay.textContent = `${angleInDegrees}°`;
        
        // KaTeXを使ってラジアン表示
        const katexFormula = getRadianKatexRepresentation(angleInDegrees);
        katex.render(katexFormula, radianValueDisplay);
        
        // 三角関数の値をKaTeX形式に変換する関数（色付き）
        function getColoredKatexFormula(value, angle, type) {
            // nullの場合は「無し」と表示
            if (value === null) {
                return "\\text{無し}";
            }
            
            // 特殊角における正確な値を返す
            const isCloseTo = (a, b) => Math.abs(a - b) < 0.0001;
            
            // tan(90°)とtan(270°)のケースを特別に処理
            if ((angle === 90 || angle === 270) && Math.abs(value) > 1000000) {
                return "\\text{無し}";
            }
            
            // 色の設定
            const heightColor = "#4CAF50"; // 緑色（高さ）
            const baseColor = "#2196F3";   // 青色（底辺）
            
            // sin, cos, tanの色を設定
            if (type === "sin") {
                // sinは常に緑色
                if (isCloseTo(value, 0)) return "\\color{" + heightColor + "}{0}";
                if (isCloseTo(value, 1)) return "\\color{" + heightColor + "}{1}";
                if (isCloseTo(value, -1)) return "\\color{" + heightColor + "}{-1}";
                if (isCloseTo(value, 1/2)) return `\\color{${heightColor}}{\\frac{\\phantom{|} 1 \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -1/2)) return `\\color{${heightColor}}{-\\frac{\\phantom{|} 1 \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, Math.sqrt(2)/2)) return `\\color{${heightColor}}{\\frac{\\phantom{|} \\sqrt{2} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(2)/2)) return `\\color{${heightColor}}{-\\frac{\\phantom{|} \\sqrt{2} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, Math.sqrt(3)/2)) return `\\color{${heightColor}}{\\frac{\\phantom{|} \\sqrt{3} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(3)/2)) return `\\color{${heightColor}}{-\\frac{\\phantom{|} \\sqrt{3} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                // その他の値
                return "\\color{" + heightColor + "}{" + value.toFixed(4) + "}";
            }
            else if (type === "cos") {
                // cosは常に青色
                if (isCloseTo(value, 0)) return "\\color{" + baseColor + "}{0}";
                if (isCloseTo(value, 1)) return "\\color{" + baseColor + "}{1}";
                if (isCloseTo(value, -1)) return "\\color{" + baseColor + "}{-1}";
                if (isCloseTo(value, 1/2)) return `\\color{${baseColor}}{\\frac{\\phantom{|} 1 \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -1/2)) return `\\color{${baseColor}}{-\\frac{\\phantom{|} 1 \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, Math.sqrt(2)/2)) return `\\color{${baseColor}}{\\frac{\\phantom{|} \\sqrt{2} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(2)/2)) return `\\color{${baseColor}}{-\\frac{\\phantom{|} \\sqrt{2} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, Math.sqrt(3)/2)) return `\\color{${baseColor}}{\\frac{\\phantom{|} \\sqrt{3} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(3)/2)) return `\\color{${baseColor}}{-\\frac{\\phantom{|} \\sqrt{3} \\phantom{|}}{\\phantom{|} 2 \\phantom{|}}}`;
                // その他の値
                return "\\color{" + baseColor + "}{" + value.toFixed(4) + "}";
            }
            else if (type === "tan") {
                // tanは分子が緑色、分母が青色
                if (isCloseTo(value, 0)) return "0";
                if (isCloseTo(value, 1)) return "1";
                if (isCloseTo(value, -1)) return "-1";
                // tanの値 - 特殊角
                if (isCloseTo(value, Math.sqrt(3))) return `\\frac{\\color{${heightColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} 1 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(3))) return `-\\frac{\\color{${heightColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} 1 \\phantom{|}}}`;
                if (isCloseTo(value, 1/Math.sqrt(3))) return `\\frac{\\color{${heightColor}}{\\phantom{|} 1 \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}`;
                if (isCloseTo(value, -1/Math.sqrt(3))) return `-\\frac{\\color{${heightColor}}{\\phantom{|} 1 \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}`;
                if (isCloseTo(value, Math.sqrt(3)/3)) return `\\frac{\\color{${heightColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} 3 \\phantom{|}}}`;
                if (isCloseTo(value, -Math.sqrt(3)/3)) return `-\\frac{\\color{${heightColor}}{\\phantom{|} \\sqrt{3} \\phantom{|}}}{\\color{${baseColor}}{\\phantom{|} 3 \\phantom{|}}}`;
                
                // その他の値
                if (angle % 90 === 0 && !isFinite(value)) {
                    return "\\text{無し}";
                }
                
                // 近似的な分数表示を行う
                return `\\frac{\\color{${heightColor}}{\\text{約} ${(value).toFixed(2)}}}{\\color{${baseColor}}{1}}`;
            }
            
            // デフォルト
            return value.toFixed(4);
        }

        // KaTeXを使って三角関数の値を表示（分数形式、色付き）
        const valueDisplayStyle = "\\displaystyle";
        katex.render(`${valueDisplayStyle} ${getColoredKatexFormula(sinValue, angleInDegrees, "sin")}`, sinValueDisplay, {
            fontSize: window.innerWidth < 480 ? '1.5em' : '1.8em'
        });
        katex.render(`${valueDisplayStyle} ${getColoredKatexFormula(cosValue, angleInDegrees, "cos")}`, cosValueDisplay, {
            fontSize: window.innerWidth < 480 ? '1.5em' : '1.8em'
        });
        katex.render(`${valueDisplayStyle} ${getColoredKatexFormula(tanValue, angleInDegrees, "tan")}`, tanValueDisplay, {
            fontSize: window.innerWidth < 480 ? '1.5em' : '1.8em'
        });
        
        // 角度線を描画
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = '#E91E63';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 円弧を描画
        ctx.beginPath();
        const startAngle = 0;
        const angleIn360 = angleInDegrees % 360; // 角度を0〜359の範囲に正規化
        const reverseAngle = (360 - angleIn360) % 360; // 360°から引いた値
        const reverseAngleInRadians = reverseAngle * Math.PI / 180; // ラジアンに変換
        ctx.arc(centerX, centerY, 40, startAngle, reverseAngleInRadians, true); // 反時計回りに描画
        ctx.strokeStyle = '#9C27B0';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 直角三角形を描画
        const triangleX = centerX + radius * cosValue;
        const triangleY = centerY;
        
        // 横線（cosθ）
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(triangleX, triangleY);
        ctx.strokeStyle = '#2196F3'; // 青色
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 縦線（sinθ）
        ctx.beginPath();
        ctx.moveTo(triangleX, triangleY);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = '#4CAF50'; // 緑色
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // 点を描画
        ctx.beginPath();
        ctx.arc(point.x, point.y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#E91E63';
        ctx.fill();
        
        // 座標値を表示
        ctx.font = '14px Arial';
        
        // 各辺の長さを計算
        const hypotenuse = 1; // 単位円上の点なので斜辺は常に1
        const base = Math.abs(cosValue); // 底辺の長さ（x座標の絶対値）
        const height = Math.abs(sinValue); // 高さ（y座標の絶対値）
        
        // 三角関数の値をKaTeX形式に変換する関数
        function getKatexFormula(value, angle) {
            // nullの場合は「無し」と表示
            if (value === null) {
                return "\\text{無し}";
            }
            
            // 特殊角における正確な値を返す
            const isCloseTo = (a, b) => Math.abs(a - b) < 0.0001;
            
            // tan(90°)とtan(270°)のケースを特別に処理
            if ((angle === 90 || angle === 270) && Math.abs(value) > 1000000) {
                return "\\text{無し}";
            }
            
            // sin/cosの値
            if (isCloseTo(value, 0)) return "0";
            if (isCloseTo(value, 1)) return "1";
            if (isCloseTo(value, -1)) return "-1";
            if (isCloseTo(value, 1/2)) return "\\frac{1}{2}";
            if (isCloseTo(value, -1/2)) return "-\\frac{1}{2}";
            if (isCloseTo(value, Math.sqrt(2)/2)) return "\\frac{\\sqrt{2}}{2}";
            if (isCloseTo(value, -Math.sqrt(2)/2)) return "-\\frac{\\sqrt{2}}{2}";
            if (isCloseTo(value, Math.sqrt(3)/2)) return "\\frac{\\sqrt{3}}{2}";
            if (isCloseTo(value, -Math.sqrt(3)/2)) return "-\\frac{\\sqrt{3}}{2}";
            
            // tanの値
            if (isCloseTo(value, Math.sqrt(3))) return "\\sqrt{3}";
            if (isCloseTo(value, -Math.sqrt(3))) return "-\\sqrt{3}";
            if (isCloseTo(value, 1/Math.sqrt(3))) return "\\frac{1}{\\sqrt{3}}";
            if (isCloseTo(value, -1/Math.sqrt(3))) return "-\\frac{1}{\\sqrt{3}}";
            if (isCloseTo(value, Math.sqrt(3)/3)) return "\\frac{\\sqrt{3}}{3}";
            if (isCloseTo(value, -Math.sqrt(3)/3)) return "-\\frac{\\sqrt{3}}{3}";
            
            // その他の値
            if (angle % 90 === 0 && !isFinite(value)) {
                return "\\text{無し}";
            }
            
            // 少数表示（特殊角以外の場合）
            return value.toFixed(4);
        }
        
        // 底辺の長さを表示（青色）
        const baseFormula = getKatexFormula(cosValue, angleInDegrees);
        katex.render(`\\text{底辺} = ${baseFormula}`, baseLabelDisplay);
        
        // 高さを表示（緑色）
        const heightFormula = getKatexFormula(sinValue, angleInDegrees);
        katex.render(`\\text{高さ} = ${heightFormula}`, heightLabelDisplay);
        
        // 斜辺の長さを表示（赤色）
        katex.render(`\\text{斜辺} = 1`, hypotenuseLabelDisplay);
        
        // 画面サイズに応じてオフセットを調整
        const textOffsetY = window.innerWidth < 480 ? 8 : 15;
        const textOffsetX = window.innerWidth < 480 ? 3 : 10;
        
        // 既存のテキストオーバーレイ要素を削除
        document.querySelectorAll('.canvas-text-overlay').forEach(el => el.remove());
        
        // オーバーレイ要素を作成するヘルパー関数
        function createOverlayElement(formula, x, y, color) {
            const overlay = document.createElement('div');
            overlay.className = 'canvas-text-overlay';
            overlay.style.position = 'absolute';
            overlay.style.left = `${x}px`;
            overlay.style.top = `${y}px`;
            overlay.style.transform = 'translate(-50%, -50%)';
            overlay.style.pointerEvents = 'none';
            overlay.style.color = color;
            overlay.style.fontSize = window.innerWidth < 480 ? '1.2rem' : '1.5em';
            overlay.style.fontWeight = 'bold'; // 太字に設定
            overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'; // 半透明の白色背景
            overlay.style.padding = '2px';
            overlay.style.borderRadius = '3px';
            canvas.parentNode.appendChild(overlay);
            katex.render(formula, overlay);
            return overlay;
        }
        
        // 辺のラベル表示のための共通設定
        const distanceFromEdge = 45;
        
        // 底辺の説明 (90°と270°のときは非表示)
        if (angleInDegrees !== 90 && angleInDegrees !== 270) {
            // 三角形の頂点
            const A = {x: centerX, y: centerY}; // 原点
            const B = {x: triangleX, y: triangleY}; // 底辺上の点
            const C = {x: point.x, y: point.y}; // 円周上の点
            
            // 底辺の中点
            const midAB = {x: (A.x + B.x) / 2, y: (A.y + B.y) / 2};
            
            // 重心の計算
            const centroid = {
                x: (A.x + B.x + C.x) / 3,
                y: (A.y + B.y + C.y) / 3
            };
            
            // 底辺の中点から重心への方向ベクトル
            const vecX = midAB.x - centroid.x;
            const vecY = midAB.y - centroid.y;
            
            // ベクトルの長さを正規化
            const length = Math.sqrt(vecX * vecX + vecY * vecY);
            const normalizedVecX = vecX / length;
            const normalizedVecY = vecY / length;
            
            // 正規化されたベクトルを使用して底辺の中点から一定距離離れた位置を計算
            const baseX = midAB.x + normalizedVecX * distanceFromEdge;
            const baseY = midAB.y + normalizedVecY * distanceFromEdge;
            
            createOverlayElement(baseFormula, baseX, baseY, '#2196F3');
        }
        
        // 高さの説明 (0°と180°のときは非表示)
        if (angleInDegrees !== 0 && angleInDegrees !== 180 && angleInDegrees !== 360) {
            // 三角形の頂点
            const A = {x: centerX, y: centerY}; // 原点
            const B = {x: triangleX, y: triangleY}; // 底辺上の点
            const C = {x: point.x, y: point.y}; // 円周上の点
            
            // 高さの中点
            const midBC = {x: (B.x + C.x) / 2, y: (B.y + C.y) / 2};
            
            // 重心の計算
            const centroid = {
                x: (A.x + B.x + C.x) / 3,
                y: (A.y + B.y + C.y) / 3
            };
            
            // 高さの中点から重心への方向ベクトル
            const vecX = midBC.x - centroid.x;
            const vecY = midBC.y - centroid.y;
            
            // ベクトルの長さを正規化
            const length = Math.sqrt(vecX * vecX + vecY * vecY);
            const normalizedVecX = vecX / length;
            const normalizedVecY = vecY / length;
            
            // 正規化されたベクトルを使用して高さの中点から一定距離離れた位置を計算
            const heightX = midBC.x + normalizedVecX * distanceFromEdge;
            const heightY = midBC.y + normalizedVecY * distanceFromEdge;
            
            createOverlayElement(heightFormula, heightX, heightY, '#4CAF50');
        }
        
        if (angleInDegrees !== 0 && angleInDegrees !== 180 && angleInDegrees !== 360) {
            // 斜辺の説明
            // 三角形の頂点
            const A = {x: centerX, y: centerY}; // 原点
            const B = {x: triangleX, y: triangleY}; // 底辺上の点
            const C = {x: point.x, y: point.y}; // 円周上の点
            
            // 斜辺の中点
            const midAC = {x: (A.x + C.x) / 2, y: (A.y + C.y) / 2};
            
            // 重心の計算
            const centroid = {
                x: (A.x + B.x + C.x) / 3,
                y: (A.y + B.y + C.y) / 3
            };
            
            // 斜辺の中点から重心への方向ベクトル
            const vecX = midAC.x - centroid.x;
            const vecY = midAC.y - centroid.y;
            
            // ベクトルの長さを正規化
            const length = Math.sqrt(vecX * vecX + vecY * vecY);
            const normalizedVecX = vecX / length;
            const normalizedVecY = vecY / length;
            
            // 正規化されたベクトルを使用して斜辺の中点から一定距離離れた位置を計算
            const hypotenuseX = midAC.x + normalizedVecX * distanceFromEdge;
            const hypotenuseY = midAC.y + normalizedVecY * distanceFromEdge;
            
            createOverlayElement(`1`, hypotenuseX, hypotenuseY, '#E91E63');
        }
    }
    
    // 初期化時に最後の角度値を設定（スライダーの初期値を使用）
    const initialAngleIndex = parseInt(slider.value) || 0;
    lastAngleValue = specialAngles[initialAngleIndex];
    
    // 初期描画（直接performDrawを呼び出して確実に描画）
    performDraw(lastAngleValue);
}); 