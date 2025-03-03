import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Deal</span>itz
          </Link>
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-foreground/60 hover:text-foreground">
              Home
            </Link>
            <Link href="/about" className="text-foreground/60 hover:text-foreground">
              About
            </Link>
            <Link href="/testimonials" className="text-foreground/60 hover:text-foreground">
              Testimonials
            </Link>
            <Link href="/contact" className="text-foreground/60 hover:text-foreground">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Ready to elevate your brand partnerships? Get in touch with our team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to schedule a free consultation or inquire about our services.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">contact@dealitz.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+65 8123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h3 className="font-medium">Office</h3>
                      <p className="text-sm text-muted-foreground">
                        One Raffles Place
                        <br />
                        Singapore 048616
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Book a Free Consultation</CardTitle>
                  <CardDescription>Tell us about your content and current brand partnerships.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="platform">Primary Platform</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="tiktok">TikTok</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="twitch">Twitch</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="followers">Follower Count</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your follower range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under10k">Under 10K</SelectItem>
                          <SelectItem value="10k-50k">10K - 50K</SelectItem>
                          <SelectItem value="50k-100k">50K - 100K</SelectItem>
                          <SelectItem value="100k-500k">100K - 500K</SelectItem>
                          <SelectItem value="500k-1m">500K - 1M</SelectItem>
                          <SelectItem value="over1m">Over 1M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your content and current brand partnerships"
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Common questions about our consultation services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How soon can I expect results?</h3>
                <p className="text-muted-foreground">
                  Most clients see improved brand deal offers within 30-60 days of working with us, depending on your
                  content niche and current opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What if I&apos;m not satisfied with the results?</h3>
                <p className="text-muted-foreground">
                  We offer a satisfaction guarantee. If we don&apos;t achieve the promised rate increase, we&apos;ll continue
                  working with you at no additional cost until we do.
                </p>
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

