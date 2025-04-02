// サンプル長文データ
const passageData = {
    // タイトルと本文を分離 (プログラムでの処理を容易にするため)
    title: "The Impact of Technology on Modern Education",
    text: `Technology has fundamentally transformed the educational landscape in the past few decades. From interactive smartboards to online learning platforms, digital tools have revolutionized how students learn and how teachers instruct. These changes have accelerated dramatically since 2020, when the global pandemic forced educational institutions worldwide to rapidly adopt remote learning solutions.One of the most significant benefits of technology in education is the unprecedented access to information. Students can now explore vast digital libraries and educational resources from anywhere in the world. This democratization of knowledge has the potential to reduce educational inequality, though concerns about the "digital divide" remain valid as not all students have equal access to devices or reliable internet connections.Furthermore, technology enables personalized learning experiences tailored to individual student needs. Adaptive learning software can identify strengths and weaknesses, adjusting content accordingly to ensure each student progresses at an appropriate pace. This approach stands in contrast to traditional one-size-fits-all teaching methods that may leave some students behind while boring others who grasp concepts quickly.However, technology integration comes with challenges. Many educators worry about decreased attention spans and the potential for distraction when students use digital devices. There are also valid concerns about privacy and data security as more student information becomes digitized.As we move forward, finding the right balance between technological innovation and fundamental educational principles remains crucial. The most effective approach combines the efficiency and engagement of digital tools with the irreplaceable human elements of teaching: mentorship, motivation, and meaningful human connection.`,
    
    annotations: [
        {
            text: "fundamentally transformed",
            type: "phrase",
            level: 2,
            explanation: "「根本的に変革した」という意味の重要なフレーズ。科学技術が教育に与えた影響の大きさを強調しています。",
            questions: [
                {
                    question: "transformの品詞は？",
                    answer: "ここでは過去分詞(transformed)として使われ、動詞have (has) transformedの一部です。"
                },
                {
                    question: "fundamentallyの役割は？",
                    answer: "副詞で、transformedを修飾し、変化の程度が「根本的な」ものであることを強調しています。"
                },
                {
                    question: "この文の時制は何ですか？",
                    answer: "現在完了形 (has transformed) です。過去から現在までの影響を示しています。"
                }
            ]
        },
        {
            text: "educational landscape",
            type: "phrase",
            level: 3,
            explanation: "「教育の風景」という意味で、教育分野全体の状況や様子を表す表現です。",
            questions: [
                {
                    question: "landscapeの本来の意味は？",
                    answer: "本来「風景」や「景観」という意味で、ここでは比喩的に教育分野全体を表しています。"
                },
                {
                    question: "教育の風景が「変革された」とは具体的にどういうことですか？",
                    answer: "スマートボードやオンラインプラットフォームの導入など、デジタルツールの普及により、学習方法や指導方法が大きく変わったことを意味します。"
                }
            ]
        },
        {
            text: "interactive",
            type: "adjective",
            level: 2,
            explanation: "「対話型の」「相互作用的な」という意味の形容詞。ユーザーの入力に反応する技術を表します。",
            questions: [
                {
                    question: "interactiveの語源は？",
                    answer: "「inter-(相互に)」と「active(活動的な)」から成り、「相互に作用する」という意味になります。"
                },
                {
                    question: "文中では何を修飾していますか？",
                    answer: "\"smartboards\"（スマートボード）を修飾しており、「対話型のスマートボード」という意味になります。"
                }
            ]
        },
        {
            text: "unprecedented access",
            type: "phrase",
            level: 2,
            explanation: "「前例のないアクセス」という意味で、これまでにない規模や方法で情報にアクセスできるようになったことを示しています。",
            questions: [
                {
                    question: "unprecedentedの構成は？",
                    answer: "un-(否定の接頭辞) + precedent(先例) + -ed(形容詞化) で「先例のない」という意味になります。"
                },
                {
                    question: "何に対する前例のないアクセスですか？",
                    answer: "本文では\"to information\"と続いており、「情報への前例のないアクセス」を意味しています。"
                }
            ]
        },
        {
            text: "democratization of knowledge",
            type: "phrase",
            level: 3,
            explanation: "「知識の民主化」という重要な概念。知識や情報が一部の特権階級だけでなく、誰にでも平等に利用できるようになることを指します。",
            questions: [
                {
                    question: "この文脈での「民主化」とは？",
                    answer: "知識や情報へのアクセスが広く一般に開かれ、平等になることを指しています。"
                },
                {
                    question: "なぜこれが重要なのか？",
                    answer: "教育の機会均等につながり、社会的格差を減らす可能性があるからです。"
                },
                {
                    question: "知識の民主化を促進する技術的要因は？",
                    answer: "インターネット、オープンアクセスの学術ジャーナル、MOOCs（大規模オンライン公開講座）、デジタルライブラリ、翻訳技術などが挙げられます。"
                }
            ]
        },
        {
            text: "digital divide",
            type: "phrase",
            level: 1,
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
            level: 1,
            explanation: "「個別化された学習体験」。生徒一人ひとりのニーズや学習スタイルに合わせた教育アプローチを指します。",
            questions: [
                {
                    question: "従来の教育方法と何が違うか？",
                    answer: "従来の「一律的な(one-size-fits-all)」教育方法と異なり、個々の学生のペースや強み・弱みに合わせた学習が可能になります。"
                }
            ]
        },
        {
            text: "crucial",
            type: "adjective",
            level: 1,
            explanation: "「極めて重要な」「決定的な」。very important と同義。",
            questions: [
                { question: "何がcrucial（極めて重要）だと述べられていますか？", answer: "Finding the right balance between technological innovation and fundamental educational principles（技術革新と基本的な教育原理との間の適切なバランスを見つけること）が重要だと述べられています。" },
                { question: "crucialの類義語は？", answer: "vital, essential, critical, pivotal などがあります。" }
            ]
        },
        {
            text: "adaptive learning",
            type: "phrase",
            level: 3,
            explanation: "「適応学習」。学習者の理解度や進捗に応じて内容や難易度が自動的に調整される学習システムのことです。",
            questions: [
                {
                    question: "adaptiveの意味は？",
                    answer: "「適応する」「順応する」という意味の形容詞で、学習者に合わせて変化・適応するシステムを表しています。"
                },
                {
                    question: "適応学習の具体的な利点は？",
                    answer: "生徒一人ひとりのペースに合わせた学習、苦手分野の特定と克服、学習効率の向上などが利点として挙げられます。"
                },
                {
                    question: "適応学習システムはどのようにして学習者を評価するか？",
                    answer: "回答の正確さ、解答時間、試行回数、学習パターンなどのデータを収集・分析し、AIや機械学習のアルゴリズムを用いて学習者のスキルレベルや理解度を評価します。"
                }
            ]
        },
        {
            text: "one-size-fits-all",
            type: "phrase",
            level: 2,
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
            level: 3,
            explanation: "「バランス」「均衡」。この文脈では、テクノロジーの革新と基本的な教育原理との間の適切な調和を指しています。",
            questions: [
                {
                    question: "なぜバランスが重要か？",
                    answer: "テクノロジーの利点を活かしながら、教育の本質的な人間的要素を失わないために重要です。"
                }
            ]
        },
        {
            text: "changes",
            type: "noun",
            level: 3,
            explanation: "「変化」。change の複数形。",
        },
        {
            text: "forced",
            type: "verb",
            level: 3,
            explanation: "「強制した」「強いた」。force の過去形・過去分詞。force A to do で「Aに～することを強いる」。",
        },
        {
            text: "adopt",
            type: "verb",
            level: 3,
            explanation: "「採用する」「導入する」。新しい方法や考え方を受け入れること。",
            questions: [
                { question: "adaptとの違いは？", answer: "adoptは「採用する」、adaptは「適応する」です。" },
                { question: "文脈では何をadopt（採用）したのですか？", answer: "\"remote learning solutions\"（リモート学習ソリューション）を採用したと述べられています。" }
            ]
        },
        {
            text: "reduce",
            type: "verb",
            level: 3,
            explanation: "「減らす」「縮小する」。",
        },
        {
            text: "remain",
            type: "verb",
            level: 3,
            explanation: "「～のままである」「依然として～である」。",
        },
        {
            text: "equal",
            type: "adjective",
            level: 3,
            explanation: "「等しい」「平等な」。",
        },
        {
            text: "identify",
            type: "verb",
            level: 3,
            explanation: "「特定する」「識別する」。",
        },
        {
            text: "ensure",
            type: "verb",
            level: 3,
            explanation: "「確実にする」「保証する」。",
        },
        {
            text: "progresses",
            type: "verb",
            level: 3,
            explanation: "「進歩する」「前進する」。progress の三単現のS。",
        },
        {
            text: "appropriate",
            type: "adjective",
            level: 3,
            explanation: "「適切な」「ふさわしい」。",
        },
        {
            text: "pace",
            type: "noun",
            level: 3,
            explanation: "「ペース」「速度」。",
        },
        {
            text: "approach",
            type: "noun",
            level: 3,
            explanation: "「方法」「取り組み方」「接近」。",
        },
        {
            text: "methods",
            type: "noun",
            level: 3,
            explanation: "「方法」。method の複数形。",
        },
        {
            text: "concepts",
            type: "noun",
            level: 3,
            explanation: "「概念」。concept の複数形。",
        },
        {
            text: "challenges",
            type: "noun",
            level: 3,
            explanation: "「課題」「難題」。challenge の複数形。",
        },
        {
            text: "decreased",
            type: "adjective", // past participle used as adjective
            level: 3,
            explanation: "「減少した」。decrease (減少する) の過去分詞。",
        },
        {
            text: "distraction",
            type: "noun",
            level: 3,
            explanation: "「注意散漫」「気を散らすもの」。distract (気を散らす) の名詞形。",
        },
        {
            text: "privacy",
            type: "noun",
            level: 3,
            explanation: "「プライバシー」「個人情報」。",
        },
        {
            text: "combines",
            type: "verb",
            level: 3,
            explanation: "「組み合わせる」。combine の三単現のS。",
        },
        {
            text: "motivation",
            type: "noun",
            level: 3,
            explanation: "「動機付け」「やる気」。motivate (動機付ける) の名詞形。",
        },
        {
            text: "meaningful",
            type: "adjective",
            level: 3,
            explanation: "「意味のある」「有意義な」。meaning (意味) + -ful。",
            questions: [
                { question: "何を修飾していますか？", answer: "\"human connection\"（人間のつながり）を修飾しています。" },
                { question: "教育においてmeaningful human connectionとはどのようなものですか？", answer: "教師と生徒、または生徒同士の信頼関係に基づいた、表面的ではない深いレベルでの相互作用や共感を伴うつながりを指します。" }
            ]
        },
        {
            text: "human connection",
            type: "phrase",
            level: 2,
            explanation: "「人間のつながり」。"
        },
        {
            text: "smartboards",
            type: "noun",
            level: 2,
            explanation: "「スマートボード」。タッチ操作などが可能な電子的な黒板。",
        },
        {
            text: "digital",
            type: "adjective",
            level: 2,
            explanation: "「デジタルの」。情報を数値データとして扱う技術に関連する。",
        },
        {
            text: "tools",
            type: "noun",
            level: 2,
            explanation: "「道具」「ツール」。目的を達成するために使われるもの。ここではデジタル機器やソフトウェアを指す。",
        },
        {
            text: "global",
            type: "adjective",
            level: 2,
            explanation: "「世界的な」「地球規模の」。",
        },
        {
            text: "online learning platforms",
            type: "phrase",
            level: 1,
            explanation: "「オンライン学習プラットフォーム」。インターネット経由で学習コンテンツやサービスを提供する基盤。",
        },
        {
            text: "access to information",
            type: "phrase",
            level: 2,
            explanation: "「情報へのアクセス」。情報に到達し、利用できること。",
        },
        {
            text: "educational resources",
            type: "phrase",
            level: 2,
            explanation: "「教育リソース（資料・資源）」。学習に役立つ資料や情報源。",
        },
        {
            text: "tailored to individual student needs",
            type: "phrase",
            level: 2,
            explanation: "「個々の生徒のニーズに合わせて調整された」。生徒一人ひとりに最適化されていること。",
        },
        {
            text: "technology integration",
            type: "phrase",
            level: 2,
            explanation: "「テクノロジーの統合」。教育プロセスに技術を組み込むこと。",
        },
        {
            text: "decreased attention spans",
            type: "phrase",
            level: 2,
            explanation: "「注意持続時間の低下」。集中力が以前より続かなくなること。",
        },
        {
            text: "privacy and data security",
            type: "phrase",
            level: 2,
            explanation: "「プライバシーとデータセキュリティ」。個人情報やデータの保護。",
        },
        {
            text: "technological innovation",
            type: "phrase",
            level: 2,
            explanation: "「技術革新」。新しい技術の開発や導入。",
        },
        {
            text: "educational principles",
            type: "phrase",
            level: 2,
            explanation: "「教育原理」。教育の基本的な考え方や方針。",
        },
        {
            text: "effective approach",
            type: "phrase",
            level: 2,
            explanation: "「効果的なアプローチ（方法）」。目標達成に有効なやり方。",
        },
        {
            text: "Impact",
            type: "noun",
            level: 2,
            explanation: "「影響」「衝撃」。何かが他のものに与える効果や力。",
            questions: [
                { question: "動詞形は？", answer: "動詞も impact で、「影響を与える」という意味です。" }
            ]
        },
        {
            text: "Technology",
            type: "noun",
            level: 2,
            explanation: "「科学技術」。特定の分野における実践的な知識や応用。",
        },
        {
            text: "on",
            type: "preposition",
            level: 3,
            explanation: "「～の上に」「～について」「～に関する」。ここでは「～に対する影響」という意味で使われています。",
            questions: [
                { question: "他の意味は？", answer: "「接触」「継続」「曜日」など、多くの意味があります。" }
            ]
        },
        {
            text: "Modern",
            type: "adjective",
            level: 2,
            explanation: "「現代の」「近代の」。現在の時代に関連する、または特徴的な。",
        },
        {
            text: "Education",
            type: "noun",
            level: 2,
            explanation: "「教育」。知識や技能を教え、学ぶプロセス。",
        },
        {
            text: "decades",
            type: "noun",
            level: 2,
            explanation: "「数十年」。decade（10年間）の複数形。",
            questions: [
                { question: "a few decadesは？", answer: "「20～30年程度」を指すことが多いです。" }
            ]
        },
        {
            text: "platforms",
            type: "noun",
            level: 2,
            explanation: "「プラットフォーム」「基盤」。ここではオンライン学習サービスなどを指します。",
        },
        {
            text: "revolutionized",
            type: "verb",
            level: 2,
            explanation: "「革命を起こした」「根本的に変えた」。revolutionize の過去形・過去分詞。",
            questions: [
                { question: "名詞形は？", answer: "revolution (革命)" },
                { question: "文脈上、何を革命的に変えたのですか？", answer: "\"how students learn and how teachers instruct\"（生徒がどのように学び、教師がどのように教えるか）を変えたと述べられています。" }
            ]
        },
        {
            text: "how students learn",
            type: "clause",
            level: 3,
            explanation: "「生徒がどのように学ぶか」。名詞節として revolutionized の目的語になっています。",
        },
        {
            text: "instruct",
            type: "verb",
            level: 2,
            explanation: "「指導する」「教える」。正式な場で使われることが多い。",
            questions: [
                { question: "teachとの違いは？", answer: "instruct はより体系的、公式な指導を指すことが多いです。" }
            ]
        },
        {
            text: "accelerated",
            type: "verb",
            level: 2,
            explanation: "「加速した」「促進した」。accelerate の過去形・過去分詞。",
            questions: [
                { question: "車の部品との関連は？", answer: "accelerator (アクセル) は速度を上げるための部品です。" },
                { question: "文中で何が加速したと述べられていますか？", answer: "\"These changes\"（これらの変化）、つまりテクノロジーによる教育の変化が加速したと述べられています。" },
                { question: "いつから加速したのですか？", answer: "\"since 2020\"（2020年以来）加速したと述べられています。" }
            ]
        },
        {
            text: "dramatically",
            type: "adverb",
            level: 2,
            explanation: "「劇的に」「著しく」。変化の度合いが大きいことを示します。",
        },
        {
            text: "since",
            type: "preposition", // or conjunction
            level: 3,
            explanation: "「～以来」。過去のある時点から現在まで続くことを示します。ここでは前置詞。",
        },
        {
            text: "pandemic",
            type: "noun",
            level: 2,
            explanation: "「パンデミック」「（病気の）世界的大流行」。",
            questions: [
                { question: "global pandemic は？", answer: "「世界的なパンデミック」と強調した表現です。" }
            ]
        },
        {
            text: "institutions",
            type: "noun",
            level: 2,
            explanation: "「機関」「組織」「施設」。ここでは educational institutions で「教育機関」。",
        },
        {
            text: "worldwide",
            type: "adverb", // or adjective
            level: 2,
            explanation: "「世界中で（に）」。ここでは副詞。",
        },
        {
            text: "rapidly",
            type: "adverb",
            level: 2,
            explanation: "「急速に」「速く」。",
        },
        {
            text: "remote learning",
            type: "phrase",
            level: 2,
            explanation: "「リモート学習」「遠隔学習」。教室外からオンラインなどで行う学習。",
        },
        {
            text: "solutions",
            type: "noun",
            level: 2,
            explanation: "「解決策」。solution の複数形。",
        },
        {
            text: "significant",
            type: "adjective",
            level: 2,
            explanation: "「重要な」「意義深い」「著しい」。",
            questions: [
                { question: "名詞形は？", answer: "significance (重要性)" },
                { question: "この文脈で何がsignificant（重要）だと述べられていますか？", answer: "\"benefits of technology in education\"（教育におけるテクノロジーの利点）が重要だと述べられています。" }
            ]
        },
        {
            text: "information",
            type: "noun",
            level: 2,
            explanation: "「情報」。不可算名詞（数えられない名詞）であることに注意。",
        },
        {
            text: "explore",
            type: "verb",
            level: 2,
            explanation: "「探求する」「探索する」「調査する」。",
            questions: [
                { question: "文脈では何をexplore（探求）できますか？", answer: "\"vast digital libraries and educational resources\"（広大なデジタルライブラリや教育リソース）を探求できると述べられています。" }
            ]
        },
        {
            text: "vast",
            type: "adjective",
            level: 2,
            explanation: "「広大な」「膨大な」。非常に広い、または大きい。",
        },
        {
            text: "resources",
            type: "noun",
            level: 2,
            explanation: "「資源」「資料」。resource の複数形。ここでは educational resources で「教育資料」。",
        },
        {
            text: "potential",
            type: "noun",
            level: 2,
            explanation: "「可能性」「潜在能力」。将来発展するかもしれない力。",
            questions: [
                { question: "形容詞の意味は？", answer: "形容詞では「潜在的な」という意味です。" },
                { question: "何のpotential（可能性）について言及されていますか？", answer: "\"to reduce educational inequality\"（教育的不平等を減らす可能性）について言及されています。" }
            ]
        },
        {
            text: "reduce",
            type: "verb",
            level: 3,
            explanation: "「減らす」「縮小する」。",
        },
        {
            text: "inequality",
            type: "noun",
            level: 2,
            explanation: "「不平等」。equal (平等な) の反対。",
            questions: [
                { question: "どのようなinequality（不平等）について述べられていますか？", answer: "\"educational inequality\"（教育における不平等）について述べられています。" },
                { question: "技術はこの不平等をどうする可能性がありますか？", answer: "reduce（減らす）可能性があると述べられています。" }
            ]
        },
        {
            text: "though",
            type: "conjunction",
            level: 3,
            explanation: "「～だけれども」「～にもかかわらず」。although とほぼ同じ意味。",
        },
        {
            text: "concerns",
            type: "noun",
            level: 2,
            explanation: "「懸念」「心配事」。concern の複数形。",
        },
        {
            text: "remain",
            type: "verb",
            level: 3,
            explanation: "「～のままである」「依然として～である」。",
        },
        {
            text: "valid",
            type: "adjective",
            level: 2,
            explanation: "「妥当な」「正当な」「有効な」。",
            questions: [
                { question: "何がvalid（妥当）であると述べられていますか？", answer: "Concerns about the \"digital divide\"（デジタルデバイドに関する懸念）が妥当であると述べられています。" }
            ]
        },
        {
            text: "equal",
            type: "adjective",
            level: 3,
            explanation: "「等しい」「平等な」。",
        },
        {
            text: "devices",
            type: "noun",
            level: 2,
            explanation: "「装置」「機器」。device の複数形。スマートフォンやタブレットなど。",
        },
        {
            text: "reliable",
            type: "adjective",
            level: 2,
            explanation: "「信頼できる」「頼りになる」。rely (頼る) + -able。",
            questions: [
                { question: "文脈上、何がreliable（信頼できる）である必要がありますか？", answer: "\"internet connections\"（インターネット接続）が信頼できる必要があると述べられています。" }
            ]
        },
        {
            text: "Furthermore",
            type: "adverb",
            level: 2,
            explanation: "「さらに」「その上」。追加情報を示す接続副詞。",
        },
        {
            text: "enables",
            type: "verb",
            level: 2,
            explanation: "「可能にする」。enable の三単現のS。enable A to do で「Aが～するのを可能にする」。",
            questions: [
                { question: "この文の主語は何ですか？", answer: "Technology（テクノロジー）です。" },
                { question: "enable A to doの形を使って、文の意味を説明してください。", answer: "Technology enables personalized learning experiences to be tailored... のように考えると、「テクノロジーは、個別化された学習体験が～されることを可能にする」という意味になります。" }
            ]
        },
        {
            text: "tailored to",
            type: "phrase",
            level: 2,
            explanation: "「～に合わせて作られた」。tailor (仕立てる) から。",
        },
        {
            text: "individual",
            type: "adjective",
            level: 2,
            explanation: "「個々の」「個人の」。",
        },
        {
            text: "strengths",
            type: "noun",
            level: 2,
            explanation: "「強み」「長所」。strength の複数形。",
        },
        {
            text: "weaknesses",
            type: "noun",
            level: 2,
            explanation: "「弱み」「短所」。weakness の複数形。",
        },
        {
            text: "adjusting",
            type: "verb", // present participle
            level: 3,
            explanation: "「調整しながら」。adjust の現在分詞。ここでは分詞構文。",
        },
        {
            text: "accordingly",
            type: "adverb",
            level: 2,
            explanation: "「それに応じて」「したがって」。前の内容を受けて。",
        },
        {
            text: "ensure",
            type: "verb",
            level: 3,
            explanation: "「確実にする」「保証する」。",
        },
        {
            text: "progresses",
            type: "verb",
            level: 3,
            explanation: "「進歩する」「前進する」。progress の三単現のS。",
        },
        {
            text: "appropriate",
            type: "adjective",
            level: 3,
            explanation: "「適切な」「ふさわしい」。",
        },
        {
            text: "pace",
            type: "noun",
            level: 3,
            explanation: "「ペース」「速度」。",
        },
        {
            text: "approach",
            type: "noun",
            level: 3,
            explanation: "「方法」「取り組み方」「接近」。",
        },
        {
            text: "stands in contrast to",
            type: "phrase",
            level: 3,
            explanation: "「～と対照的である」「～と対照をなす」。",
            questions: [
                { question: "文脈上、何と何が対照的だと述べられていますか？", answer: "This approach (personalized learning) と traditional one-size-fits-all teaching methods が対照的だと述べられています。" },
                { question: "stand in contrast to と似た意味の表現は？", answer: "be contrary to, differ from, be unlike などがあります。" }
            ]
        },
        {
            text: "traditional",
            type: "adjective",
            level: 2,
            explanation: "「伝統的な」「従来の」。",
        },
        {
            text: "methods",
            type: "noun",
            level: 3,
            explanation: "「方法」。method の複数形。",
        },
        {
            text: "leave some students behind",
            type: "phrase",
            level: 2,
            explanation: "「一部の生徒を置き去りにする」。",
            questions: [
                { question: "どのような状況で生徒が置き去りにされる可能性がありますか？", answer: "Traditional one-size-fits-all teaching methods（従来の一律的な教授法）では、理解が追いつかない生徒が置き去りにされる可能性があると示唆されています。" }
            ]
        },
        {
            text: "grasp",
            type: "verb",
            level: 2,
            explanation: "「理解する」「把握する」。元々は「つかむ」という意味。",
            questions: [
                { question: "文脈では何をgrasp（理解）するのですか？", answer: "\"concepts\"（概念）を理解すると述べられています。" },
                { question: "どのような生徒がconceptsをquickly graspすると述べられていますか？", answer: "（個別化されていない）伝統的な教授法では退屈してしまうような、概念を素早く理解する生徒について述べられています。" }
            ]
        },
        {
            text: "concepts",
            type: "noun",
            level: 3,
            explanation: "「概念」。concept の複数形。",
        },
        {
            text: "quickly",
            type: "adverb",
            level: 2,
            explanation: "「速く」「素早く」。",
        },
        {
            text: "However",
            type: "adverb",
            level: 2,
            explanation: "「しかしながら」。逆接を示す接続副詞。",
        },
        {
            text: "integration",
            type: "noun",
            level: 2,
            explanation: "「統合」。integrate (統合する) の名詞形。",
            questions: [
                { question: "文脈では何のintegration（統合）について述べられていますか？", answer: "\"technology integration\"（テクノロジーの統合）、つまり教育へのテクノロジーの導入について述べられています。" },
                { question: "テクノロジー統合の課題は何ですか？", answer: "注意持続時間の低下、気晴らしの可能性、プライバシーとデータセキュリティの懸念などが課題として挙げられています。" }
            ]
        },
        {
            text: "challenges",
            type: "noun",
            level: 3,
            explanation: "「課題」「難題」。challenge の複数形。",
        },
        {
            text: "educators",
            type: "noun",
            level: 2,
            explanation: "「教育者」。educate (教育する) + -or (人)。",
        },
        {
            text: "decreased attention spans",
            type: "phrase",
            level: 3,
            explanation: "「注意持続時間の低下」。集中力が以前より続かなくなること。",
        },
        {
            text: "potential for",
            type: "phrase",
            level: 3,
            explanation: "「～の可能性」。",
        },
        {
            text: "distraction",
            type: "noun",
            level: 3,
            explanation: "「注意散漫」「気を散らすもの」。distract (気を散らす) の名詞形。",
        },
        {
            text: "privacy",
            type: "noun",
            level: 3,
            explanation: "「プライバシー」「個人情報」。",
        },
        {
            text: "data security",
            type: "phrase",
            level: 2,
            explanation: "「データセキュリティ」。",
        },
        {
            text: "digitized",
            type: "verb", // past participle used as adjective
            level: 2,
            explanation: "「デジタル化された」。digitize (デジタル化する) の過去分詞。",
        },
        {
            text: "forward",
            type: "adverb",
            level: 2,
            explanation: "「前方へ」「先へ」。move forward で「前進する」。",
        },
        {
            text: "finding",
            type: "noun", // gerund
            level: 3,
            explanation: "「見つけること」。find の動名詞。文の主語になっている。",
        },
        {
            text: "technological",
            type: "adjective",
            level: 2,
            explanation: "「技術的な」「科学技術の」。technology の形容詞形。",
        },
        {
            text: "innovation",
            type: "noun",
            level: 2,
            explanation: "「革新」「刷新」。innovate (革新する) の名詞形。",
        },
        {
            text: "fundamental",
            type: "adjective",
            level: 2,
            explanation: "「基本的な」「根本的な」。",
            questions: [
                { question: "何を修飾していますか？", answer: "\"educational principles\"（教育原理）を修飾しています。" },
                { question: "fundamentalと似た意味の単語は？", answer: "basic, essential, elementary, primary などがあります。" }
            ]
        },
        {
            text: "principles",
            type: "noun",
            level: 2,
            explanation: "「原理」「原則」。principle の複数形。",
            questions: [
                { question: "文脈で述べられているeducational principles（教育原理）とは何だと考えられますか？", answer: "文脈の最後にある「mentorship, motivation, and meaningful human connection」（指導、動機付け、意味のある人間のつながり）などが含まれると考えられます。" }
            ]
        },
        {
            text: "remains",
            type: "verb",
            level: 1,
            explanation: "「～のままである」。remain の三単現のS。",
        },
        {
            text: "crucial",
            type: "adjective",
            level: 1,
            explanation: "「極めて重要な」「決定的な」。very important と同義。",
            questions: [
                { question: "何がcrucial（極めて重要）だと述べられていますか？", answer: "Finding the right balance between technological innovation and fundamental educational principles（技術革新と基本的な教育原理との間の適切なバランスを見つけること）が重要だと述べられています。" },
                { question: "crucialの類義語は？", answer: "vital, essential, critical, pivotal などがあります。" }
            ]
        },
        {
            text: "effective",
            type: "adjective",
            level: 2,
            explanation: "「効果的な」「有効な」。",
        },
        {
            text: "combines",
            type: "verb",
            level: 2,
            explanation: "「組み合わせる」。combine の三単現のS。",
        },
        {
            text: "efficiency",
            type: "noun",
            level: 2,
            explanation: "「効率性」。efficient (効率的な) の名詞形。",
            questions: [
                { question: "文脈では、何がefficiency（効率性）をもたらすとされていますか？", answer: "\"digital tools\"（デジタルツール）が効率性をもたらすと述べられています。" }
            ]
        },
        {
            text: "engagement",
            type: "noun",
            level: 2,
            explanation: "「関与」「参加」「没頭」。engage (関与する) の名詞形。",
            questions: [
                { question: "文脈では、何がengagement（関与・没頭）をもたらすとされていますか？", answer: "\"digital tools\"（デジタルツール）が学習への関与や没頭をもたらすと述べられています。" },
                { question: "なぜengagementが教育において重要ですか？", answer: "生徒が積極的に学習に関与することで、理解が深まり、学習効果が高まるからです。" }
            ]
        },
        {
            text: "irreplaceable",
            type: "adjective",
            level: 3,
            explanation: "「代替不可能な」「かけがえのない」。replace (取り替える) + -able (可能) + ir- (否定)。",
            questions: [
                { question: "文脈で何がirreplaceable（代替不可能）だと述べられていますか？", answer: "\"human elements of teaching\"（教育における人間的要素）が代替不可能だと述べられています。" }
            ]
        },
        {
            text: "human elements",
            type: "phrase",
            level: 2,
            explanation: "「人間的要素」。",
            questions: [
                { question: "文中で挙げられているhuman elementsの具体例は何ですか？", answer: "mentorship, motivation, and meaningful human connection が挙げられています。" }
            ]
        },
        {
            text: "mentorship",
            type: "noun",
            level: 3,
            explanation: "「指導」「メンター制度」。経験豊富な人（メンター）が指導すること。",
            questions: [
                { question: "mentorshipが教育において重要な理由は何ですか？", answer: "単なる知識伝達だけでなく、経験に基づくアドバイス、ロールモデルの提示、精神的なサポートなどを通して、学習者の成長を促すからです。" }
            ]
        },
        {
            text: "motivation",
            type: "noun",
            level: 3,
            explanation: "「動機付け」「やる気」。motivate (動機付ける) の名詞形。",
        },
        {
            text: "meaningful",
            type: "adjective",
            level: 3,
            explanation: "「意味のある」「有意義な」。meaning (意味) + -ful。",
            questions: [
                { question: "何を修飾していますか？", answer: "\"human connection\"（人間のつながり）を修飾しています。" },
                { question: "教育においてmeaningful human connectionとはどのようなものですか？", answer: "教師と生徒、または生徒同士の信頼関係に基づいた、表面的ではない深いレベルでの相互作用や共感を伴うつながりを指します。" }
            ]
        },
        {
            text: "human connection",
            type: "phrase",
            level: 2,
            explanation: "「人間のつながり」。"
        },
        {
            text: "smartboards",
            type: "noun",
            level: 2,
            explanation: "「スマートボード」。タッチ操作などが可能な電子的な黒板。",
        },
        {
            text: "digital",
            type: "adjective",
            level: 2,
            explanation: "「デジタルの」。情報を数値データとして扱う技術に関連する。",
        },
        {
            text: "tools",
            type: "noun",
            level: 2,
            explanation: "「道具」「ツール」。目的を達成するために使われるもの。ここではデジタル機器やソフトウェアを指す。",
        },
        {
            text: "global",
            type: "adjective",
            level: 2,
            explanation: "「世界的な」「地球規模の」。",
        },
        {
            text: "online learning platforms",
            type: "phrase",
            level: 1,
            explanation: "「オンライン学習プラットフォーム」。インターネット経由で学習コンテンツやサービスを提供する基盤。",
        },
        {
            text: "access to information",
            type: "phrase",
            level: 2,
            explanation: "「情報へのアクセス」。情報に到達し、利用できること。",
        },
        {
            text: "educational resources",
            type: "phrase",
            level: 2,
            explanation: "「教育リソース（資料・資源）」。学習に役立つ資料や情報源。",
        },
        {
            text: "tailored to individual student needs",
            type: "phrase",
            level: 2,
            explanation: "「個々の生徒のニーズに合わせて調整された」。生徒一人ひとりに最適化されていること。",
        },
        {
            text: "technology integration",
            type: "phrase",
            level: 2,
            explanation: "「テクノロジーの統合」。教育プロセスに技術を組み込むこと。",
        },
        {
            text: "decreased attention spans",
            type: "phrase",
            level: 3,
            explanation: "「注意持続時間の低下」。集中力が以前より続かなくなること。",
        },
        {
            text: "privacy and data security",
            type: "phrase",
            level: 2,
            explanation: "「プライバシーとデータセキュリティ」。個人情報やデータの保護。",
        },
        {
            text: "technological innovation",
            type: "phrase",
            level: 2,
            explanation: "「技術革新」。新しい技術の開発や導入。",
        },
        {
            text: "educational principles",
            type: "phrase",
            level: 2,
            explanation: "「教育原理」。教育の基本的な考え方や方針。",
        },
        {
            text: "effective approach",
            type: "phrase",
            level: 2,
            explanation: "「効果的なアプローチ（方法）」。目標達成に有効なやり方。",
        }
    ]
}; 