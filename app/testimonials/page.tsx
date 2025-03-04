import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
  return (
    <main className="container max-w-5xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Linkedin Recommendations</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover how Louise has made her team, brands and creators successful.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise&apos;s unique ability to integrate marketing/business strategy, and leadership savvy makes her an exceptional business partner. Her leadership has resulted in significant and sustainable impact.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Rong Chen-Pike</strong>
                Group Brand Media Manager, APAC at Google
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;I had the pleasure of recruiting and working with Louise in her role of regional client partner at Meta. Her consistent approach in bringing a positive influence to the team was remarkable.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Liam McCarten</strong>
                VP APAC Stackadapt | Advisor | Investor
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise is a mentor I look up to and can turn to for advice. Her ability to connect people and ideas is unmatched, and she has helped me grow my network.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Meg Wardrop</strong>
                Senior Marketing Professional | Brand Manager @ L&apos;Oreal
              </footer>
            </blockquote>
          </CardContent>
        </Card>

        <Card className="bg-card hover:shadow-lg transition-shadow">
          <CardContent className="p-8 md:p-10">
            <blockquote className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed">
                &quot;Louise&apos;s ability to drive business and nurturing talents at the same time is impressive. Her patience and support have been invaluable to my growth.&quot;
              </p>
              <footer className="text-base text-muted-foreground pt-4">
                <strong className="block text-foreground">Ee Laine</strong>
                Founder of Sp4rkS | Driving Growth with SIMPLEd Methodology
              </footer>
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <Button size="lg" variant="default" asChild>
          <Link href="https://www.linkedin.com/in/louise-leong/details/recommendations/?detailScreenTabIndex=0">
            See More Recommendations
          </Link>
        </Button>
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
