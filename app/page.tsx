'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Parallax } from '@/components/parallax'

export default function Home() {
  const featured = [
    {
      title: 'Ambient Horizon',
      artist: 'Luna Wave',
      type: 'Mix',
      image: '/professional-audio-waveform-visualization.jpg',
    },
    {
      title: 'Neon Dreams',
      artist: 'Synth Collective',
      type: 'Master',
      image: '/music-production-studio-setup.jpg',
    },
    {
      title: 'Electric Soul',
      artist: 'The Groove Lab',
      type: 'Production',
      image: '/audio-mixing-console.png',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
                  Your Sound, Elevated
                </h1>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-lg text-pretty">
                  Professional mixing, mastering, and production services. Transform your music into something extraordinary.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      Explore Services
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get in Touch
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            <Parallax speed={0.3}>
              <div className="relative">
                <img
                  src="/professional-music-production-studio-hero-image.jpg"
                  alt="Studio setup"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">Featured Works</h2>
            <p className="text-foreground/60 mb-12 max-w-2xl">
              Explore recent projects showcasing our mixing, mastering, and production expertise.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((track, idx) => (
              <ScrollAnimation key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                <Card className="group overflow-hidden hover:border-primary transition-colors cursor-pointer">
                  <div className="relative overflow-hidden bg-muted h-64">
                    <img
                      src={track.image || "/placeholder.svg"}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <Play className="text-primary fill-primary opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-3">
                      {track.type}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{track.title}</h3>
                    <p className="text-foreground/60 text-sm">{track.artist}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                View Full Portfolio
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Our Services</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Mixing', 'Mastering', 'Composition', 'Beat Production'].map((service, idx) => (
              <ScrollAnimation key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                <Card className="p-6 hover:border-primary hover:bg-secondary/50 transition-all">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service}</h3>
                  <p className="text-foreground/60 text-sm">Premium {service.toLowerCase()} services tailored to your needs.</p>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Ready to Create Something Amazing?</h2>
            <p className="text-lg text-foreground/70 mb-8 text-pretty">
              Let's collaborate on your next project. Reach out today to discuss how we can bring your vision to life.
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2">
                Start Your Project
                <ArrowRight size={18} />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
