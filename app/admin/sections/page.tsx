import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle } from "lucide-react"

export default function AdminSectionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gold">إدارة الأقسام</h1>
        <Button className="bg-gold text-black hover:bg-gold-light">
          <PlusCircle className="h-4 w-4 ml-2" />
          إضافة قسم جديد
        </Button>
      </div>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">تعديل الأقسام الحالية</CardTitle>
          <CardDescription className="text-gold-light">يمكنك تعديل أسماء الأقسام أو ترتيبها.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="section-conqueror" className="text-gold">
                اسم قسم حسابات الكونكر
              </Label>
              <Input
                id="section-conqueror"
                defaultValue="حسابات كونكر مميزة"
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <Label htmlFor="section-non-conqueror" className="text-gold">
                اسم قسم حسابات بدون كونكر
              </Label>
              <Input
                id="section-non-conqueror"
                defaultValue="حسابات مميزة بدون كونكر"
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <Label htmlFor="section-miscellaneous" className="text-gold">
                اسم قسم الحسابات المتنوعة
              </Label>
              <Input
                id="section-miscellaneous"
                defaultValue="حسابات متنوعة"
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <Button type="submit" className="bg-gold text-black hover:bg-gold-light">
              حفظ التعديلات
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
