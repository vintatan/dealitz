'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PaymentForm from '@/components/ui/payment-form'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

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
  const [clientSecret, setClientSecret] = useState<string>("")

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${window.location.origin}/api/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        amount: Number(price),
        service 
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [price, service])

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

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  }

  if (!clientSecret) {
    return (
      <main className="container max-w-4xl py-12">
        <div>Loading payment details...</div>
      </main>
    )
  }

  return (
    <main className="container max-w-4xl py-12">
      <div className="flex items-center space-x-4 mb-8">
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{selectedService.name}</CardTitle>
          <CardDescription>{selectedService.description}</CardDescription>
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
            <Elements stripe={stripePromise} options={options}>
              <PaymentForm amount={Number(price)} service={service} />
            </Elements>
          </div>
        </CardContent>
      </Card>
    </main>
  )
} 