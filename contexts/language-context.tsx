"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Language = "en" | "ne" | "my" | "vi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "header.title": "JLPT {level} Answer Key - July 2025",
    "header.answers": "Answers",
    "header.forReference": "For reference purposes only",

    // Levels
    "level.n1": "Advanced",
    "level.n2": "Upper Intermediate",
    "level.n3": "Intermediate",
    "level.n4": "Elementary",
    "level.n5": "Beginner",

    // Sections
    "section.vocabulary": "Vocabulary & Kanji",
    "section.grammar": "Grammar",
    "section.reading": "Reading",
    "section.listening": "Listening",

    // Stats
    "stats.vocabulary": "Vocabulary",
    "stats.grammar": "Grammar",
    "stats.reading": "Reading",
    "stats.listening": "Listening",
    "stats.problems": "Problems",

    // Buttons
    "button.scrollToTop": "Scroll to top",
    "button.toggleTheme": "Toggle theme",

    // Status
    "status.preparing": "Preparing...",

    // Detail Titles
    "detail.vocabularyList": "Vocabulary List",
    "detail.vocabularyAnalysis": "Vocabulary Analysis",
    "detail.grammarPatterns": "Grammar Patterns",
    "detail.sentenceRearrangement": "Sentence Rearrangement",
    "detail.fillInBlank": "Fill-in-the-blank",
    "detail.readingContent": "Reading Content",
    "detail.readingAnalysis": "Reading Analysis",
    "detail.listeningContent": "Listening Content",

    // Language names
    "lang.english": "English",
    "lang.nepali": "नेपाली",
    "lang.myanmar": "မြန်မာ",
    "lang.vietnamese": "Tiếng Việt",
  },

  ne: {
    // Header
    "header.title": "JLPT {level} उत्तर पुस्तिका - जुलाई 2025",
    "header.answers": "उत्तरहरू",
    "header.forReference": "केवल सन्दर्भको लागि",

    // Levels
    "level.n1": "उन्नत",
    "level.n2": "उच्च मध्यम",
    "level.n3": "मध्यम",
    "level.n4": "प्राथमिक",
    "level.n5": "शुरुवाती",

    // Sections
    "section.vocabulary": "शब्दावली र कान्जी",
    "section.grammar": "व्याकरण",
    "section.reading": "पठन",
    "section.listening": "सुनाइ",

    // Stats
    "stats.vocabulary": "शब्दावली",
    "stats.grammar": "व्याकरण",
    "stats.reading": "पठन",
    "stats.listening": "सुनाइ",
    "stats.problems": "समस्याहरू",

    // Buttons
    "button.scrollToTop": "माथि स्क्रोल गर्नुहोस्",
    "button.toggleTheme": "थिम परिवर्तन गर्नुहोस्",

    // Status
    "status.preparing": "तयारी गर्दै...",

    // Detail Titles
    "detail.vocabularyList": "शब्दावली सूची",
    "detail.vocabularyAnalysis": "शब्दावली विश्लेषण",
    "detail.grammarPatterns": "व्याकरण ढाँचाहरू",
    "detail.sentenceRearrangement": "वाक्य पुनर्व्यवस्था",
    "detail.fillInBlank": "खाली ठाउँ भर्नुहोस्",
    "detail.readingContent": "पठन सामग्री",
    "detail.readingAnalysis": "पठन विश्लेषण",
    "detail.listeningContent": "सुनाइ सामग्री",

    // Language names
    "lang.english": "English",
    "lang.nepali": "नेपाली",
    "lang.myanmar": "မြန်မာ",
    "lang.vietnamese": "Tiếng Việt",
  },

  my: {
    // Header
    "header.title": "JLPT {level} အဖြေစာရွက် - ဇူလိုင် 2025",
    "header.answers": "အဖြေများ",
    "header.forReference": "ရည်ညွှန်းရန်အတွက်သာ",

    // Levels
    "level.n1": "အဆင့်မြင့်",
    "level.n2": "အလယ်အလတ်အထက်",
    "level.n3": "အလယ်အလတ်",
    "level.n4": "အခြေခံ",
    "level.n5": "စတင်သူ",

    // Sections
    "section.vocabulary": "စကားလုံးနှင့် ကန်ဂျီ",
    "section.grammar": "သဒ္ဒါ",
    "section.reading": "စာဖတ်ခြင်း",
    "section.listening": "နားထောင်ခြင်း",

    // Stats
    "stats.vocabulary": "စကားလုံး",
    "stats.grammar": "သဒ္ဒါ",
    "stats.reading": "စာဖတ်ခြင်း",
    "stats.listening": "နားထောင်ခြင်း",
    "stats.problems": "ပြဿနာများ",

    // Buttons
    "button.scrollToTop": "အပေါ်သို့ လှိမ့်ရန်",
    "button.toggleTheme": "အပြင်အဆင် ပြောင်းရန်",

    // Status
    "status.preparing": "ပြင်ဆင်နေသည်...",

    // Detail Titles
    "detail.vocabularyList": "စကားလုံးစာရင်း",
    "detail.vocabularyAnalysis": "စကားလုံးခွဲခြမ်းစိတ်ဖြာခြင်း",
    "detail.grammarPatterns": "သဒ္ဒါပုံစံများ",
    "detail.sentenceRearrangement": "စာကြောင်းပြန်လည်စီစဉ်ခြင်း",
    "detail.fillInBlank": "အလွတ်နေရာဖြည့်ခြင်း",
    "detail.readingContent": "စာဖတ်အကြောင်းအရာ",
    "detail.readingAnalysis": "စာဖတ်ခွဲခြမ်းစိတ်ဖြာခြင်း",
    "detail.listeningContent": "နားထောင်အကြောင်းအရာ",

    // Language names
    "lang.english": "English",
    "lang.nepali": "नेपाली",
    "lang.myanmar": "မြန်မာ",
    "lang.vietnamese": "Tiếng Việt",
  },

  vi: {
    // Header
    "header.title": "Đáp án JLPT {level} - Tháng 7/2025",
    "header.answers": "Đáp án",
    "header.forReference": "Chỉ để tham khảo",

    // Levels
    "level.n1": "Nâng cao",
    "level.n2": "Trung cấp cao",
    "level.n3": "Trung cấp",
    "level.n4": "Sơ cấp",
    "level.n5": "Cơ bản",

    // Sections
    "section.vocabulary": "Từ vựng & Kanji",
    "section.grammar": "Ngữ pháp",
    "section.reading": "Đọc hiểu",
    "section.listening": "Nghe hiểu",

    // Stats
    "stats.vocabulary": "Từ vựng",
    "stats.grammar": "Ngữ pháp",
    "stats.reading": "Đọc hiểu",
    "stats.listening": "Nghe hiểu",
    "stats.problems": "Bài tập",

    // Buttons
    "button.scrollToTop": "Cuộn lên đầu",
    "button.toggleTheme": "Chuyển đổi giao diện",

    // Status
    "status.preparing": "Đang chuẩn bị...",

    // Detail Titles
    "detail.vocabularyList": "Danh sách từ vựng",
    "detail.vocabularyAnalysis": "Phân tích từ vựng",
    "detail.grammarPatterns": "Mẫu ngữ pháp",
    "detail.sentenceRearrangement": "Sắp xếp lại câu",
    "detail.fillInBlank": "Điền vào chỗ trống",
    "detail.readingContent": "Nội dung đọc hiểu",
    "detail.readingAnalysis": "Phân tích đọc hiểu",
    "detail.listeningContent": "Nội dung nghe hiểu",

    // Language names
    "lang.english": "English",
    "lang.nepali": "नेपाली",
    "lang.myanmar": "မြန်မာ",
    "lang.vietnamese": "Tiếng Việt",
  },
}

