import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { service: string; amount: string }
}) {
  const { service, amount } = searchParams

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-center space-y-6">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p className="text-xl text-muted-foreground">
          Thank you for purchasing {service} for{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(Number(amount))}
        </p>
        <p className="text-muted-foreground">
          You will receive a confirmation email shortly with next steps.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  )
} 