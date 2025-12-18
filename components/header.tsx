"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import texts from "@/texts.json"
import { useRouter, usePathname } from "next/navigation"
import { DragonIcon } from "@/components/icons/dragon-icon"
import { DragonTextLogo } from "@/components/icons/dragon-text-logo"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()

  const navigation = [
    { name: texts.navigation.home, href: "/" },
    { name: texts.navigation.calendar, href: "/#calendario" },
    { name: texts.navigation.club, href: "/club" },
    { name: texts.navigation.member, href: "/socio" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    if (name === texts.navigation.home) {
      e.preventDefault()

      if (pathname === "/") {
        // Already on home page, just scroll to top and clear hash
        window.history.pushState({}, "", "/")
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // Navigate to home page, then scroll to top
        router.push("/")
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }, 100)
      }
      return
    }

    if (href === "/#calendario") {
      e.preventDefault()

      if (pathname === "/") {
        // Already on home page, scroll to calendario section
        const calendarioSection = document.getElementById("calendario")
        if (calendarioSection) {
          window.history.pushState({}, "", "/#calendario")
          calendarioSection.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        // Navigate from another page
        router.push("/#calendario")
        setTimeout(() => {
          const calendarioSection = document.getElementById("calendario")
          if (calendarioSection) {
            calendarioSection.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      // Already on home page, scroll to top and clear hash
      window.history.pushState({}, "", "/")
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page
      router.push("/")
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 sm:h-24 md:h-28 items-center justify-between">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            <DragonIcon className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 fill-primary flex-shrink-0" />
            <DragonTextLogo className="h-8 sm:h-10 md:h-12 w-2/3 fill-primary flex-shrink-0" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className="text-base xl:text-lg font-medium text-card hover:text-accent transition-colors px-3 xl:px-4 py-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.name)}
                    className="text-xl font-medium text-card hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
