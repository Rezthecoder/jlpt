"use client"

import { useState } from "react"
import { X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface MobileNavProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
  levels: Array<{
    key: string
    label: string
    difficulty: string
    gradient: string
  }>
}

export function MobileNav({ selectedLevel, onLevelChange, levels }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button - Improved */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="md:hidden relative h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 transition-all duration-200"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <div
            className={`absolute transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0" : "rotate-0 -translate-y-1"}`}
          >
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"></div>
          </div>
          <div className={`absolute transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"></div>
          </div>
          <div
            className={`absolute transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "rotate-0 translate-y-1"}`}
          >
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile Menu - Completely Redesigned */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300"
            onClick={toggleMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-16 right-4 z-50 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/50 md:hidden transform transition-all duration-300 ease-out">
            {/* Header */}
            <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Select JLPT Level
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Level Grid */}
            <div className="p-4">
              <div className="grid grid-cols-1 gap-2">
                {levels.map((level) => (
                  <button
                    key={level.key}
                    onClick={() => {
                      onLevelChange(level.key)
                      setIsOpen(false)
                    }}
                    className={`group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-200 ${
                      selectedLevel === level.key
                        ? `bg-gradient-to-r ${level.gradient} text-white shadow-lg scale-[1.02]`
                        : "bg-gray-50/80 hover:bg-gray-100/80 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 text-gray-700 dark:text-gray-200 hover:scale-[1.01]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold">JLPT {level.key}</span>
                        <span className="text-sm opacity-90">{t(`level.${level.key.toLowerCase()}` as any)}</span>
                      </div>
                      <div
                        className={`transition-transform duration-200 ${selectedLevel === level.key ? "translate-x-0" : "translate-x-2 group-hover:translate-x-0"}`}
                      >
                        {selectedLevel === level.key ? (
                          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        ) : (
                          <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                        )}
                      </div>
                    </div>

                    {/* Hover effect */}
                    {selectedLevel !== level.key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 pt-0">
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">{t("header.forReference")}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
