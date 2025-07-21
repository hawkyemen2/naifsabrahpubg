import { newsItems } from "@/lib/data"

export default function NewsBar() {
  return (
    <div className="relative w-full overflow-hidden bg-gold-dark text-black py-2 text-sm font-medium shadow-md">
      <div className="whitespace-nowrap animate-marquee">
        {newsItems.map((item, index) => (
          <span key={index} className="mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
