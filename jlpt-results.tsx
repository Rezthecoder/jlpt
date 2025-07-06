"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SakuraBackground } from "./components/sakura-background"
import { ScrollToTop } from "./components/scroll-to-top"
import { useLanguage, vocabularyTranslations } from "./contexts/language-context"
import { GraduationCap, BookOpen, Headphones, FileText, Trophy, Star } from "lucide-react"
import { StickyNavbar } from "./components/sticky-navbar"

const jlptData = {
  N1: {
    vocabulary: [
      {
        q: "問題 1",
        a: "22414 3",
        detail: {
          titleKey: "detail.vocabularyList",
          items: [
            { kanji: "余暇", hiragana: "よか" },
            { kanji: "鈍い", hiragana: "にぶい" },
            { kanji: "検閲", hiragana: "けんえつ" },
            { kanji: "崇高", hiragana: "すうこう" },
            { kanji: "裁く", hiragana: "さばく" },
            { kanji: "胸中", hiragana: "きょうちゅう" },
          ],
        },
      },
      {
        q: "問題 2",
        a: "12231 24",
        detail: {
          titleKey: "detail.vocabularyList",
          items: [
            { kanji: "会社の合併", hiragana: "かいしゃのがっぺい" },
            { kanji: "手際が器用", hiragana: "てぎわがきよう" },
          ],
        },
      },
      {
        q: "問題 3",
        a: "34423 1",
        detail: {
          titleKey: "detail.vocabularyList",
          items: [
            { kanji: "年齢をごまかす", hiragana: "ねんれいをごまかす" },
            { kanji: "加筆", hiragana: "かひつ" },
            { kanji: "ブランクがある", hiragana: "ブランクがある" },
            { kanji: "うすうす気づいた", hiragana: "うすうすきづいた" },
            { kanji: "脳裏に浮かぶ", hiragana: "のうりにうかぶ" },
            { kanji: "着手", hiragana: "ちゃくしゅ" },
          ],
        },
      },
      {
        q: "問題 4",
        a: "24131 4",
        detail: {
          titleKey: "detail.vocabularyList",
          items: [
            { kanji: "トレンド", hiragana: "トレンド" },
            { kanji: "破格", hiragana: "はかく" },
            { kanji: "冷やす", hiragana: "ひやす" },
            { kanji: "けげん", hiragana: "けげん" },
            { kanji: "ことごとく", hiragana: "ことごとく" },
            { kanji: "返答を保留", hiragana: "へんとうをほりゅう" },
            { kanji: "混雑の緩和", hiragana: "こんざつのかんわ" },
            { kanji: "目標に程遠い", hiragana: "もくひょうにほどとおい" },
            { kanji: "まろやかな味", hiragana: "まろやかなあじ" },
            { kanji: "古い体制から脱却", hiragana: "ふるいたいせいからだっきゃく" },
            { kanji: "機材を使いこなす", hiragana: "きざいをつかいこなす" },
          ],
        },
      },
    ],
    grammar: [
      {
        q: "問題 5",
        a: "21434 14123",
        detail: {
          titleKey: "detail.grammarPatterns",
          items: [
            { pattern: "〜に際して", reading: "〜にさいして", meaning: "on the occasion of, when" },
            { pattern: "〜をもって", reading: "〜をもって", meaning: "with, by means of" },
            { pattern: "〜に先立って", reading: "〜にさきだって", meaning: "prior to, before" },
            { pattern: "〜を契機に", reading: "〜をけいきに", meaning: "taking the opportunity" },
            { pattern: "〜に伴って", reading: "〜にともなって", meaning: "along with, in accordance with" },
          ],
        },
      },
      {
        q: "問題 6",
        a: "23214",
        detail: {
          titleKey: "detail.sentenceRearrangement",
          items: [
            {
              sentence: "彼は忙しいにもかかわらず",
              reading: "かれはいそがしいにもかかわらず",
              meaning: "Despite being busy",
            },
            {
              sentence: "時間を作って手伝ってくれた",
              reading: "じかんをつくってつだってくれた",
              meaning: "he made time to help",
            },
          ],
        },
      },
      {
        q: "問題 7",
        a: "2312",
        detail: {
          titleKey: "detail.fillInBlank",
          items: [
            { expression: "〜ばかりか", reading: "〜ばかりか", meaning: "not only... but also" },
            { expression: "〜どころか", reading: "〜どころか", meaning: "far from, let alone" },
            { expression: "〜に限らず", reading: "〜にかぎらず", meaning: "not limited to" },
          ],
        },
      },
    ],
    reading: [
      {
        q: "問題 1",
        a: "12423",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            {
              concept: "街の人々の関係",
              reading: "まちのひとびとのかんけい",
              meaning: "relationships between people in the city",
            },
            { concept: "社会の姿を知る", reading: "しゃかいのすがたをしる", meaning: "understanding society's form" },
            {
              concept: "観察による理解",
              reading: "かんさつによるりかい",
              meaning: "understanding through observation",
            },
          ],
        },
      },
      {
        q: "問題 2",
        a: "433114",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            {
              concept: "あらゆる症状を見て病気を特定",
              reading: "あらゆるしょうじょうをみてびょうきをとくてい",
              meaning: "identifying diseases by examining all symptoms",
            },
            {
              concept: "新製品の開発に安心して取り組める",
              reading: "しんせいひんのかいはつにあんしんしてとりくめる",
              meaning: "can work on new product development with confidence",
            },
            {
              concept: "無意識に受け入れたことを疑う",
              reading: "むいしきにうけいれたことをうたがう",
              meaning: "questioning what we unconsciously accept",
            },
            {
              concept: "見えなかった問題が見えてくる",
              reading: "みえなかったもんだいがみえてくる",
              meaning: "hidden problems become visible",
            },
          ],
        },
      },
      {
        q: "問題 3",
        a: "14314",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            {
              concept: "専門知識の活用",
              reading: "せんもんちしきのかつよう",
              meaning: "utilization of specialized knowledge",
            },
            {
              concept: "経験との組み合わせ",
              reading: "けいけんとのくみあわせ",
              meaning: "combination with experience",
            },
            {
              concept: "新しい発想の創出",
              reading: "あたらしいはっそうのそうしゅつ",
              meaning: "creation of new ideas",
            },
          ],
        },
      },
      {
        q: "問題 4",
        a: "31311233122",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            {
              concept: "情報化社会の変化",
              reading: "じょうほうかしゃかいのへんか",
              meaning: "changes in information society",
            },
            {
              concept: "専門性の重要性",
              reading: "せんもんせいのじゅうようせい",
              meaning: "importance of specialization",
            },
            { concept: "個人の判断力", reading: "こじんのはんだんりょく", meaning: "individual judgment ability" },
          ],
        },
      },
      {
        q: "問題 5",
        a: "232",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            {
              concept: "芸術教育の重要性",
              reading: "げいじゅつきょういくのじゅうようせい",
              meaning: "importance of arts education",
            },
            {
              concept: "感性を磨く体験",
              reading: "かんせいをみがくたいけん",
              meaning: "experiences that refine sensitivity",
            },
          ],
        },
      },
      {
        q: "問題 6",
        a: "33",
        detail: {
          titleKey: "detail.readingContent",
          items: [
            { concept: "将棋の魅力", reading: "しょうぎのみりょく", meaning: "the appeal of shogi" },
            { concept: "人間対コンピュータ", reading: "にんげんたいコンピュータ", meaning: "human vs computer" },
          ],
        },
      },
    ],
    listening: [
      {
        q: "問題 1",
        a: "12423",
        detail: {
          titleKey: "detail.listeningContent",
          items: [
            { situation: "会議での議論", reading: "かいぎでのぎろん", meaning: "discussion in a meeting" },
            { situation: "意見の交換", reading: "いけんのこうかん", meaning: "exchange of opinions" },
            { situation: "結論への到達", reading: "けつろんへのとうたつ", meaning: "reaching a conclusion" },
          ],
        },
      },
      {
        q: "問題 2",
        a: "433114",
        detail: {
          titleKey: "detail.listeningContent",
          items: [
            { situation: "講演会の内容", reading: "こうえんかいのないよう", meaning: "content of a lecture" },
            { situation: "質疑応答", reading: "しつぎおうとう", meaning: "question and answer session" },
            { situation: "専門的な説明", reading: "せんもんてきなせつめい", meaning: "technical explanation" },
          ],
        },
      },
      {
        q: "問題 3",
        a: "14314",
        detail: {
          titleKey: "detail.listeningContent",
          items: [
            { situation: "日常会話", reading: "にちじょうかいわ", meaning: "daily conversation" },
            { situation: "計画の相談", reading: "けいかくのそうだん", meaning: "consultation about plans" },
            { situation: "時間の調整", reading: "じかんのちょうせい", meaning: "time adjustment" },
          ],
        },
      },
      {
        q: "問題 4",
        a: "31311233122",
        detail: {
          titleKey: "detail.listeningContent",
          items: [
            { situation: "ニュース報道", reading: "ニュースほうどう", meaning: "news report" },
            {
              situation: "社会問題の分析",
              reading: "しゃかいもんだいのぶんせき",
              meaning: "analysis of social issues",
            },
            { situation: "専門家の見解", reading: "せんもんかのけんかい", meaning: "expert opinion" },
          ],
        },
      },
      {
        q: "問題 5",
        a: "232",
        detail: {
          titleKey: "detail.listeningContent",
          items: [
            { situation: "インタビュー", reading: "インタビュー", meaning: "interview" },
            { situation: "個人的な体験談", reading: "こじんてきなたいけんだん", meaning: "personal experience story" },
          ],
        },
      },
    ],
  },
  N2: {
    vocabulary: [
      {
        q: "問題 1",
        a: "42313",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "さいのう", hiragana: "さいのう" },
            { kanji: "あまい", hiragana: "あまい" },
            { kanji: "にがい", hiragana: "にがい" },
            { kanji: "しぶい", hiragana: "しぶい" },
          ],
        },
      },
      {
        q: "問題 2",
        a: "41324",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "湿って", hiragana: "しめって" },
            { kanji: "傾向", hiragana: "けいこう" },
            { kanji: "診察", hiragana: "しんさつ" },
          ],
        },
      },
      {
        q: "問題 3",
        a: "314",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "則", hiragana: "そく" },
            { kanji: "理", hiragana: "り" },
            { kanji: "論", hiragana: "さとし" },
            { kanji: "規", hiragana: "き" },
          ],
        },
      },
      {
        q: "問題 4",
        a: "32411",
        special: "4(or3)",
        end: "2",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "絞って", hiragana: "しぼって" },
            { kanji: "削って", hiragana: "けずって" },
            { kanji: "握って", hiragana: "にぎって" },
            { kanji: "掘って", hiragana: "ほって" },
            { kanji: "施設", hiragana: "しせつ" },
            { kanji: "誓った", hiragana: "ちかった" },
            { kanji: "命じた", hiragana: "めいじた" },
            { kanji: "迫った", hiragana: "せまった" },
          ],
        },
      },
      {
        q: "問題 5",
        a: "24133",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "関与", hiragana: "かんよ" },
            { kanji: "参列", hiragana: "さんれつ" },
            { kanji: "加入", hiragana: "かにゅう" },
            { kanji: "登場", hiragana: "とうじょう" },
            { kanji: "べたべた", hiragana: "べたべた" },
            { kanji: "かさかさ", hiragana: "かさかさ" },
            { kanji: "じめじめ", hiragana: "じめじめ" },
            { kanji: "ちくちく", hiragana: "ちくちく" },
          ],
        },
      },
      {
        q: "問題 6",
        a: "21243",
        detail: {
          titleKey: "detail.vocabularyAnalysis",
          items: [
            { kanji: "反則", hiragana: "はんそく" },
            { kanji: "違法", hiragana: "いほう" },
            { kanji: "非常識", hiragana: "ひじょうしき" },
            { kanji: "不都合", hiragana: "ふつごう" },
            { kanji: "連れ出した", hiragana: "つれだした" },
            { kanji: "締め出した", hiragana: "しめだした" },
            { kanji: "取り払った", hiragana: "とりはらった" },
            { kanji: "追い払った", hiragana: "おいはらった" },
          ],
        },
      },
    ],
    grammar: [
      { q: "問題 5", a: "2143414123" },
      { q: "問題 6", a: "23214" },
      { q: "問題 7", a: "2312 / 23143 23143 12" },
      { q: "問題 8", a: "34212" },
      { q: "問題 9", a: "2341" },
    ],
    reading: [
      {
        q: "問題 1",
        a: "23332",
        detail: {
          titleKey: "detail.readingAnalysis",
          items: [
            { concept: "妙な", reading: "みょうな", meaning: "strange, mysterious" },
            { concept: "不思議な", reading: "ふしぎな", meaning: "mysterious, wonderful" },
            { concept: "悲しい", reading: "かなしい", meaning: "sad" },
            { concept: "重大な", reading: "じゅうだいな", meaning: "serious, important" },
          ],
        },
      },
      {
        q: "問題 2",
        a: "413123",
        detail: {
          titleKey: "detail.readingAnalysis",
          items: [
            { concept: "帰省する", reading: "きせいする", meaning: "return to one's hometown" },
            { concept: "出張から戻って", reading: "しゅっちょうからもどって", meaning: "return from business trip" },
            { concept: "部屋に戻って", reading: "へやにもどって", meaning: "return to room" },
            { concept: "ふるさとに戻って", reading: "ふるさとにもどって", meaning: "return to hometown" },
            { concept: "休暇から戻って", reading: "きゅうかからもどって", meaning: "return from vacation" },
          ],
        },
      },
      {
        q: "問題 3",
        a: "43114",
        detail: {
          titleKey: "detail.readingAnalysis",
          items: [
            { concept: "いきなり", reading: "いきなり", meaning: "suddenly" },
            { concept: "やっと", reading: "やっと", meaning: "finally, at last" },
            { concept: "一度", reading: "いちど", meaning: "once" },
            { concept: "ゆっくり", reading: "ゆっくり", meaning: "slowly, leisurely" },
          ],
        },
      },
      {
        q: "問題 4",
        a: "23112 23123 2",
        detail: {
          titleKey: "detail.readingAnalysis",
          items: [
            { concept: "悪条件", reading: "あくじょうけん", meaning: "bad conditions" },
            { concept: "相当", reading: "そうとう", meaning: "considerably, quite" },
            { concept: "いろいろ", reading: "いろいろ", meaning: "various" },
            { concept: "また", reading: "また", meaning: "also, again" },
            { concept: "やっぱり", reading: "やっぱり", meaning: "as expected" },
            { concept: "かなり", reading: "かなり", meaning: "quite, considerably" },
          ],
        },
      },
      { q: "問題 5", a: "312" },
      { q: "問題 10", a: "13344" },
      { q: "問題 11", a: "13232 221" },
      { q: "問題 12", a: "23" },
      { q: "問題 13", a: "143" },
      { q: "問題 14", a: "34" },
    ],
    listening: [
      { q: "問題 8", a: "3434" },
      { q: "問題 9", a: "22 42 41 23" },
      { q: "問題 10", a: "421" },
      { q: "問題 11", a: "44" },
      { q: "問題 12", a: "113" },
      { q: "問題 13", a: "33" },
    ],
  },
  N3: {
    vocabulary: [
      { q: "問題 1", a: "11442233" },
      { q: "問題 2", a: "212413" },
      { q: "問題 3", a: "43212241132" },
      { q: "問題 4", a: "23443" },
      { q: "問題 5", a: "34213" },
    ],
    grammar: [
      { q: "問題 1", a: "31342 41232 334" },
      { q: "問題 2", a: "12134" },
      { q: "問題 3", a: "2143" },
      { q: "問題 4", a: "1324" },
      { q: "問題 5", a: "223144" },
      { q: "問題 6", a: "3113" },
      { q: "問題 7", a: "24" },
    ],
    reading: [
      { q: "問題 1", a: "121333" },
      { q: "問題 2", a: "114123" },
      { q: "問題 3", a: "223" },
      { q: "問題 4", a: "2133" },
      { q: "問題 5", a: "13222313" },
    ],
    listening: [
      { q: "問題 1", a: "121333" },
      { q: "問題 2", a: "114123" },
      { q: "問題 3", a: "223" },
      { q: "問題 4", a: "2133" },
      { q: "問題 5", a: "13222313" },
    ],
  },
  N4: {
    vocabulary: [
      { q: "問題 1", a: "TBD", detail: "Details coming soon" },
      { q: "問題 2", a: "TBD", detail: "Details coming soon" },
      { q: "問題 3", a: "TBD", detail: "Details coming soon" },
      { q: "問題 4", a: "TBD", detail: "Details coming soon" },
    ],
    grammar: [
      { q: "問題 1", a: "1 2 3 4 5 6 7 8 9 10 11 12 13", detail: "Details coming soon" },
      { q: "問題 2", a: "14 15 16 17", detail: "Details coming soon" },
      { q: "問題 3", a: "18 19 20 21", detail: "Details coming soon" },
      { q: "問題 4", a: "21 22 23 24", detail: "Details coming soon" },
      { q: "問題 5", a: "25 26 27 28", detail: "Details coming soon" },
    ],
    reading: [
      { q: "問題 4", a: "22 23 24", detail: "Details coming soon" },
      { q: "問題 5", a: "25 26 27", detail: "Details coming soon" },
      { q: "問題 6", a: "28 29", detail: "Details coming soon" },
    ],
    listening: [
      { q: "問題 1", a: "1 2 3 4 5 6 7 8", detail: "Details coming soon" },
      { q: "問題 2", a: "1 2 3 4 5 6 7", detail: "Details coming soon" },
      { q: "問題 3", a: "1 2 3 4 5", detail: "Details coming soon" },
      { q: "問題 4", a: "1 2 3 4 5 6 7 8", detail: "Details coming soon" },
    ],
  },
  N5: {
    vocabulary: [
      { q: "問題 1", a: "TBD" },
      { q: "問題 2", a: "TBD" },
      { q: "問題 3", a: "TBD" },
    ],
    grammar: [
      { q: "問題 4", a: "TBD" },
      { q: "問題 5", a: "TBD" },
      { q: "問題 6", a: "TBD" },
    ],
    reading: [
      { q: "問題 7", a: "TBD" },
      { q: "問題 8", a: "TBD" },
      { q: "問題 9", a: "TBD" },
    ],
    listening: [
      { q: "問題 1", a: "TBD" },
      { q: "問題 2", a: "TBD" },
      { q: "問題 3", a: "TBD" },
    ],
  },
}

