import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "../contexts/language-context"
import Component from "../jlpt-results"

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <LanguageProvider>
        <Component />
      </LanguageProvider>
    </ThemeProvider>
  )
}
