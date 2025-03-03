import Link from "next/link"
import Image from "next/image"
import { Award, BarChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Deal</span>itz
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/louise-leong.jpeg"
                  alt="Louise Leong, Founder & Lead Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Founder</h2>
                <h3 className="text-xl font-semibold">Louise Leong</h3>
                <p className="text-muted-foreground">
                  Strategic marketing and business leader with a proven track record of driving growth, digital
                  transformation, and high-impact partnerships across APAC. Adept at brand strategy, consumer insights,
                  and data-driven decision-making, I specialize in scaling businesses in Tech, Beauty, and FMCG through
                  omnichannel marketing and innovative go-to-market strategies. With experience leading regional client
                  and agency partnerships, I have successfully connected content creators / influencers and brands in
                  SEA&apos;s Health & Beauty category, and led digital commerce innovations featured in Forbes Asia and Meta
                  global case studies.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://www.linkedin.com/in/louise-leong/" target="_blank" rel="noopener noreferrer">
                      View LinkedIn Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We combine industry expertise, data-driven insights, and strategic negotiation to maximize your brand
                  partnership value.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <BarChart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Valuation</h3>
                <p className="text-muted-foreground">
                  We analyze your audience demographics, engagement metrics, and industry benchmarks to determine your
                  true market value.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  We identify and connect you with brands that align with your values and audience, creating authentic
                  partnerships.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert Negotiation</h3>
                <p className="text-muted-foreground">
                  Our team of experienced negotiators secure the best possible terms, rates, and conditions for your
                  brand partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Major Brand Partnerships</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Louise has built strategic partnerships with leading global brands
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">L&apos;Oréal</p>
                <p className="text-sm text-muted-foreground">Beauty & Cosmetics</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">SK-II</p>
                <p className="text-sm text-muted-foreground">Luxury Skincare</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Samsung</p>
                <p className="text-sm text-muted-foreground">Consumer Electronics</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Nike</p>
                <p className="text-sm text-muted-foreground">Sportswear & Apparel</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Sephora</p>
                <p className="text-sm text-muted-foreground">Beauty Retail</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Adidas</p>
                <p className="text-sm text-muted-foreground">Sports & Lifestyle</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Shopee</p>
                <p className="text-sm text-muted-foreground">E-commerce</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg h-32">
                <p className="font-semibold text-xl mb-2">Lazada</p>
                <p className="text-sm text-muted-foreground">E-commerce</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Maximize Your Brand Deal Value?
            </h2>
            <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/90 md:text-xl">
              Book a free consultation to discover how we can help you increase your brand deal rates.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Your Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="text-primary">Deal</span>itz
              </Link>
              <p className="text-sm text-muted-foreground">
                Expert brand deal negotiation services for content creators of all sizes.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Emerging Creator
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Established Creator
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Influencer Elite
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
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
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dealitz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