const levelColors = {
  N1: {
    gradient: "from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700",
    hover: "hover:bg-red-50 dark:hover:bg-red-900/20",
    difficulty: "最上級",
  },
  N2: {
    gradient: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
    hover: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
    difficulty: "上級",
  },
  N3: {
    gradient: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
    hover: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
    difficulty: "中級",
  },
  N4: {
    gradient: "from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",
    hover: "hover:bg-green-50 dark:hover:bg-green-900/20",
    difficulty: "初中級",
  },
  N5: {
    gradient: "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
    hover: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
    difficulty: "初級",
  },
}

export default function Component() {
  const [selectedLevel, setSelectedLevel] = useState<keyof typeof jlptData>("N1")
  const { t, language } = useLanguage()
  const currentData = jlptData[selectedLevel]

  const getTranslatedMeaning = (key: string): string => {
    return vocabularyTranslations[language]?.[key] || vocabularyTranslations.en[key] || key
  }

  const renderAnswerItem = (item: any, index: number, colorClass: string) => (
    <div
      key={index}
      className={`py-4 sm:py-6 px-4 sm:px-6 rounded-lg bg-gradient-to-r ${colorClass} border hover:shadow-md transition-all duration-200 relative z-10`}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
        <span className="font-bold text-lg sm:text-xl text-gray-800 dark:text-gray-200">{item.q}</span>
        <span
          className={`font-mono text-xl sm:text-2xl font-bold ${colorClass.includes("blue")
              ? "text-blue-600 dark:text-blue-400"
              : colorClass.includes("green")
                ? "text-green-600 dark:text-green-400"
                : colorClass.includes("purple")
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-orange-600 dark:text-orange-400"
            }`}
        >
          {item.special ? (
            <>
              {item.a}
              <span className="text-red-500 dark:text-red-400">{item.special}</span>
              {item.end}
            </>
          ) : item.a === "TBD" ? (
            <span className="text-gray-400 italic text-base sm:text-lg">{t("status.preparing")}</span>
          ) : (
            item.a
          )}
        </span>
      </div>
      {item.detail && (
        <div className="mt-4 p-3 sm:p-4 bg-white/70 dark:bg-gray-800/70 rounded-lg border-l-4 border-blue-400 dark:border-blue-500 shadow-sm">
          {item.detail.items ? (
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4 flex items-center gap-2">
                📚 {t(item.detail.titleKey)}
              </h4>
              <div className="grid gap-2 sm:gap-3">
                {item.detail.items.map((listItem: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-blue-100 dark:border-gray-500 hover:shadow-md transition-all duration-200 gap-2"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                        {listItem.kanji ||
                          listItem.pattern ||
                          listItem.sentence ||
                          listItem.expression ||
                          listItem.concept ||
                          listItem.situation}
                      </div>
                      <div className="text-sm sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
                        （{listItem.hiragana || listItem.reading}）
                      </div>
                    </div>
                    <div className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 font-medium sm:text-right">
                      {listItem.kanji ? getTranslatedMeaning(listItem.kanji) : listItem.english || listItem.meaning}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
              {item.detail}
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900 p-2 sm:p-4 transition-all duration-500 overflow-hidden pt-16">
      <SakuraBackground />
      <ScrollToTop />

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Sticky Navigation */}
        <StickyNavbar selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />

        {/* Header - Updated */}
        <div className="text-center space-y-6 relative pt-20">
          <div className="relative px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 blur-3xl opacity-30 rounded-full"></div>
            <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 dark:from-pink-400 dark:via-purple-400 dark:to-orange-400 bg-clip-text text-transparent">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">JLPT {selectedLevel}</h1>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">07/2025</div>
              <div className="text-sm sm:text-base md:text-lg opacity-80 mt-2">
                {t(`level.${selectedLevel.toLowerCase()}` as any)}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
              {t("header.answers")}
            </h2>
            <Trophy className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-8 px-2">
          <Card className="text-center p-2 sm:p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-blue-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-blue-600 dark:text-blue-400" />
            <div className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentData.vocabulary.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("stats.vocabulary")}</div>
          </Card>
          <Card className="text-center p-2 sm:p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 border-green-200 dark:border-green-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-green-600 dark:text-green-400" />
            <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
              {currentData.grammar.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("stats.grammar")}</div>
          </Card>
          <Card className="text-center p-2 sm:p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-purple-200 dark:border-purple-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-purple-600 dark:text-purple-400" />
            <div className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
              {currentData.reading.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("stats.reading")}</div>
          </Card>
          <Card className="text-center p-2 sm:p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-orange-700 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90">
            <Headphones className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-orange-600 dark:text-orange-400" />
            <div className="text-lg sm:text-2xl font-bold text-orange-600 dark:text-orange-400">
              {currentData.listening.length}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("stats.listening")}</div>
          </Card>
        </div>

        {/* Vocabulary & Kanji Section */}
        <Card className="border-2 border-blue-200 dark:border-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white">
            <CardTitle className="text-xl text-center flex items-center justify-center gap-3">
              <BookOpen className="w-6 h-6" />
              {t("section.vocabulary")}
              <Star className="w-5 h-5 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                {currentData.vocabulary
                  .slice(0, Math.ceil(currentData.vocabulary.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 border-blue-100 dark:border-gray-600",
                    ),
                  )}
              </div>
              <div className="space-y-3">
                {currentData.vocabulary
                  .slice(Math.ceil(currentData.vocabulary.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 border-blue-100 dark:border-gray-600",
                    ),
                  )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grammar Section */}
        <Card className="border-2 border-green-200 dark:border-green-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 text-white">
            <CardTitle className="text-xl text-center flex items-center justify-center gap-3">
              <FileText className="w-6 h-6" />
              {t("section.grammar")}
              <Star className="w-5 h-5 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                {currentData.grammar
                  .slice(0, Math.ceil(currentData.grammar.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 border-green-100 dark:border-gray-600",
                    ),
                  )}
              </div>
              <div className="space-y-3">
                {currentData.grammar
                  .slice(Math.ceil(currentData.grammar.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 border-green-100 dark:border-gray-600",
                    ),
                  )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reading Section */}
        <Card className="border-2 border-purple-200 dark:border-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 text-white">
            <CardTitle className="text-xl text-center flex items-center justify-center gap-3">
              <GraduationCap className="w-6 h-6" />
              {t("section.reading")}
              <Star className="w-5 h-5 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                {currentData.reading
                  .slice(0, Math.ceil(currentData.reading.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border-purple-100 dark:border-gray-600",
                    ),
                  )}
              </div>
              <div className="space-y-3">
                {currentData.reading
                  .slice(Math.ceil(currentData.reading.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border-purple-100 dark:border-gray-600",
                    ),
                  )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Listening Section */}
        <Card className="border-2 border-orange-200 dark:border-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 text-white">
            <CardTitle className="text-xl text-center flex items-center justify-center gap-3">
              <Headphones className="w-6 h-6" />
              {t("section.listening")}
              <Star className="w-5 h-5 text-yellow-300" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                {currentData.listening
                  .slice(0, Math.ceil(currentData.listening.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 border-orange-100 dark:border-gray-600",
                    ),
                  )}
              </div>
              <div className="space-y-3">
                {currentData.listening
                  .slice(Math.ceil(currentData.listening.length / 2))
                  .map((item, index) =>
                    renderAnswerItem(
                      item,
                      index,
                      "from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 border-orange-100 dark:border-gray-600",
                    ),
                  )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center space-y-4 py-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 blur-2xl opacity-20 rounded-full"></div>
            <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 dark:from-pink-400 dark:via-purple-400 dark:to-orange-400 bg-clip-text text-transparent">
              <p className="text-xl font-bold">{t("header.title").replace("{level}", selectedLevel)}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{t("header.forReference")}</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
