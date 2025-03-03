'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from './button'
import { Alert, AlertDescription } from './alert'

interface PaymentFormProps {
  amount: number
  service: string
}

export default function PaymentForm({ amount, service }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
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
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success?service=${encodeURIComponent(service)}&amount=${amount}`,
        }
      })

      // Only handle errors here since successful payments will redirect
      if (error) {
        throw new Error(error.message)
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