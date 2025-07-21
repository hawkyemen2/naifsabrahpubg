"use client"

import Link from "next/link"
import { Menu, Gamepad2, Home, ScrollText, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gold-dark bg-black-dark text-gold shadow-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gold">
          <Gamepad2 className="h-6 w-6" />
          <span>متجر ببجي</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black-light px-4 py-2 text-sm font-medium transition-colors hover:bg-gold hover:text-black focus:bg-gold focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Home className="h-4 w-4 ml-2" />
                  الرئيسية
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black-light hover:bg-gold hover:text-black focus:bg-gold focus:text-black">
                <Gamepad2 className="h-4 w-4 ml-2" />
                حسابات ببجي
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] bg-black-dark text-gold border border-gold-dark rounded-md shadow-lg">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-black-light p-3 no-underline outline-none focus:shadow-md hover:bg-gold hover:text-black"
                        href="/accounts?type=conqueror"
                      >
                        <div className="text-sm font-medium leading-none">حسابات كونكر مميزة</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          أفضل حسابات الكونكر النادرة.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-black-light p-3 no-underline outline-none focus:shadow-md hover:bg-gold hover:text-black"
                        href="/accounts?type=non-conqueror"
                      >
                        <div className="text-sm font-medium leading-none">حسابات مميزة بدون كونكر</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          حسابات قوية بأسعار مميزة.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-black-light p-3 no-underline outline-none focus:shadow-md hover:bg-gold hover:text-black"
                        href="/accounts?type=miscellaneous"
                      >
                        <div className="text-sm font-medium leading-none">حسابات متنوعة</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          مجموعة واسعة من الحسابات.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/terms"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black-light px-4 py-2 text-sm font-medium transition-colors hover:bg-gold hover:text-black focus:bg-gold focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <ScrollText className="h-4 w-4 ml-2" />
                  شروط المتجر
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/admin"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black-light px-4 py-2 text-sm font-medium transition-colors hover:bg-gold hover:text-black focus:bg-gold focus:text-black focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <Settings className="h-4 w-4 ml-2" />
                  لوحة الإدارة
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-gold hover:bg-gold hover:text-black">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black-dark text-gold border-gold-dark">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gold mb-6">
              <Gamepad2 className="h-6 w-6" />
              <span>متجر ببجي</span>
            </Link>
            <nav className="grid gap-4 text-lg font-medium">
              <Link href="/" className="flex items-center gap-3 hover:text-gold-light">
                <Home className="h-5 w-5" />
                الرئيسية
              </Link>
              <Link href="/accounts?type=conqueror" className="flex items-center gap-3 hover:text-gold-light">
                <Gamepad2 className="h-5 w-5" />
                حسابات كونكر مميزة
              </Link>
              <Link href="/accounts?type=non-conqueror" className="flex items-center gap-3 hover:text-gold-light">
                <Gamepad2 className="h-5 w-5" />
                حسابات مميزة بدون كونكر
              </Link>
              <Link href="/accounts?type=miscellaneous" className="flex items-center gap-3 hover:text-gold-light">
                <Gamepad2 className="h-5 w-5" />
                حسابات متنوعة
              </Link>
              <Link href="/terms" className="flex items-center gap-3 hover:text-gold-light">
                <ScrollText className="h-5 w-5" />
                شروط المتجر
              </Link>
              <Link href="/admin" className="flex items-center gap-3 hover:text-gold-light">
                <Settings className="h-5 w-5" />
                لوحة الإدارة
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
