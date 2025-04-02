// サンプル長文データ
const passageData = {
    // タイトルと本文を分離 (プログラムでの処理を容易にするため)
    title: "The Impact of Technology on Modern Education",
    text: `Technology has fundamentally transformed the educational landscape in the past few decades. From interactive smartboards to online learning platforms, digital tools have revolutionized how students learn and how teachers instruct. These changes have accelerated dramatically since 2020, when the global pandemic forced educational institutions worldwide to rapidly adopt remote learning solutions.One of the most significant benefits of technology in education is the unprecedented access to information. Students can now explore vast digital libraries and educational resources from anywhere in the world. This democratization of knowledge has the potential to reduce educational inequality, though concerns about the "digital divide" remain valid as not all students have equal access to devices or reliable internet connections.Furthermore, technology enables personalized learning experiences tailored to individual student needs. Adaptive learning software can identify strengths and weaknesses, adjusting content accordingly to ensure each student progresses at an appropriate pace. This approach stands in contrast to traditional one-size-fits-all teaching methods that may leave some students behind while boring others who grasp concepts quickly.However, technology integration comes with challenges. Many educators worry about decreased attention spans and the potential for distraction when students use digital devices. There are also valid concerns about privacy and data security as more student information becomes digitized.As we move forward, finding the right balance between technological innovation and fundamental educational principles remains crucial. The most effective approach combines the efficiency and engagement of digital tools with the irreplaceable human elements of teaching: mentorship, motivation, and meaningful human connection.`,
    
    annotations: [
        {
            text: "fundamentally transformed",
            type: "phrase",
            explanation: "「根本的に変革した」という意味の重要なフレーズ。科学技術が教育に与えた影響の大きさを強調しています。",
            questions: [
                {
                    question: "transformの品詞は？",
                    answer: "ここではtransformは過去分詞(transformed)として使われ、動詞です。"
                },
                {
                    question: "fundamentallyの役割は？",
                    answer: "副詞で、transformedを修飾し、変化の程度が「根本的な」ものであることを強調しています。"
                }
            ]
        },
        {
            text: "educational landscape",
            type: "phrase",
            explanation: "「教育の風景」という意味で、教育分野全体の状況や様子を表す表現です。",
            questions: [
                {
                    question: "landscapeの本来の意味は？",
                    answer: "本来「風景」や「景観」という意味で、ここでは比喩的に教育分野全体を表しています。"
                }
            ]
        },
        {
            text: "interactive",
            type: "adjective",
            explanation: "「対話型の」「相互作用的な」という意味の形容詞。ユーザーの入力に反応する技術を表します。",
            questions: [
                {
                    question: "interactiveの語源は？",
                    answer: "「inter-(相互に)」と「active(活動的な)」から成り、「相互に作用する」という意味になります。"
                }
            ]
        },
        {
            text: "unprecedented access",
            type: "phrase",
            explanation: "「前例のないアクセス」という意味で、これまでにない規模や方法で情報にアクセスできるようになったことを示しています。",
            questions: [
                {
                    question: "unprecedentedの構成は？",
                    answer: "un-(否定の接頭辞) + precedent(先例) + -ed(形容詞化) で「先例のない」という意味になります。"
                }
            ]
        },
        {
            text: "democratization of knowledge",
            type: "phrase",
            explanation: "「知識の民主化」という重要な概念。知識や情報が一部の特権階級だけでなく、誰にでも平等に利用できるようになることを指します。",
            questions: [
                {
                    question: "この文脈での「民主化」とは？",
                    answer: "知識や情報へのアクセスが広く一般に開かれ、平等になることを指しています。"
                },
                {
                    question: "なぜこれが重要なのか？",
                    answer: "教育の機会均等につながり、社会的格差を減らす可能性があるからです。"
                }
            ]
        },
        {
            text: "digital divide",
            type: "phrase",
            explanation: "「デジタル・デバイド」。テクノロジーやインターネットへのアクセスができる人とできない人の間に生じる格差を指す重要な社会概念です。",
            questions: [
                {
                    question: "なぜ引用符で囲まれているか？",
                    answer: "一般に認知された専門用語や概念であることを示すために使われています。"
                },
                {
                    question: "本文ではどのような例が挙げられている？",
                    answer: "デバイスや信頼性の高いインターネット接続への平等なアクセスがないことが例として挙げられています。"
                }
            ]
        },
        {
            text: "personalized learning experiences",
            type: "phrase",
            explanation: "「個別化された学習体験」。生徒一人ひとりのニーズや学習スタイルに合わせた教育アプローチを指します。",
            questions: [
                {
                    question: "従来の教育方法と何が違うか？",
                    answer: "従来の「一律的な(one-size-fits-all)」教育方法と異なり、個々の学生のペースや強み・弱みに合わせた学習が可能になります。"
                }
            ]
        },
        {
            text: "adaptive learning",
            type: "phrase",
            explanation: "「適応学習」。学習者の理解度や進捗に応じて内容や難易度が自動的に調整される学習システムのことです。",
            questions: [
                {
                    question: "adaptiveの意味は？",
                    answer: "「適応する」「順応する」という意味の形容詞で、学習者に合わせて変化・適応するシステムを表しています。"
                }
            ]
        },
        {
            text: "one-size-fits-all",
            type: "phrase",
            explanation: "「一律的な」「画一的な」という意味の表現。すべての人に同じアプローチを適用する方法を指し、多様なニーズに対応できない欠点を示唆しています。",
            questions: [
                {
                    question: "この表現の由来は？",
                    answer: "衣料品業界で「フリーサイズ」を意味する表現が転じて、あらゆる状況や人に同じアプローチを適用することを批判的に表す表現になりました。"
                }
            ]
        },
        {
            text: "balance",
            type: "noun",
            explanation: "「バランス」「均衡」。この文脈では、テクノロジーの革新と基本的な教育原理との間の適切な調和を指しています。",
            questions: [
                {
                    question: "なぜバランスが重要か？",
                    answer: "テクノロジーの利点を活かしながら、教育の本質的な人間的要素を失わないために重要です。"
                }
            ]
        },
        {
            text: "Impact",
            type: "noun",
            explanation: "「影響」「衝撃」。何かが他のものに与える効果や力。",
            questions: [
                { question: "動詞形は？", answer: "動詞も impact で、「影響を与える」という意味です。" }
            ]
        },
        {
            text: "Technology",
            type: "noun",
            explanation: "「科学技術」。特定の分野における実践的な知識や応用。",
        },
        {
            text: "on",
            type: "preposition",
            explanation: "「～の上に」「～について」「～に関する」。ここでは「～に対する影響」という意味で使われています。",
            questions: [
                { question: "他の意味は？", answer: "「接触」「継続」「曜日」など、多くの意味があります。" }
            ]
        },
        {
            text: "Modern",
            type: "adjective",
            explanation: "「現代の」「近代の」。現在の時代に関連する、または特徴的な。",
        },
        {
            text: "Education",
            type: "noun",
            explanation: "「教育」。知識や技能を教え、学ぶプロセス。",
        },
        {
            text: "decades",
            type: "noun",
            explanation: "「数十年」。decade（10年間）の複数形。",
            questions: [
                { question: "a few decadesは？", answer: "「20～30年程度」を指すことが多いです。" }
            ]
        },
        {
            text: "platforms",
            type: "noun",
            explanation: "「プラットフォーム」「基盤」。ここではオンライン学習サービスなどを指します。",
        },
        {
            text: "revolutionized",
            type: "verb",
            explanation: "「革命を起こした」「根本的に変えた」。revolutionize の過去形・過去分詞。",
            questions: [
                { question: "名詞形は？", answer: "revolution (革命)" }
            ]
        },
        {
            text: "how students learn",
            type: "clause",
            explanation: "「生徒がどのように学ぶか」。名詞節として revolutionized の目的語になっています。",
        },
        {
            text: "instruct",
            type: "verb",
            explanation: "「指導する」「教える」。正式な場で使われることが多い。",
            questions: [
                { question: "teachとの違いは？", answer: "instruct はより体系的、公式な指導を指すことが多いです。" }
            ]
        },
        {
            text: "changes",
            type: "noun",
            explanation: "「変化」。change の複数形。",
        },
        {
            text: "accelerated",
            type: "verb",
            explanation: "「加速した」「促進した」。accelerate の過去形・過去分詞。",
            questions: [
                { question: "車の部品との関連は？", answer: "accelerator (アクセル) は速度を上げるための部品です。" }
            ]
        },
        {
            text: "dramatically",
            type: "adverb",
            explanation: "「劇的に」「著しく」。変化の度合いが大きいことを示します。",
        },
        {
            text: "since",
            type: "preposition", // or conjunction
            explanation: "「～以来」。過去のある時点から現在まで続くことを示します。ここでは前置詞。",
        },
        {
            text: "pandemic",
            type: "noun",
            explanation: "「パンデミック」「（病気の）世界的大流行」。",
            questions: [
                { question: "global pandemic は？", answer: "「世界的なパンデミック」と強調した表現です。" }
            ]
        },
        {
            text: "forced",
            type: "verb",
            explanation: "「強制した」「強いた」。force の過去形・過去分詞。force A to do で「Aに～することを強いる」。",
        },
        {
            text: "institutions",
            type: "noun",
            explanation: "「機関」「組織」「施設」。ここでは educational institutions で「教育機関」。",
        },
        {
            text: "worldwide",
            type: "adverb", // or adjective
            explanation: "「世界中で（に）」。ここでは副詞。",
        },
        {
            text: "rapidly",
            type: "adverb",
            explanation: "「急速に」「速く」。",
        },
        {
            text: "adopt",
            type: "verb",
            explanation: "「採用する」「導入する」。新しい方法や考え方を受け入れること。",
            questions: [
                { question: "adaptとの違いは？", answer: "adoptは「採用する」、adaptは「適応する」です。" }
            ]
        },
        {
            text: "remote learning",
            type: "phrase",
            explanation: "「リモート学習」「遠隔学習」。教室外からオンラインなどで行う学習。",
        },
        {
            text: "solutions",
            type: "noun",
            explanation: "「解決策」。solution の複数形。",
        },
        {
            text: "significant",
            type: "adjective",
            explanation: "「重要な」「意義深い」「著しい」。",
            questions: [
                { question: "名詞形は？", answer: "significance (重要性)" }
            ]
        },
        {
            text: "benefits",
            type: "noun",
            explanation: "「利点」「恩恵」。benefit の複数形。",
        },
        {
            text: "information",
            type: "noun",
            explanation: "「情報」。不可算名詞（数えられない名詞）であることに注意。",
        },
        {
            text: "explore",
            type: "verb",
            explanation: "「探求する」「探索する」「調査する」。",
        },
        {
            text: "vast",
            type: "adjective",
            explanation: "「広大な」「莫大な」。非常に広い、または大きい。",
        },
        {
            text: "resources",
            type: "noun",
            explanation: "「資源」「資料」。resource の複数形。ここでは educational resources で「教育資料」。",
        },
        {
            text: "potential",
            type: "noun",
            explanation: "「可能性」「潜在能力」。将来発展するかもしれない力。",
            questions: [
                { question: "形容詞の意味は？", answer: "形容詞では「潜在的な」という意味です。" }
            ]
        },
        {
            text: "reduce",
            type: "verb",
            explanation: "「減らす」「縮小する」。",
        },
        {
            text: "inequality",
            type: "noun",
            explanation: "「不平等」。equal (平等な) の反対。",
        },
        {
            text: "though",
            type: "conjunction",
            explanation: "「～だけれども」「～にもかかわらず」。although とほぼ同じ意味。",
        },
        {
            text: "concerns",
            type: "noun",
            explanation: "「懸念」「心配事」。concern の複数形。",
        },
        {
            text: "remain",
            type: "verb",
            explanation: "「～のままである」「依然として～である」。",
        },
        {
            text: "valid",
            type: "adjective",
            explanation: "「妥当な」「正当な」「有効な」。",
        },
        {
            text: "equal",
            type: "adjective",
            explanation: "「等しい」「平等な」。",
        },
        {
            text: "devices",
            type: "noun",
            explanation: "「装置」「機器」。device の複数形。スマートフォンやタブレットなど。",
        },
        {
            text: "reliable",
            type: "adjective",
            explanation: "「信頼できる」「頼りになる」。rely (頼る) + -able。",
        },
        {
            text: "Furthermore",
            type: "adverb",
            explanation: "「さらに」「その上」。追加情報を示す接続副詞。",
        },
        {
            text: "enables",
            type: "verb",
            explanation: "「可能にする」。enable の三単現のS。enable A to do で「Aが～するのを可能にする」。",
        },
        {
            text: "tailored to",
            type: "phrase",
            explanation: "「～に合わせて作られた」。tailor (仕立てる) から。",
        },
        {
            text: "individual",
            type: "adjective",
            explanation: "「個々の」「個人の」。",
        },
        {
            text: "identify",
            type: "verb",
            explanation: "「特定する」「識別する」。",
        },
        {
            text: "strengths",
            type: "noun",
            explanation: "「強み」「長所」。strength の複数形。",
        },
        {
            text: "weaknesses",
            type: "noun",
            explanation: "「弱み」「短所」。weakness の複数形。",
        },
        {
            text: "adjusting",
            type: "verb", // present participle
            explanation: "「調整しながら」。adjust の現在分詞。ここでは分詞構文。",
        },
        {
            text: "accordingly",
            type: "adverb",
            explanation: "「それに応じて」「したがって」。前の内容を受けて。",
        },
        {
            text: "ensure",
            type: "verb",
            explanation: "「確実にする」「保証する」。",
        },
        {
            text: "progresses",
            type: "verb",
            explanation: "「進歩する」「前進する」。progress の三単現のS。",
        },
        {
            text: "appropriate",
            type: "adjective",
            explanation: "「適切な」「ふさわしい」。",
        },
        {
            text: "pace",
            type: "noun",
            explanation: "「ペース」「速度」。",
        },
        {
            text: "approach",
            type: "noun",
            explanation: "「方法」「取り組み方」「接近」。",
        },
        {
            text: "stands in contrast to",
            type: "phrase",
            explanation: "「～と対照的である」「～と対照をなす」。",
        },
        {
            text: "traditional",
            type: "adjective",
            explanation: "「伝統的な」「従来の」。",
        },
        {
            text: "methods",
            type: "noun",
            explanation: "「方法」。method の複数形。",
        },
        {
            text: "leave some students behind",
            type: "phrase",
            explanation: "「一部の生徒を置き去りにする」。",
        },
        {
            text: "grasp",
            type: "verb",
            explanation: "「理解する」「把握する」。元々は「つかむ」という意味。",
        },
        {
            text: "concepts",
            type: "noun",
            explanation: "「概念」。concept の複数形。",
        },
        {
            text: "quickly",
            type: "adverb",
            explanation: "「速く」「素早く」。",
        },
        {
            text: "However",
            type: "adverb",
            explanation: "「しかしながら」。逆接を示す接続副詞。",
        },
        {
            text: "integration",
            type: "noun",
            explanation: "「統合」。integrate (統合する) の名詞形。",
        },
        {
            text: "challenges",
            type: "noun",
            explanation: "「課題」「難題」。challenge の複数形。",
        },
        {
            text: "educators",
            type: "noun",
            explanation: "「教育者」。educate (教育する) + -or (人)。",
        },
        {
            text: "decreased",
            type: "adjective", // past participle used as adjective
            explanation: "「減少した」。decrease (減少する) の過去分詞。",
        },
        {
            text: "attention spans",
            type: "phrase",
            explanation: "「注意持続時間」。span は「期間」。",
        },
        {
            text: "potential for",
            type: "phrase",
            explanation: "「～の可能性」。",
        },
        {
            text: "distraction",
            type: "noun",
            explanation: "「注意散漫」「気を散らすもの」。distract (気を散らす) の名詞形。",
        },
        {
            text: "privacy",
            type: "noun",
            explanation: "「プライバシー」「個人情報」。",
        },
        {
            text: "data security",
            type: "phrase",
            explanation: "「データセキュリティ」。",
        },
        {
            text: "digitized",
            type: "verb", // past participle used as adjective
            explanation: "「デジタル化された」。digitize (デジタル化する) の過去分詞。",
        },
        {
            text: "forward",
            type: "adverb",
            explanation: "「前方へ」「先へ」。move forward で「前進する」。",
        },
        {
            text: "finding",
            type: "noun", // gerund
            explanation: "「見つけること」。find の動名詞。文の主語になっている。",
        },
        {
            text: "technological",
            type: "adjective",
            explanation: "「技術的な」「科学技術の」。technology の形容詞形。",
        },
        {
            text: "innovation",
            type: "noun",
            explanation: "「革新」「刷新」。innovate (革新する) の名詞形。",
        },
        {
            text: "fundamental",
            type: "adjective",
            explanation: "「基本的な」「根本的な」。",
        },
        {
            text: "principles",
            type: "noun",
            explanation: "「原理」「原則」。principle の複数形。",
        },
        {
            text: "remains",
            type: "verb",
            explanation: "「～のままである」。remain の三単現のS。",
        },
        {
            text: "crucial",
            type: "adjective",
            explanation: "「極めて重要な」「決定的な」。very important と同義。",
        },
        {
            text: "effective",
            type: "adjective",
            explanation: "「効果的な」「有効な」。",
        },
        {
            text: "combines",
            type: "verb",
            explanation: "「組み合わせる」。combine の三単現のS。",
        },
        {
            text: "efficiency",
            type: "noun",
            explanation: "「効率性」。efficient (効率的な) の名詞形。",
        },
        {
            text: "engagement",
            type: "noun",
            explanation: "「関与」「参加」「没頭」。engage (関与する) の名詞形。",
        },
        {
            text: "irreplaceable",
            type: "adjective",
            explanation: "「代替不可能な」「かけがえのない」。replace (取り替える) + -able (可能) + ir- (否定)。",
        },
        {
            text: "human elements",
            type: "phrase",
            explanation: "「人間的要素」。",
        },
        {
            text: "mentorship",
            type: "noun",
            explanation: "「指導」「メンター制度」。経験豊富な人（メンター）が指導すること。",
        },
        {
            text: "motivation",
            type: "noun",
            explanation: "「動機付け」「やる気」。motivate (動機付ける) の名詞形。",
        },
        {
            text: "meaningful",
            type: "adjective",
            explanation: "「意味のある」「有意義な」。meaning (意味) + -ful。",
        },
        {
            text: "human connection",
            type: "phrase",
            explanation: "「人間のつながり」。"
        }
    ]
}; 