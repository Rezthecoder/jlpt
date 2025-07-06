"use client"

import { useState } from "react"
import { Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/contexts/language-context"

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ne", name: "नेपाली", flag: "🇳🇵" },
  { code: "my", name: "မြန်မာ", flag: "🇲🇲" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
]

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative overflow-hidden transition-all duration-300 hover:scale-110 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-600 shadow-lg"
      >
        <Globe className="h-[1.2rem] w-[1.2rem] text-blue-600 dark:text-blue-400" />
        <span className="sr-only">Select language</span>
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-14 z-50 min-w-[200px] rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-xl">
            <div className="p-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-md text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    language === lang.code
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="flex-1 font-medium text-sm">{lang.name}</span>
                  {language === lang.code && <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
