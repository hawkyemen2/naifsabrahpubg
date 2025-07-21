import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Newspaper, ImageIcon } from "lucide-react"
import { pubgAccounts, newsItems, bannerImages } from "@/lib/data"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gold">لوحة التحكم</h1>
      <p className="text-gold-light">مرحباً بك في لوحة إدارة متجر ببجي. يمكنك إدارة محتوى المتجر من هنا.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الحسابات</CardTitle>
            <Gamepad2 className="h-4 w-4 text-gold-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pubgAccounts.length}</div>
            <p className="text-xs text-muted-foreground text-gold-light">عدد الحسابات المعروضة</p>
          </CardContent>
        </Card>

        <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">عناصر الشريط الإخباري</CardTitle>
            <Newspaper className="h-4 w-4 text-gold-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newsItems.length}</div>
            <p className="text-xs text-muted-foreground text-gold-light">عدد الأخبار النشطة</p>
          </CardContent>
        </Card>

        <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">صور البانر</CardTitle>
            <ImageIcon className="h-4 w-4 text-gold-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bannerImages.length}</div>
            <p className="text-xs text-muted-foreground text-gold-light">عدد صور البانر النشطة</p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-gold mb-6">نظرة عامة سريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">إدارة الحسابات</CardTitle>
            </CardHeader>
            <CardContent className="text-gold-light">
              <p>يمكنك إضافة، تعديل، أو حذف حسابات ببجي المعروضة في المتجر.</p>
            </CardContent>
          </Card>
          <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold">إدارة المحتوى</CardTitle>
            </CardHeader>
            <CardContent className="text-gold-light">
              <p>تحكم في محتوى الصفحات، الأقسام، الشريط الإخباري، وصور البانر.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
