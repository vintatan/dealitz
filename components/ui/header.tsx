"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md shadow-sm" 
        : "bg-background"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-2xl tracking-tighter transition-colors hover:text-primary"
        >
          <span className="text-primary">Dealitz</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "/", label: "Home" },
            { href: "/testimonials", label: "Testimonials" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm transition-colors hover:text-foreground",
                pathname === href 
                  ? "text-foreground font-medium" 
                  : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Button 
          asChild
          className="shadow-sm transition-all hover:shadow-md"
        >
          <Link 
            href="https://calendar.app.google/wB1omY677WmGHPtX9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whitespace-nowrap"
          >
            Book a Free Consultation
          </Link>
        </Button>
      </div>
    </header>
  )
} 