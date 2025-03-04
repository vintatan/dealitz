import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Maximize Your Brand Deal Value
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are on a mission to help content creators maximize their value and build sustainable partnerships with top brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/services">
                      View Our Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link 
                      href="https://calendar.app.google/wB1omY677WmGHPtX9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Free Consultation
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.youtube.com/embed/TAZ5bzxrpZM"
                  title="Dealitz Brand Deal Services"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
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
                      <span>Negotiation strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Personal branding strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Long term partnership strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>30-day email support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?service=emerging&price=97">Get Started</Link>
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
                      <span>Brand partnership strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Networking strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>60-day priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?service=established&price=497">Get Started</Link>
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
                      <span>Elevated partnership strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Access to exclusive events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Revenue diversification strategy</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/payment?service=elite&price=997">Get Started</Link>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Approach</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A proven methodology to maximize your brand partnerships
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
                  Deep analysis of your content, audience demographics, and current brand partnerships
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold">Strategy</h3>
                <p className="text-muted-foreground">
                  Custom negotiation strategy based on your unique value proposition
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold">Negotiation</h3>
                <p className="text-muted-foreground">
                  Expert negotiation with brands to secure the best possible terms
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold">Growth</h3>
                <p className="text-muted-foreground">
                  Ongoing support to build long-term, profitable partnerships
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Your Consultant</h2>
                <div className="space-y-4">
                  <p>
                    As your Creator Value Strategist, I help content creators understand their worth through brand-side insights and strategic positioning guidance. With industry expertise and clear frameworks, I equip creators like you to develop a distinctive personal brand, recognize your unique value proposition, articulate your story effectively, and monetize your influence in today&apos;s evolving digital landscape.
                  </p>
                  <p>
                    As an accomplished marketing strategist and creator economy expert, I&apos;ve built a reputation for elevating influencer partnerships across global markets. My specialty lies in scaling creator businesses within the Tech, Beauty, Retail, and FMCG sectors. I&apos;ve orchestrated powerful creator partnerships with brands that authentically reflect creators&apos; personal values and creative vision.
                  </p>
                  <p>
                    I&apos;ve led partnerships with global brands, regional powerhouses across Asia-Pacific, and beloved domestic companies that resonate with local audiences. My extensive background in brand management and agency leadership allows me to bridge the crucial gap between brands and creators, delivering exceptional results for both brand positioning and creator earnings. My work has been recognized in Forbes Asia and featured in Meta global case studies.
                  </p>
                  <p className="font-bold">
                    Ready to maximize your earning potential and secure better brand deals? Book a strategy call today and let&apos;s elevate your creator business together.
                  </p>
                  <div className="pt-4">
                    <Button asChild size="lg">
                      <Link href="https://calendar.app.google/wB1omY677WmGHPtX9" target="_blank" rel="noopener noreferrer">
                        Book a Free Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <Image
                  src="/louise-leong.jpeg"
                  alt="Louise Leong"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
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
              <Link 
                href="https://calendar.app.google/wB1omY677WmGHPtX9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Your Free Consultation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

