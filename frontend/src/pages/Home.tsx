import { ArrowRight, Zap, MessageSquare, Store, Users } from 'lucide-react'

const Home = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="h1 mb-6 bg-gradient-to-r from-pulse-400 to-neon-cyan bg-clip-text text-transparent">
            Pulse Studios™
          </h1>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Built by real people, real work, real passion. Hand-made, thought out, and crafted with intention.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">
              Get Started <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="h2 text-center mb-16">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Store, title: 'Smart Shop', desc: 'Browse and purchase digital items' },
            { icon: MessageSquare, title: 'AI Assistant', desc: '24/7 intelligent support' },
            { icon: Users, title: 'Discord Ready', desc: 'Seamless Discord integration' },
            { icon: Zap, title: 'Fast & Reliable', desc: 'Built for performance' },
          ].map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="card group">
                <Icon size={32} className="text-pulse-400 mb-4 group-hover:text-neon-cyan transition-colors" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card bg-gradient-to-r from-pulse-600/20 to-neon-cyan/20 border border-pulse-500/30 text-center py-16">
          <h2 className="h2 mb-4">Ready to get started?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Join thousands experiencing the power of Pulse Studios™
          </p>
          <button className="btn-primary">Start Free Trial</button>
        </div>
      </section>
    </div>
  )
}

export default Home