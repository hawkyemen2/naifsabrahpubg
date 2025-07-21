import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingOverlay from "@/components/loading-overlay"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "متجر حسابات ببجي",
  description: "متجر متطور لبيع وشراء حسابات ببجي موبايل بمميزات خرافية.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Default to dark theme for black/gold
          enableSystem
          disableTransitionOnChange
        >
          <LoadingOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
