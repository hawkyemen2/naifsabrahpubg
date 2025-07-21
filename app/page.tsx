import NewsBar from "@/components/news-bar"
import SiteHeader from "@/components/site-header"
import AnimatedBanner from "@/components/animated-banner"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Crown, Gem, LayoutGrid } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gold">
      <SiteHeader />
      <NewsBar />
      <main className="container mx-auto py-8 px-4 md:px-6">
        <AnimatedBanner />

        <section className="my-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gold">اكتشف حسابات ببجي موبايل المميزة</h2>
          <p className="text-lg text-gold-light max-w-3xl mx-auto mb-10">
            نقدم لك مجموعة واسعة من حسابات ببجي موبايل النادرة والمميزة، من حسابات الكونكر الأسطورية إلى الحسابات
            المتنوعة التي تناسب جميع الأذواق والميزانيات.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg hover:shadow-gold/30 transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <Crown className="h-12 w-12 text-gold" />
                <CardTitle className="text-2xl font-bold">حسابات كونكر مميزة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gold-light mb-4">استعرض أقوى حسابات الكونكر مع أندر السكنات والأسلحة المطورة.</p>
                <Button asChild className="bg-gold text-black hover:bg-gold-light hover:text-black">
                  <Link href="/accounts?type=conqueror">
                    <Gamepad2 className="h-4 w-4 ml-2" />
                    عرض الحسابات
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg hover:shadow-gold/30 transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <Gem className="h-12 w-12 text-gold" />
                <CardTitle className="text-2xl font-bold">حسابات مميزة بدون كونكر</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gold-light mb-4">حسابات قوية بمستويات عالية وأزياء نادرة، بأسعار تنافسية.</p>
                <Button asChild className="bg-gold text-black hover:bg-gold-light hover:text-black">
                  <Link href="/accounts?type=non-conqueror">
                    <Gamepad2 className="h-4 w-4 ml-2" />
                    عرض الحسابات
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg hover:shadow-gold/30 transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center gap-4">
                <LayoutGrid className="h-12 w-12 text-gold" />
                <CardTitle className="text-2xl font-bold">حسابات متنوعة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gold-light mb-4">مجموعة واسعة من الحسابات التي تناسب جميع الاحتياجات والميزانيات.</p>
                <Button asChild className="bg-gold text-black hover:bg-gold-light hover:text-black">
                  <Link href="/accounts?type=miscellaneous">
                    <Gamepad2 className="h-4 w-4 ml-2" />
                    عرض الحسابات
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
