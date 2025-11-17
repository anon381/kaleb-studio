import Link from 'next/link'
import { Mail, Linkedin, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Kaleb Studio</h3>
            <p className="text-foreground/60 text-sm">Premium audio production and engineering services.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portfolio" className="text-foreground/60 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/services" className="text-foreground/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Mixing</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Mastering</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-primary transition-colors">Production</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">&copy; 2025 Kaleb Studio. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-foreground/50 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
