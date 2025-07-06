"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "./language-selector"
import { MobileNav } from "./mobile-nav"
import { useLanguage } from "@/contexts/language-context"
import { Trophy } from "lucide-react"

interface StickyNavbarProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
}

const levelData = [
  {
    key: "N1",
    label: "N1",
    difficulty: "最上級",
    gradient: "from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700",
  },
  {
    key: "N2",
    label: "N2",
    difficulty: "上級",
    gradient: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
  },
  {
    key: "N3",
    label: "N3",
    difficulty: "中級",
    gradient: "from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600",
  },
  {
    key: "N4",
    label: "N4",
    difficulty: "初中級",
    gradient: "from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",
  },
  {
    key: "N5",
    label: "N5",
    difficulty: "初級",
    gradient: "from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
  },
]

export function StickyNavbar({ selectedLevel, onLevelChange }: StickyNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo/Title */}
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-500 dark:text-yellow-400" />
            <div className="font-bold text-lg bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
              JLPT {selectedLevel}
            </div>
          </div>

          {/* Center - Desktop Level Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {levelData.map((level) => (
              <Button
                key={level.key}
                onClick={() => onLevelChange(level.key)}
                variant={selectedLevel === level.key ? "default" : "outline"}
                size="sm"
                className={`px-3 lg:px-4 py-2 text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                  selectedLevel === level.key
                    ? `bg-gradient-to-r ${level.gradient} text-white shadow-lg scale-105 border-0`
                    : "hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/80"
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs lg:text-sm font-extrabold">JLPT {level.key}</span>
                  <span className="text-xs opacity-90 hidden lg:block">
                    {t(`level.${level.key.toLowerCase()}` as any)}
                  </span>
                </div>
                {selectedLevel === level.key && (
                  <div className="absolute inset-0 bg-white/20 animate-pulse rounded"></div>
                )}
              </Button>
            ))}
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
            <MobileNav selectedLevel={selectedLevel} onLevelChange={onLevelChange} levels={levelData} />
          </div>
        </div>
      </div>
    </nav>
  )
}
