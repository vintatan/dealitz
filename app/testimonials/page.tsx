import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function TestimonialsPage() {
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
            <Link href="/testimonials" className="text-sm font-medium text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  See how we've helped content creators increase their brand deal value
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Liam McCarten</CardTitle>
                  <CardDescription>VP APAC Stackadapt | Advisor | Investor</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Liam McCarten"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;I had the pleasure of recruiting and working with Louise in her role of regional client partner at
                    Meta. What makes Louise stand out is her commitment to her clients and relationships she build in
                    her role. Her willingness to put clients and agencies at the center of her work was a critical trait
                    in Louise being successful in her role. At a human level Louise was consistent in bringing a
                    positive mindset and being additive to the culture of our team, whether that be leading important
                    initiatives or supporting those who were. Thank you Louise for all you did for me, the team and Meta
                    during our time together!&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 200%</span>
                    <span className="text-muted-foreground">Beauty & Skincare</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Meg Wardrop</CardTitle>
                  <CardDescription>
                    Senior Marketing Professional | Brand Manager @ L&apos;Oreal (YSL Beauty) | Ex-Meta
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Meg Wardrop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;Louise became a friend and mentor to me during my time at Meta. She is a person I look up to and
                    can turn to for honest advice when I need it. Louise has been an invaluable support in helping me
                    find my next opportunity from editing my resume to sharing interview advice and warm intros to those
                    in her network. She is an extremely driven and impressive leader, with an incredible ability to
                    build connection & drive growth for her clients. Louise is very well respected at Meta and has made
                    a huge impact during her time with the business. Those who get to work with Louise are so lucky!&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 350%</span>
                    <span className="text-muted-foreground">Tech & Gadgets</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Ee Laine</CardTitle>
                  <CardDescription>Founder of Sp8rks | Driving Growth with SiMPLE© Methodology</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/placeholder.svg?height=400&width=600" alt="Ee Laine" fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;In short, she is someone you can definitely count on. Her journey to success has been an inspiring
                    one to many and myself. I am especially impressed by the efforts and patience she put in to drive
                    business and nurturing talents at the same time for the organization. If you are looking out to
                    someone to manage and grow your business, I highly recommend her.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 180%</span>
                    <span className="text-muted-foreground">Fitness & Wellness</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>David L.</CardTitle>
                  <CardDescription>Travel Vlogger, 320K followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/placeholder.svg?height=400&width=600" alt="David L." fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;After working with Dealitz, I secured partnerships with luxury hotel chains and travel brands that
                    previously wouldn&apos;t even respond to my inquiries. Louise&apos;s team crafted a compelling pitch that
                    highlighted my unique value proposition. They also negotiated additional perks beyond just payment,
                    like extended stays and experiences for content creation.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 250%</span>
                    <span className="text-muted-foreground">Travel & Lifestyle</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Emma R.</CardTitle>
                  <CardDescription>Fashion Creator, 180K followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/placeholder.svg?height=400&width=600" alt="Emma R." fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;Dealitz helped me transition from one-off sponsored posts to long-term ambassador roles with major
                    fashion brands. Their industry knowledge and connections opened doors I couldn&apos;t on my own. They
                    also helped me diversify my revenue streams by securing licensing deals for my own fashion line.
                    Game changer!&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 220%</span>
                    <span className="text-muted-foreground">Fashion & Style</span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <Star className="h-5 w-5 fill-primary text-primary" />
                  </div>
                  <CardTitle>Jason W.</CardTitle>
                  <CardDescription>Gaming Creator, 550K followers</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image src="/placeholder.svg?height=400&width=600" alt="Jason W." fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground">
                    &quot;As a gaming creator, I was stuck in the cycle of low-paying sponsorships. Dealitz completely
                    changed that by helping me secure partnerships with premium gaming hardware brands and even
                    non-endemic brands looking to reach gamers. Their understanding of both the creator economy and
                    brand objectives is unmatched.&quot;
                  </p>
                </CardContent>
                <CardFooter className="text-sm border-t pt-4 mt-auto">
                  <div className="flex justify-between w-full items-center">
                    <span className="font-medium">Rate increase: 300%</span>
                    <span className="text-muted-foreground">Gaming & Entertainment</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Results by the Numbers</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Our track record of success across different creator categories
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <p className="font-medium">Creators Helped</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <p className="font-medium">Average Rate Increase</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">$15M+</div>
                <p className="font-medium">Additional Creator Revenue</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="font-medium">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to Join Our Success Stories?
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

