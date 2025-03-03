import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { amount, service } = body

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects amounts in cents
      currency: 'usd',
      metadata: {
        service
      }
    })

    return NextResponse.json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error creating payment intent' }, { status: 500 })
  }
} 