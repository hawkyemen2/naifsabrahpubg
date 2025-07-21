import type React from "react"
import AdminSidebar from "@/components/admin/admin-sidebar"
import SiteHeader from "@/components/site-header" // Re-use the main site header

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-gold flex flex-col">
      <SiteHeader /> {/* Use the main site header */}
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
