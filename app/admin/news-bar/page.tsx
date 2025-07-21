"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Trash2 } from "lucide-react"
import { newsItems as initialNewsItems } from "@/lib/data"

export default function AdminNewsBarPage() {
  const [news, setNews] = useState(initialNewsItems)
  const [newItem, setNewItem] = useState("")

  const handleAddItem = () => {
    if (newItem.trim()) {
      setNews((prev) => [...prev, newItem.trim()])
      setNewItem("")
      alert("تم إضافة الخبر بنجاح (محاكاة).")
    }
  }

  const handleRemoveItem = (indexToRemove: number) => {
    setNews((prev) => prev.filter((_, index) => index !== indexToRemove))
    alert("تم حذف الخبر بنجاح (محاكاة).")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold">إدارة الشريط الإخباري</h1>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">إضافة خبر جديد</CardTitle>
          <CardDescription className="text-gold-light">أضف نصاً جديداً يظهر في الشريط الإخباري المتحرك.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="اكتب الخبر الجديد هنا..."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="flex-grow bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
            />
            <Button onClick={handleAddItem} className="bg-gold text-black hover:bg-gold-light">
              <PlusCircle className="h-4 w-4 ml-2" />
              إضافة
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">الأخبار الحالية</CardTitle>
          <CardDescription className="text-gold-light">يمكنك حذف الأخبار الموجودة.</CardDescription>
        </CardHeader>
        <CardContent>
          {news.length === 0 ? (
            <p className="text-center text-gold-light py-4">لا توجد أخبار حالياً.</p>
          ) : (
            <ul className="space-y-3">
              {news.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-black-light p-3 rounded-md border border-gold-dark"
                >
                  <span className="text-gold-light">{item}</span>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveItem(index)}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">حذف</span>
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
