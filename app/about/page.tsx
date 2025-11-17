import { Card } from '@/components/ui/card'

export default function About() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Bio Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">About Kaleb Studio</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed text-pretty">
                Kaleb Studio is a professional audio production facility dedicated to crafting exceptional sound experiences. With over a decade of experience in music production, mixing, and mastering, we've worked with artists across multiple genres to bring their creative visions to life.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed text-pretty">
                Our mission is to provide world-class audio production services that combine technical expertise with creative artistry. Every project is treated with the same level of care and attention, regardless of size or budget.
              </p>
            </div>
            <img
              src="/professional-audio-engineer-in-studio.jpg"
              alt="Studio"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Setup & Gear */}
        <section className="mb-20 bg-secondary rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Studio Setup & Gear</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Hardware</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Neve 8088 Mixing Console</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Studer A827 Tape Machine</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Neumann & Shure Microphones</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Vintage & Modern Outboard Gear</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Software</h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Pro Tools Ultimate</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Logic Pro & Ableton Live</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Industry-Leading Plugins</li>
                <li className="flex items-start gap-3"><span className="text-primary">›</span> Izotope & Waves Suites</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">Experience & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">Projects Completed</p>
            </Card>
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Artists & Producers</p>
            </Card>
            <Card className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-foreground/70">Years of Experience</p>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Notable Achievements</h2>
          <ul className="space-y-4">
            {[
              'Grammy-nominated mixing engineer for experimental music category (2022)',
              'Featured in Pro Sound News as emerging production studio (2021)',
              'Official partner with major record labels for mastering services',
              'Award winner for best independent studio setup (2023)',
              'Technical consultant for audio education programs',
            ].map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1"></div>
                <span className="text-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
