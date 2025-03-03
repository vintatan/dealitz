import Link from 'next/link'
import { XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentError({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <main className="container max-w-4xl py-12">
      <div className="text-center space-y-6">
        <XCircle className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="text-3xl font-bold">Payment Failed</h1>
        <p className="text-xl text-muted-foreground">
          {searchParams.message || 'An error occurred during payment processing.'}
        </p>
        <div className="space-x-4">
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 