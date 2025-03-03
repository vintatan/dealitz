import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PaymentForm } from '@/components/ui/payment-form'

interface ServiceDetail {
  name: string
  description: string
  features: string[]
}

interface ServiceDetails {
  [key: string]: ServiceDetail
}

export default function PaymentPage({
  searchParams,
}: {
  searchParams: { service: string; price: string }
}) {
  const { service, price } = searchParams
  
  const serviceDetails: ServiceDetails = {
    'emerging': {
      name: 'Emerging Creator',
      description: 'For creators with 10K-50K followers',
      features: [
        'Brand deal value assessment',
        'Rate card creation',
        'Negotiation strategy session',
        'Contract review',
        'Money-back guarantee if we don\'t secure an additional $1,000 in brand deals'
      ]
    },
    'established': {
      name: 'Established Creator',
      description: 'For creators with 50K-500K followers',
      features: [
        'Everything in Emerging Creator',
        'Personalized outreach strategy',
        'Monthly strategy calls',
        'Money-back guarantee if we don\'t secure an additional $5,000 in brand deals'
      ]
    },
    'elite': {
      name: 'Influencer Elite',
      description: 'For creators with 500K+ followers',
      features: [
        'Everything in Established Creator',
        'Dedicated account manager',
        'Weekly strategy calls',
        'Money-back guarantee if we don\'t secure an additional $10,000 in brand deals'
      ]
    }
  }

  const selectedService = serviceDetails[service]

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
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Complete Your Purchase</h1>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{selectedService.name}</h2>
                  <p className="text-muted-foreground">{selectedService.description}</p>
                </div>
                <div className="text-4xl font-bold">${price}</div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Enter your payment information securely</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Package Includes:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <PaymentForm 
                      amount={Number(price)} 
                      service={service} 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 