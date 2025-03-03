import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Deal</span>itz
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">Services</Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-6">
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact information</li>
                    <li>Social media handles and follower counts</li>
                    <li>Content creation metrics and analytics</li>
                    <li>Brand partnership history</li>
                    <li>Payment information</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide our services</li>
                    <li>Process your payments</li>
                    <li>Communicate with you about our services</li>
                    <li>Negotiate with brands on your behalf</li>
                    <li>Improve our services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Brand partners (with your consent)</li>
                    <li>Service providers who assist in our operations</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">4. Data Security</h2>
                  <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">5. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </section>

                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold">6. Contact Us</h2>
                  <p>If you have questions about this Privacy Policy, please contact us at:</p>
                  <p>Email: privacy@dealitz.com</p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 