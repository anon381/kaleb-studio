import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Mixing',
      description: 'Professional mixing to bring clarity and balance to your tracks.',
      price: '$500',
      features: ['Up to 10 tracks', 'Revision rounds', 'EQ, compression, reverb', 'Stereo enhancement'],
    },
    {
      title: 'Mastering',
      description: 'Final polish and optimization for all platforms.',
      price: '$300',
      features: ['Standard mastering', 'Multi-format delivery', 'Platform optimization', 'Reference listening'],
    },
    {
      title: 'Composition',
      description: 'Original compositions tailored to your vision.',
      price: '$1000',
      features: ['Original composition', 'Arrangements', 'Multiple revisions', 'Full production files'],
    },
    {
      title: 'Beat Production',
      description: 'Custom beats and instrumentals for your project.',
      price: '$400',
      features: ['Custom beat creation', 'Multiple variations', 'Stems included', 'Exclusive licensing'],
    },
  ]

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Services & Pricing</h1>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl text-pretty">
          Professional audio production services tailored to your needs. Custom packages available.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, idx) => (
            <Card key={idx} className="p-8 hover:border-primary transition-all hover:bg-secondary/50 relative">
              <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-foreground/60 mb-6">{service.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{service.price}</span>
                <span className="text-foreground/60 ml-2">per project</span>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block">
                <Button className="w-full gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-secondary rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your project goals and requirements' },
              { step: '2', title: 'Analysis', desc: 'Review audio files and create a production plan' },
              { step: '3', title: 'Production', desc: 'Execute mixing, mastering, or composition' },
              { step: '4', title: 'Delivery', desc: 'Provide final files and revisions as needed' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Custom Packages Available</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto text-pretty">
            Have a unique project? We offer custom packages tailored to your specific needs and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Request Custom Quote
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
