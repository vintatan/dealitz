import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex-1">
          <div className="font-bold text-lg">
            <span className="text-primary">Dealitz</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Empowering creators to maximize their brand deal value
          </p>
        </div>
        <div className="flex-1">
          <div className="font-medium mb-2">Links</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="font-medium mb-2">Legal</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="font-medium mb-2">Get Started</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="https://calendar.app.google/wB1omY677WmGHPtX9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Book a Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex py-6 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Dealitz. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
} 