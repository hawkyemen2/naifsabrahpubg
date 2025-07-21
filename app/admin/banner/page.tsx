"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusCircle, Trash2 } from "lucide-react"
import { bannerImages as initialBannerImages } from "@/lib/data"

export default function AdminBannerPage() {
  const [bannerImgs, setBannerImgs] = useState(initialBannerImages)
  const [newImageUrl, setNewImageUrl] = useState("")
  const [newImageAlt, setNewImageAlt] = useState("")

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setBannerImgs((prev) => [...prev, { src: newImageUrl.trim(), alt: newImageAlt.trim() || "Banner Image" }])
      setNewImageUrl("")
      setNewImageAlt("")
      alert("تم إضافة صورة البانر بنجاح (محاكاة).")
    }
  }

  const handleRemoveImage = (indexToRemove: number) => {
    setBannerImgs((prev) => prev.filter((_, index) => index !== indexToRemove))
    alert("تم حذف صورة البانر بنجاح (محاكاة).")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gold">إدارة صور البانر</h1>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">إضافة صورة بانر جديدة</CardTitle>
          <CardDescription className="text-gold-light">أضف رابط URL لصورة جديدة للبانر المتحرك.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="new-image-url" className="text-gold">
                رابط الصورة (URL)
              </Label>
              <Input
                id="new-image-url"
                placeholder="https://example.com/your-banner-image.jpg"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <Label htmlFor="new-image-alt" className="text-gold">
                النص البديل (Alt Text)
              </Label>
              <Input
                id="new-image-alt"
                placeholder="وصف الصورة (لتحسين محركات البحث وإمكانية الوصول)"
                value={newImageAlt}
                onChange={(e) => setNewImageAlt(e.target.value)}
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <Button onClick={handleAddImage} className="w-full bg-gold text-black hover:bg-gold-light">
              <PlusCircle className="h-4 w-4 ml-2" />
              إضافة صورة بانر
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">صور البانر الحالية</CardTitle>
          <CardDescription className="text-gold-light">يمكنك حذف صور البانر الموجودة.</CardDescription>
        </CardHeader>
        <CardContent>
          {bannerImgs.length === 0 ? (
            <p className="text-center text-gold-light py-4">لا توجد صور بانر حالياً.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bannerImgs.map((image, index) => (
                <div key={index} className="relative group rounded-md overflow-hidden border border-gold-dark">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={400}
                    height={200}
                    className="object-cover w-full h-40"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveImage(index)}
                      className="bg-red-600 text-white hover:bg-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">حذف</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
