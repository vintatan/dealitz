import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 text-center">
          <div className="space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Payment Successful!
            </h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. We&apos;ll be in touch shortly to begin our work together.
            </p>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
} 