// Vocabulary translations for different languages
const vocabularyTranslations = {
  en: {
    // N1 Vocabulary
    余暇: "leisure time, free time",
    鈍い: "dull, slow",
    検閲: "censorship",
    崇高: "sublime, noble",
    裁く: "to judge",
    胸中: "one's heart, mind",
    会社の合併: "company merger",
    手際が器用: "skillful, dexterous",
    年齢をごまかす: "to lie about one's age",
    加筆: "addition, revision",
    ブランクがある: "to have a blank period",
    うすうす気づいた: "to have a vague feeling",
    脳裏に浮かぶ: "to come to mind",
    着手: "to start, begin",
    トレンド: "trend, tendency",
    破格: "exceptional, extraordinary",
    冷やす: "to tease, make fun of",
    けげん: "strange, mysterious",
    ことごとく: "everything, all",
    返答を保留: "to withhold an answer",
    混雑の緩和: "easing congestion",
    目標に程遠い: "far from the goal",
    まろやかな味: "mellow taste",
    古い体制から脱却: "break away from old system",
    機材を使いこなす: "to master equipment",

    // N2 Vocabulary
    さいのう: "talent, ability",
    湿って: "wet, damp",
    傾向: "tendency, trend",
    診察: "medical examination",
    絞って: "squeeze, wring",
    削って: "shave, scrape",
    握って: "grip, grasp",
    掘って: "dig, excavate",
    施設: "facilities, equipment",
    誓った: "vowed, swore",
    命じた: "ordered, commanded",
    迫った: "pressed, urged",
    関与: "involvement, participation",
    参列: "attendance",
    加入: "joining",
    登場: "appearance, entrance",
    べたべた: "sticky",
    かさかさ: "dry, rough",
    じめじめ: "damp, humid",
    ちくちく: "prickly, stinging",
    反則: "foul, violation",
    違法: "illegal",
    非常識: "unreasonable",
    不都合: "inconvenient",
    連れ出した: "took out, led out",
    締め出した: "shut out",
    取り払った: "removed",
    追い払った: "drove away",
  },

  ne: {
    // N1 Vocabulary in Nepali
    余暇: "फुर्सदको समय, खाली समय",
    鈍い: "सुस्त, ढिलो",
    検閲: "सेन्सरशिप",
    崇高: "उदात्त, महान्",
    裁く: "न्याय गर्नु",
    胸中: "मनको कुरा, हृदय",
    会社の合併: "कम्पनी मर्जर",
    手際が器用: "दक्ष, निपुण",
    年齢をごまかす: "उमेर लुकाउनु",
    加筆: "थप्नु, संशोधन",
    ブランクがある: "खाली अवधि हुनु",
    うすうす気づいた: "अस्पष्ट महसुस गर्नु",
    脳裏に浮かぶ: "दिमागमा आउनु",
    着手: "सुरु गर्नु, आरम्भ गर्नु",
    トレンド: "प्रवृत्ति, चलन",
    破格: "असाधारण, विशेष",
    冷やす: "जिस्काउनु, मजाक गर्नु",
    けげん: "अनौठो, रहस्यमय",
    ことごとく: "सबै कुरा, सम्पूर्ण",
    返答を保留: "जवाफ रोक्नु",
    混雑の緩和: "भीडभाड कम गर्नु",
    目標に程遠い: "लक्ष्यबाट टाढा",
    まろやかな味: "मिठो स्वाद",
    古い体制から脱却: "पुरानो प्रणालीबाट मुक्त हुनु",
    機材を使いこなす: "उपकरण प्रयोगमा निपुण हुनु",

    // N2 Vocabulary in Nepali
    さいのう: "प्रतिभा, क्षमता",
    湿って: "भिजेको, ओसिलो",
    傾向: "प्रवृत्ति, झुकाव",
    診察: "चिकित्सा जाँच",
    絞って: "निचोड्नु, दबाउनु",
    削って: "काट्नु, घोट्नु",
    握って: "समात्नु, पक्रनु",
    掘って: "खन्नु, उत्खनन गर्नु",
    施設: "सुविधा, उपकरण",
    誓った: "कसम खानु, वाचा गर्नु",
    命じた: "आदेश दिनु, हुकुम गर्नु",
    迫った: "दबाब दिनु, जोड दिनु",
    関与: "सहभागिता, संलग्नता",
    参列: "उपस्थिति",
    加入: "सामेल हुनु",
    登場: "देखा पर्नु, प्रवेश",
    べたべた: "टाँसिने",
    かさかさ: "सुख्खा, रुक्ष",
    じめじめ: "ओसिलो, चिसो",
    ちくちく: "चुभ्ने, काँडे",
    反則: "नियम उल्लंघन",
    違法: "गैरकानूनी",
    非常識: "अनुचित",
    不都合: "असुविधाजनक",
    連れ出した: "बाहिर लैजानु",
    締め出した: "बाहिर निकाल्नु",
    取り払った: "हटाउनु",
    追い払った: "भगाउनु",
  },

  my: {
    // N1 Vocabulary in Myanmar
    余暇: "အားလပ်ချိန်၊ လွတ်လပ်သောအချိန်",
    鈍い: "နှေးကွေး၊ မြန်မြန်မဟုတ်",
    検閲: "ဆင်ဆာဖြတ်တောက်ခြင်း",
    崇高: "မြင့်မြတ်၊ ကြီးမြတ်",
    裁く: "တရားစီရင်ရန်",
    胸中: "နှလုံးသား၊ စိတ်နှလုံး",
    会社の合併: "ကုမ္ပဏီပေါင်းစည်းခြင်း",
    手際が器用: "ကျွမ်းကျင်၊ လိမ္မာ",
    年齢をごまかす: "အသက်အရွယ်လိမ်ခြင်း",
    加筆: "ထပ်ဖြည့်ခြင်း၊ ပြင်ဆင်ခြင်း",
    ブランクがある: "အလွတ်ကာလရှိခြင်း",
    うすうす気づいた: "မရေရာစွာခံစားခြင်း",
    脳裏に浮かぶ: "စိတ်ထဲပေါ်လာခြင်း",
    着手: "စတင်ရန်၊ အစပြုရန်",
    トレンド: "လမ်းကြောင်း၊ ခေတ်စားမှု",
    破格: "ထူးခြားသော၊ အထူး",
    冷やす: "ပြက်ရယ်ပြုခြင်း၊ လှောင်ပြောင်ခြင်း",
    けげん: "ထူးဆန်း၊ လျှို့ဝှက်ဆန်း",
    ことごとく: "အားလုံး၊ တစ်ခုမကျန်",
    返答を保留: "အဖြေရွှေ့ဆိုင်းခြင်း",
    混雑の緩和: "လူစည်ကားမှုလျှော့ချခြင်း",
    目標に程遠い: "ပန်းတိုင်နှင့်ဝေးခြင်း",
    まろやかな味: "နူးညံ့သောအရသာ",
    古い体制から脱却: "ဟောင်းနွမ်းသောစနစ်မှလွတ်မြောက်ခြင်း",
    機材を使いこなす: "စက်ကိရိယာများကျွမ်းကျင်စွာအသုံးပြုခြင်း",

    // N2 Vocabulary in Myanmar
    さいのう: "စွမ်းရည်၊ အရည်အချင်း",
    湿って: "စိုစွတ်၊ အစိုဓာတ်ရှိ",
    傾向: "လမ်းကြောင်း၊ ခံယူချက်",
    診察: "ဆေးစစ်ခြင်း",
    絞って: "ညှစ်ခြင်း၊ နှိပ်ခြင်း",
    削って: "ရိတ်ခြင်း၊ ခြစ်ခြင်း",
    握って: "ကိုင်ခြင်း၊ ဆုပ်ကိုင်ခြင်း",
    掘って: "တူးခြင်း၊ တူးဖော်ခြင်း",
    施設: "အဆောက်အအုံများ၊ စက်ကိရိယာများ",
    誓った: "ကျိန်ဆိုခြင်း၊ ကတိပြုခြင်း",
    命じた: "အမိန့်ပေးခြင်း၊ ညွှန်ကြားခြင်း",
    迫った: "ဖိအားပေးခြင်း၊ တိုက်တွန်းခြင်း",
    関与: "ပါဝင်မှု၊ ပတ်သက်မှု",
    参列: "တက်ရောက်ခြင်း",
    加入: "ပါဝင်ခြင်း",
    登場: "ပေါ်လာခြင်း၊ ဝင်ရောက်ခြင်း",
    べたべた: "ကပ်နေသော",
    かさかさ: "ခြောက်သွေ့သော၊ ကြမ်းတမ်းသော",
    じめじめ: "စိုစွတ်သော၊ အေးစက်သော",
    ちくちく: "စူးရှသော၊ ထိုးသော",
    反則: "စည်းကမ်းချိုးဖောက်ခြင်း",
    違法: "ဥပဒေမဲ့",
    非常識: "မသင့်လျော်သော",
    不都合: "အဆင်မပြေသော",
    連れ出した: "ခေါ်ထုတ်ခြင်း၊ ပို့ဆောင်ခြင်း",
    締め出した: "ပိတ်ထုတ်ခြင်း",
    取り払った: "ဖယ်ရှားခြင်း",
    追い払った: "နှင်ထုတ်ခြင်း",
  },

  vi: {
    // N1 Vocabulary in Vietnamese
    余暇: "thời gian rảnh rỗi, thời gian tự do",
    鈍い: "chậm chạp, đần độn",
    検閲: "kiểm duyệt",
    崇高: "cao thượng, cao quý",
    裁く: "phán xét",
    胸中: "tâm trí, lòng dạ",
    会社の合併: "sáp nhập công ty",
    手際が器用: "khéo léo, thành thạo",
    年齢をごまかす: "giấu tuổi, nói dối về tuổi tác",
    加筆: "bổ sung, sửa đổi",
    ブランクがある: "có khoảng trống",
    うすうす気づいた: "có cảm giác mơ hồ",
    脳裏に浮かぶ: "nảy ra trong đầu",
    着手: "bắt đầu, khởi công",
    トレンド: "xu hướng, khuynh hướng",
    破格: "đặc biệt, phi thường",
    冷やす: "trêu chọc, đùa giỡn",
    けげん: "kỳ lạ, bí ẩn",
    ことごとく: "tất cả mọi thứ, toàn bộ",
    返答を保留: "hoãn trả lời",
    混雑の緩和: "giảm tắc nghẽn",
    目標に程遠い: "còn xa mục tiêu",
    まろやかな味: "vị êm dịu",
    古い体制から脱却: "thoát khỏi hệ thống cũ",
    機材を使いこなす: "thành thạo sử dụng thiết bị",

    // N2 Vocabulary in Vietnamese
    さいのう: "tài năng, khả năng",
    湿って: "ẩm ướt, ướt",
    傾向: "xu hướng, khuynh hướng",
    診察: "khám bệnh",
    絞って: "vắt, ép",
    削って: "cạo, gọt",
    握って: "nắm, cầm",
    掘って: "đào, khai quật",
    施設: "cơ sở vật chất, thiết bị",
    誓った: "thề, cam kết",
    命じた: "ra lệnh, chỉ thị",
    迫った: "ép buộc, thúc giục",
    関与: "tham gia, liên quan",
    参列: "tham dự",
    加入: "gia nhập",
    登場: "xuất hiện, ra mắt",
    べたべた: "dính",
    かさかさ: "khô, thô ráp",
    じめじめ: "ẩm ướt, ẩm thấp",
    ちくちく: "đâm, chích",
    反則: "phạm lỗi, vi phạm",
    違法: "bất hợp pháp",
    非常識: "vô lý",
    不都合: "bất tiện",
    連れ出した: "đưa ra ngoài, dẫn đi",
    締め出した: "đuổi ra ngoài",
    取り払った: "loại bỏ",
    追い払った: "đuổi đi",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("jlpt-language") as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("jlpt-language", lang)
  }

  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof (typeof translations)[typeof language]]
    return translation || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Export vocabulary translations for use in components
export { vocabularyTranslations }
