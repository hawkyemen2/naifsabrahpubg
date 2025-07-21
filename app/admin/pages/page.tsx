import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react"

export default function AdminPagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gold">إدارة الصفحات</h1>
        <Button className="bg-gold text-black hover:bg-gold-light">
          <PlusCircle className="h-4 w-4 ml-2" />
          إضافة صفحة جديدة
        </Button>
      </div>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">تعديل صفحة الشروط</CardTitle>
          <CardDescription className="text-gold-light">قم بتعديل محتوى صفحة شروط المتجر.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="terms-sell" className="text-gold">
                شروط بيع الحساب
              </Label>
              <Textarea
                id="terms-sell"
                rows={8}
                defaultValue={`1- تصفير حسابك من كل الارتباطات:\n● ازالة كل بريد الكتروني في اللعبة.\n● ازل كل حساب تواصل اجتماعي (منصة X تويتر، منصة الفيس بوك وغيرها) إذا تواجد في اللعبة.\n● اجعل فقط ارتباط الهاتف الخاص بك في اللعبة.\n● تواصل معنا وعند الاتفاق سنقوم بعمل ايميل جديد لحسابك وسنرسله لك لكي تضيف الايميل الجديد وتقوم بحذف رقم هاتفك.\n● سنرسل أموالك خلال 21 يوم لسياسة شركة ببجي للاسترجاع.\n2- تواصل معنا على الواتس اب: +967781731609.`}
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <Label htmlFor="terms-buy" className="text-gold">
                شروط شراء الحساب
              </Label>
              <Textarea
                id="terms-buy"
                rows={5}
                defaultValue={`● قم باختيار الحساب ثم قم بإضافة معلوماتك واضغط على إرسال إلى الواتس اب.\n● سيتم إرسالك إلى الواتس اب تلقائياً مع معلوماتك (اسمك ورقمك وهاتفك) وكذلك سيتم إرسال معلومات الحساب الذي تريده.`}
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <Button type="submit" className="bg-gold text-black hover:bg-gold-light">
              حفظ التعديلات
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Add more cards for other static pages if needed */}
    </div>
  )
}
