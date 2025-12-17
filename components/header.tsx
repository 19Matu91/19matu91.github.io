import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import texts from "@/texts.json"
import { DragonIcon } from "./dragon-icon"

export function Header() {
  const navigation = [
    { name: texts.navigation.club, href: "/club" },
    { name: texts.navigation.member, href: "/socio" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <DragonIcon className="h-20 w-20 text-primary" />
            <div className="text-4xl font-semibold text-primary" style={{ fontFamily: "var(--font-frank)" }}>
              {texts.common.clubName}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                style={{ fontFamily: "var(--font-quicksand)" }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-quicksand)" }}
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
