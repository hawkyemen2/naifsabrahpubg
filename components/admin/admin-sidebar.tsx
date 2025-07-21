"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Gamepad2, FileText, List, Newspaper, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/admin",
      icon: LayoutDashboard,
      label: "لوحة التحكم",
    },
    {
      href: "/admin/accounts",
      icon: Gamepad2,
      label: "إدارة الحسابات",
    },
    {
      href: "/admin/pages",
      icon: FileText,
      label: "إدارة الصفحات",
    },
    {
      href: "/admin/sections",
      icon: List,
      label: "إدارة الأقسام",
    },
    {
      href: "/admin/news-bar",
      icon: Newspaper,
      label: "إدارة الشريط الإخباري",
    },
    {
      href: "/admin/banner",
      icon: ImageIcon,
      label: "إدارة صور البانر",
    },
  ]

  return (
    <aside className="w-64 bg-black-dark border-l border-gold-dark p-4 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gold mb-6 text-center">لوحة الإدارة</h2>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-gold-light transition-colors hover:bg-gold hover:text-black",
                isActive && "bg-gold text-black font-semibold",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
