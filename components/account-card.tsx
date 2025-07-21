"use client"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight, PhoneIcon as Whatsapp } from "lucide-react"

interface AccountCardProps {
  account: {
    id: string
    name: string
    price: string
    images: string[]
    info: { [key: string]: string }
  }
}

export default function AccountCard({ account }: AccountCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const whatsappNumber = "+967781731609" // رقم الواتساب المحدد

  const handleWhatsAppInfo = () => {
    const accountInfo = Object.entries(account.info)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n")
    const message = `مرحباً، أود الاستفسار عن الحساب التالي:\n\nاسم الحساب: ${account.name}\nالسعر: ${account.price}\n\nتفاصيل الحساب:\n${accountInfo}\n\nالرجاء التواصل معي لإتمام عملية الشراء.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleWhatsAppBuy = () => {
    const message = `مرحباً، أود شراء الحساب التالي:\n\nاسم الحساب: ${account.name}\nالسعر: ${account.price}\n\nالرجاء التواصل معي لإتمام عملية الشراء.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="bg-black-dark border border-gold-dark text-gold shadow-lg flex flex-col h-full">
      <CardHeader className="pb-0">
        <CardTitle className="text-2xl font-bold text-gold">{account.name}</CardTitle>
        <CardDescription className="text-gold-light text-xl font-semibold">{account.price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden border border-gold-dark">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {account.images.map((image, index) => (
                <CarouselItem key={index} className="w-full h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${account.name} - صورة ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-gold hover:bg-gold hover:text-black rounded-full p-1 z-10">
              <ChevronRight className="h-5 w-5" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-gold hover:bg-gold hover:text-black rounded-full p-1 z-10">
              <ChevronLeft className="h-5 w-5" />
            </CarouselNext>
          </Carousel>
        </div>

        <h3 className="text-lg font-bold mb-2 text-gold">معلومات الحساب:</h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gold-light max-h-60 overflow-y-auto custom-scrollbar">
          {Object.entries(account.info).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center border-b border-gold-dark pb-1">
              <dt className="font-medium text-gold">{key}:</dt>
              <dd className="text-right">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4 pt-0">
        <Button
          className="w-full bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
          onClick={handleWhatsAppInfo}
        >
          <Whatsapp className="h-5 w-5" />
          {"إرسال معلومات الحساب للواتس اب"}
        </Button>
        <Button
          className="w-full bg-gold text-black hover:bg-gold-light flex items-center gap-2"
          onClick={handleWhatsAppBuy}
        >
          <Whatsapp className="h-5 w-5" />
          {"شراء عبر الواتس اب"}
        </Button>
      </CardFooter>
    </Card>
  )
}
