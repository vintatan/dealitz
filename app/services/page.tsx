import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
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
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium text-primary">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Tailored packages to help content creators of all sizes maximize their brand partnership value
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Emerging Creator</CardTitle>
                  <CardDescription>For creators with 10K-50K followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-4">$97</div>
                  <p className="text-sm text-muted-foreground">
                    Money-back guarantee if we don&apos;t secure an additional $1,000 in brand deals
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Brand deal rate assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Negotiation strategy session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Contract review</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>30-day email support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Guaranteed 20% rate increase</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                  <CardTitle>Established Creator</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    For creators with 50K-500K followers
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-4">$497</div>
                  <p className="text-sm text-muted-foreground">
                    Money-back guarantee if we don&apos;t secure an additional $5,000 in brand deals
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Everything in Emerging Creator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct negotiation with brands</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Brand partnership strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>60-day priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Guaranteed 30% rate increase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quarterly strategy sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Influencer Elite</CardTitle>
                  <CardDescription>For creators with 500K+ followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-4">$997</div>
                  <p className="text-sm text-muted-foreground">
                    Money-back guarantee if we don&apos;t secure an additional $10,000 in brand deals
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Everything in Established Creator</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Exclusive brand introductions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Long-term partnership strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Guaranteed 50% rate increase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Multi-platform strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Monthly strategy sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  How we help you maximize your brand partnership value
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold">Assessment</h3>
                <p className="text-muted-foreground">
                  We analyze your content, audience demographics, engagement metrics, and current brand partnerships.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Strategy</h3>
                <p className="text-muted-foreground">
                  We develop a customized negotiation strategy based on your unique value proposition and target brands.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Negotiation</h3>
                <p className="text-muted-foreground">
                  Our expert team negotiates with brands on your behalf to secure the best possible terms and rates.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold">Growth</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and strategy to help you build long-term, profitable brand partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">Common questions about our services</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do you guarantee rate increases?</h3>
                <p className="text-muted-foreground">
                  Our guarantee is based on our proven track record and industry expertise. If we don't achieve the
                  guaranteed increase, we'll continue working with you at no additional cost until we do.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you work with creators in all niches?</h3>
                <p className="text-muted-foreground">
                  Yes, we work with creators across all content categories including beauty, fashion, tech, gaming,
                  fitness, lifestyle, food, travel, and more.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long does the process take?</h3>
                <p className="text-muted-foreground">
                  Typically, we can secure improved brand deals within 30-60 days of starting our work together,
                  depending on your package and current opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What if I have fewer than 10K followers?</h3>
                <p className="text-muted-foreground">
                  We offer custom solutions for micro-influencers with highly engaged audiences. Contact us for a
                  personalized consultation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you help with contract negotiations?</h3>
                <p className="text-muted-foreground">
                  Yes, contract review and negotiation is a core part of our service. We ensure you get favorable terms
                  beyond just the payment amount.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What platforms do you specialize in?</h3>
                <p className="text-muted-foreground">
                  We work with creators on all major platforms including Instagram, TikTok, YouTube, Twitch, and
                  emerging platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Brands We Work With</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We have established relationships with top brands across industries
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">L'Oréal</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">SK-II</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Samsung</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Nike</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Sephora</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Adidas</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Shopee</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Lazada</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Estée Lauder</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Unilever</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">P&G</p>
              </div>
              <div className="flex items-center justify-center p-4 bg-background rounded-lg h-24 shadow-sm">
                <p className="font-semibold text-lg">Shiseido</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Elevate Your Brand Partnerships?
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

