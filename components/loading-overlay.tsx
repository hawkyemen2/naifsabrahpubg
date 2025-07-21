"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Simulate loading for demonstration purposes
    // In a real app, you might integrate with Next.js router events or a global state
    const timer = setTimeout(() => {
      handleComplete()
    }, 500) // Minimum loading time

    return () => clearTimeout(timer)
  }, [pathname]) // Trigger loading on path change

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="flex flex-col items-center gap-4 p-8 rounded-lg bg-black-dark border border-gold shadow-lg">
        <Loader2 className="h-12 w-12 text-gold animate-spin" />
        <p className="text-gold text-xl font-bold animate-pulse">جاري التحميل...</p>
      </div>
    </div>
  )
}
