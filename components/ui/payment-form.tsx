'use client'

import { useState, useEffect } from 'react'
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
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [clientSecret, setClientSecret] = useState("")

  useEffect(() => {
    fetch(`${window.location.origin}/api/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, service }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret)
      })
      .catch((error) => {
        console.error('Error:', error)
        setMessage('Failed to initialize payment. Please try again.')
      })
  }, [amount, service])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements || !clientSecret) {
      return
    }

    setIsLoading(true)

    try {
      // First, trigger form validation and collection
      const { error: submitError } = await elements.submit()
      if (submitError) {
        throw new Error(submitError.message)
      }

      // If the form is valid, confirm the payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        clientSecret,
        redirect: 'if_required',
      })

      if (error) {
        throw new Error(error.message)
      }

      if (paymentIntent.status === 'succeeded') {
        setMessage("")
        router.push(`/payment/success?service=${encodeURIComponent(service)}&amount=${amount}`)
      }
    } catch (error) {
      if (error instanceof Error) {
        handleError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleError = (error: Error) => {
    setIsLoading(false)
    setMessage(error.message ?? "An unexpected error occurred.")
    if (error.message.includes('authentication') || error.message.includes('invalid')) {
      router.push(`/payment/error?message=${encodeURIComponent(error.message)}`)
    }
  }

  if (!clientSecret) {
    return <div>Loading payment form...</div>
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <PaymentElement />
      
      {message && (
        <Alert variant="destructive">
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isLoading || !stripe || !elements}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            Processing... <span className="loading loading-spinner loading-sm" />
          </span>
        ) : (
          `Pay ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(amount)}`
        )}
      </Button>
    </form>
  )
}

export default CheckoutForm

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