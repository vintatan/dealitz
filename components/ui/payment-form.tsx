'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe'
import { Button } from './button'
import { Alert, AlertDescription } from './alert'

function CheckoutForm({ amount, service }: { amount: number; service: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!stripe || !elements) return

    setLoading(true)
    setError(null)

    try {
      const { error: submitError } = await elements.submit()
      if (submitError) {
        throw new Error(submitError.message)
      }

      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, service }),
      })

      const { clientSecret, error: intentError } = await response.json()
      if (intentError) {
        throw new Error(intentError)
      }

      // Confirm payment
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
      })

      if (confirmError) {
        throw new Error(confirmError.message)
      }

    } catch (err: any) {
      setError(err.message || 'An error occurred during payment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button type="submit" className="w-full" disabled={!stripe || loading}>
        {loading ? 'Processing...' : `Pay $${amount}`}
      </Button>
    </form>
  )
}

export function PaymentForm({ amount, service }: { amount: number; service: string }) {
  const [clientSecret, setClientSecret] = useState<string>('')

  useState(() => {
    // Create PaymentIntent when component mounts
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, service }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  if (!clientSecret) {
    return <div>Loading...</div>
  }

  return (
    <Elements 
      stripe={stripePromise} 
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#0F172A',
          },
        },
      }}
    >
      <CheckoutForm amount={amount} service={service} />
    </Elements>
  )
} 