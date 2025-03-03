import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Home() {
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Maximize Your Brand Deal Value
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Expert negotiation services for content creators. We help you secure better deals with top brands like
                  L&apos;Oréal, SK-II, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/services">
                      View Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">Book a Free Consultation</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Content creators in a professional meeting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Tailored packages to match your influence level and growth goals
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Emerging Creator</CardTitle>
                  <CardDescription>For creators with 10K-50K followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-4xl font-bold mb-4">$97</div>
                  <p className="text-sm">Money-back guarantee if we don&apos;t secure an additional $1,000 in brand deals</p>
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
                  <p className="text-sm">Money-back guarantee if we don&apos;t secure an additional $5,000 in brand deals</p>
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
                  <p className="text-sm">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  See how we&apos;ve helped content creators increase their brand deal value
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Sarah J.</CardTitle>
                  <CardDescription>Beauty & Lifestyle Creator, 120K followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    &quot;Working with Dealitz transformed my brand partnerships. They negotiated a deal with L&apos;Oréal that
                    was 3x my previous rate. Their expertise and industry connections are invaluable.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">Rate increase: 200%</CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Michael T.</CardTitle>
                  <CardDescription>Tech Reviewer, 450K followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    &quot;I was undervaluing my content for years. Dealitz helped me secure a 6-figure annual partnership
                    with a major tech brand that I never thought possible.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">Rate increase: 350%</CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Aisha K.</CardTitle>
                  <CardDescription>Fitness Influencer, 75K followers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    &quot;The team at Dealitz knows exactly how to position creators to brands. They helped me land
                    partnerships with premium fitness brands that aligned perfectly with my audience.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">Rate increase: 180%</CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Brands We&apos;ve Worked With</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Louise has negotiated successful partnerships with leading global brands
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-12">
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">L&apos;Oréal</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">SK-II</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">Samsung</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">Nike</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">Sephora</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted rounded-lg h-24">
                <p className="font-semibold text-lg">Adidas</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/louise-leong.jpeg"
                  alt="Louise Leong, Founder & Lead Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Your Consultant</h2>
                <h3 className="text-xl font-semibold">Louise Leong, Founder & Lead Consultant</h3>
                <p className="text-muted-foreground">
                  I&apos;m a strategic marketing and business leader with a proven track record of driving growth, digital
                  transformation, and high-impact partnerships across APAC. I specialize in scaling businesses in Tech,
                  Beauty, and FMCG through omnichannel marketing and innovative go-to-market strategies. My expertise
                  lies in brand strategy, consumer insights, and data-driven decision-making.
                </p>
                <p className="text-muted-foreground">
                  My experience leading regional client and agency partnerships includes doubling FMCG revenue, driving
                  a +56% YoY growth in SEA&apos;s Health & Beauty category, and leading digital commerce innovations featured
                  in Forbes Asia and Meta global case studies.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://www.linkedin.com/in/louise-leong/" target="_blank" rel="noopener noreferrer">
                      View LinkedIn Profile
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
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

