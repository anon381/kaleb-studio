'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Play } from 'lucide-react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const works = [
    { title: 'Ambient Horizon', artist: 'Luna Wave', genre: 'Ambient', year: 2024, type: 'Mix', image: '/ambient-music-visualization.png' },
    { title: 'Neon Dreams', artist: 'Synth Collective', genre: 'Electronic', year: 2024, type: 'Master', image: '/electronic-music-production.png' },
    { title: 'Electric Soul', artist: 'The Groove Lab', genre: 'R&B', year: 2024, type: 'Production', image: '/rnb-music-studio.jpg' },
    { title: 'Jazz Nights', artist: 'Blue Note Collective', genre: 'Jazz', year: 2023, type: 'Mix', image: '/jazz-music-recording.jpg' },
    { title: 'Hip Hop Waves', artist: 'Beat Makers Inc', genre: 'Hip Hop', year: 2023, type: 'Master', image: '/hip-hop-production-beats.jpg' },
    { title: 'Pop Sensation', artist: 'Chart Toppers', genre: 'Pop', year: 2023, type: 'Production', image: '/pop-music-recording.jpg' },
    { title: 'Rock Revival', artist: 'Stone Era', genre: 'Rock', year: 2024, type: 'Mix', image: '/rock-concert.png' },
    { title: 'Soul Station', artist: 'Smooth Vibes', genre: 'Soul', year: 2023, type: 'Master', image: '/soul-music-vinyl-record.jpg' },
  ]

  const filters = ['all', 'Mix', 'Master', 'Production']
  const genres = ['all', 'Ambient', 'Electronic', 'R&B', 'Jazz', 'Hip Hop', 'Pop', 'Rock', 'Soul']
  const years = ['all', 2024, 2023]

  const filtered = works.filter(work => {
    const typeMatch = activeFilter === 'all' || work.type === activeFilter
    return typeMatch
  })

  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">Portfolio</h1>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl text-pretty">
          Explore our collection of mixing, mastering, and production work across various genres and years.
        </p>

        {/* Filters */}
        <div className="mb-12 space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground/70 mb-3">Type</h3>
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-foreground/70 hover:text-foreground border border-border'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((work, idx) => (
            <Card key={idx} className="group overflow-hidden hover:border-primary transition-colors cursor-pointer">
              <div className="relative overflow-hidden bg-muted h-64">
                <img
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <Play className="text-primary fill-primary opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 mb-3">
                  <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded">
                    {work.type}
                  </span>
                  <span className="inline-block px-2 py-1 bg-muted text-foreground/70 text-xs rounded">
                    {work.year}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm line-clamp-2">{work.title}</h3>
                <p className="text-foreground/60 text-xs">{work.artist}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
