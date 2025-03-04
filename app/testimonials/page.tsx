import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function TestimonialsPage() {
  return (
    <main className="container max-w-5xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Linkedin Testimonials</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how Louis has helped her team, brands and creators
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise became a friend and mentor to me during my time at Meta. She always made time to help me navigate complex situations and provided valuable insights that helped me grow both personally and professionally.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Sarah Chen</strong>
                Product Manager at Meta
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise became a friend and mentor to me during my time at Meta. She always made time to help me navigate complex situations and provided valuable insights that helped me grow both personally and professionally.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Sarah Chen</strong>
                Product Manager at Meta
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise became a friend and mentor to me during my time at Meta. She always made time to help me navigate complex situations and provided valuable insights that helped me grow both personally and professionally.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Sarah Chen</strong>
                Product Manager at Meta
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <br></br>
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Join?
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
  )
}

