import SiteHeader from "@/components/site-header"
import NewsBar from "@/components/news-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-gold">
      <SiteHeader />
      <NewsBar />
      <main className="container mx-auto py-8 px-4 md:px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold">شروط المتجر</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gold">قسم شروط بيعك لحسابك</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gold-light">
              <p>
                1- تصفير حسابك من كل الارتباطات:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>● ازالة كل بريد الكتروني في اللعبة.</li>
                  <li>● ازل كل حساب تواصل اجتماعي (منصة X تويتر، منصة الفيس بوك وغيرها) إذا تواجد في اللعبة.</li>
                  <li>● اجعل فقط ارتباط الهاتف الخاص بك في اللعبة.</li>
                  <li>
                    ● تواصل معنا وعند الاتفاق سنقوم بعمل ايميل جديد لحسابك وسنرسله لك لكي تضيف الايميل الجديد وتقوم بحذف
                    رقم هاتفك.
                  </li>
                  <li>● سنرسل أموالك خلال 21 يوم لسياسة شركة ببجي للاسترجاع.</li>
                </ul>
              </p>
              <p>
                2- تواصل معنا على الواتس اب:{" "}
                <a href="https://wa.me/+967781731609" className="text-gold hover:underline">
                  +967781731609
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gold">قسم شروط شراء حساب</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gold-light">
              <p>● قم باختيار الحساب ثم قم بإضافة معلوماتك واضغط على إرسال إلى الواتس اب.</p>
              <p>
                ● سيتم إرسالك إلى الواتس اب تلقائياً مع معلوماتك (اسمك ورقمك وهاتفك) وكذلك سيتم إرسال معلومات الحساب الذي
                تريده.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
