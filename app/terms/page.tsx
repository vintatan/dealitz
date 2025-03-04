import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="container max-w-4xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-6">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Agreement to Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Description of Services</h2>
            <p>Dealitz provides brand deal negotiation and consulting services for content creators. Our services include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Brand partnership negotiation</li>
              <li>Rate optimization</li>
              <li>Contract review</li>
              <li>Strategy consultation</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Fees and Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service fees are as listed on our website</li>
              <li>Payment is required before services commence</li>
              <li>Refunds are subject to our guarantee terms</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Money-Back Guarantee</h2>
            <p>Our money-back guarantee is subject to the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full cooperation with our process</li>
              <li>Completion of recommended actions</li>
              <li>Claims must be made within the specified timeframe</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Client Responsibilities</h2>
            <p>Clients agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain professional communication</li>
              <li>Respond to requests in a timely manner</li>
              <li>Follow recommended strategies</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Limitation of Liability</h2>
            <p>We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Actions of third-party brands</li>
              <li>Changes in market conditions</li>
              <li>Platform policy changes</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Confidentiality</h2>
            <p>We maintain strict confidentiality of client information and negotiations. Clients agree not to disclose our proprietary strategies.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Termination</h2>
            <p>Either party may terminate services with written notice. Refunds will be processed according to our refund policy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">9. Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p>Email: legal@dealitz.com</p>
          </section>
        </div>
      </div>
    </main>
  )
} 