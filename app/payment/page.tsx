import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { PaymentForm } from '@/components/ui/payment-form'

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { service: string; price: string }
}) {
  const { service, price } = searchParams
  
  const serviceDetails = {
    'emerging': {
      name: 'Emerging Creator',
      description: 'For creators with 10K-50K followers',
      guarantee: '$1,000 in brand deals'
    },
    'established': {
      name: 'Established Creator',
      description: 'For creators with 50K-500K followers',
      guarantee: '$5,000 in brand deals'
    },
    'elite': {
      name: 'Influencer Elite',
      description: 'For creators with 500K+ followers',
      guarantee: '$10,000 in brand deals'
    }
  }[service] || serviceDetails.emerging

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Deal</span>itz
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex items-center gap-2 mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/services">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Complete Your Purchase</h1>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{serviceDetails.name}</h2>
                  <p className="text-muted-foreground">{serviceDetails.description}</p>
                  <p className="text-muted-foreground">Money-back guarantee if we don&apos;t secure an additional {serviceDetails.guarantee}</p>
                </div>
                <div className="text-4xl font-bold">${price}</div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Enter your payment information securely</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentForm 
                    amount={parseInt(price)} 
                    service={service} 
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 