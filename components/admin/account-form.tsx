"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { pubgAccounts } from "@/lib/data" // Using mock data

interface AccountFormProps {
  initialData?: (typeof pubgAccounts)[0] // Optional for editing
}

export default function AccountForm({ initialData }: AccountFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    name: initialData?.name || "",
    price: initialData?.price || "",
    type: initialData?.type || "miscellaneous",
    images: initialData?.images || Array(7).fill(""),
    info: initialData?.info || {},
  })
  const [infoFields, setInfoFields] = useState(Object.entries(initialData?.info || {}))
  const [newInfoKey, setNewInfoKey] = useState("")
  const [newInfoValue, setNewInfoValue] = useState("")

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id,
        name: initialData.name,
        price: initialData.price,
        type: initialData.type,
        images: initialData.images,
        info: initialData.info,
      })
      setInfoFields(Object.entries(initialData.info))
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images]
    newImages[index] = value
    setFormData((prev) => ({ ...prev, images: newImages }))
  }

  const handleInfoFieldChange = (index: number, type: "key" | "value", value: string) => {
    const newInfoFields = [...infoFields]
    if (type === "key") {
      newInfoFields[index][0] = value
    } else {
      newInfoFields[index][1] = value
    }
    setInfoFields(newInfoFields)
  }

  const addInfoField = () => {
    if (newInfoKey && newInfoValue) {
      setInfoFields((prev) => [...prev, [newInfoKey, newInfoValue]])
      setNewInfoKey("")
      setNewInfoValue("")
    }
  }

  const removeInfoField = (index: number) => {
    setInfoFields((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const updatedInfo = Object.fromEntries(infoFields)
    const finalFormData = { ...formData, info: updatedInfo }

    if (initialData) {
      // Simulate update
      const index = pubgAccounts.findIndex((acc) => acc.id === initialData.id)
      if (index !== -1) {
        pubgAccounts[index] = { ...pubgAccounts[index], ...finalFormData }
      }
      alert("تم تحديث الحساب بنجاح (محاكاة).")
    } else {
      // Simulate add
      const newId = String(pubgAccounts.length + 1) // Simple ID generation
      pubgAccounts.push({ ...finalFormData, id: newId })
      alert("تم إضافة الحساب بنجاح (محاكاة).")
    }
    router.push("/admin/accounts") // Redirect back to accounts list
  }

  return (
    <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gold">
          {initialData ? "تعديل الحساب" : "إضافة حساب جديد"}
        </CardTitle>
        <CardDescription className="text-gold-light">
          {initialData ? "قم بتعديل تفاصيل حساب ببجي." : "املأ النموذج لإضافة حساب ببجي جديد."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-gold">
                اسم الحساب
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <Label htmlFor="price" className="text-gold">
                السعر
              </Label>
              <Input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="type" className="text-gold">
              نوع الحساب
            </Label>
            <Select value={formData.type} onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}>
              <SelectTrigger className="w-full bg-black-light border-gold-dark text-gold focus:ring-gold focus:border-gold">
                <SelectValue placeholder="اختر نوع الحساب" />
              </SelectTrigger>
              <SelectContent className="bg-black-dark border-gold-dark text-gold">
                <SelectItem value="conqueror">حساب كونكر مميز</SelectItem>
                <SelectItem value="non-conqueror">حساب مميز بدون كونكر</SelectItem>
                <SelectItem value="miscellaneous">حساب متنوع</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-gold">صور الحساب (7 صور)</Label>
            {formData.images.map((image, index) => (
              <Input
                key={index}
                placeholder={`رابط الصورة ${index + 1}`}
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
            ))}
          </div>

          <div className="space-y-4">
            <Label className="text-gold">معلومات الحساب (20 خانة)</Label>
            <div className="space-y-2">
              {infoFields.map(([key, value], index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    placeholder="المفتاح (مثال: المستوى)"
                    value={key}
                    onChange={(e) => handleInfoFieldChange(index, "key", e.target.value)}
                    className="flex-1 bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
                  />
                  <Input
                    placeholder="القيمة (مثال: 70)"
                    value={value}
                    onChange={(e) => handleInfoFieldChange(index, "value", e.target.value)}
                    className="flex-1 bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeInfoField(index)}
                    className="bg-red-600 text-white hover:bg-red-700"
                  >
                    حذف
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="مفتاح جديد"
                value={newInfoKey}
                onChange={(e) => setNewInfoKey(e.target.value)}
                className="flex-1 bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
              <Input
                placeholder="قيمة جديدة"
                value={newInfoValue}
                onChange={(e) => setNewInfoValue(e.target.value)}
                className="flex-1 bg-black-light border-gold-dark text-gold placeholder:text-gold-light/70 focus:ring-gold focus:border-gold"
              />
              <Button type="button" onClick={addInfoField} className="bg-gold text-black hover:bg-gold-light">
                إضافة حقل
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gold text-black hover:bg-gold-light">
            {initialData ? "حفظ التعديلات" : "إضافة الحساب"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
