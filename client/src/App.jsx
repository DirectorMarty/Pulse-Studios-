import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header>
        <h1>🎮 Pulse Studios™</h1>
        <p>Shop • Roblox • Discord • AI</p>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to Pulse Studios</h2>
          <p>Buy items and get them directly in your Roblox game or Discord server!</p>
        </section>
        <section className="features">
          <div className="feature">
            <h3>🛍️ Shop</h3>
            <p>Browse and purchase exclusive items</p>
          </div>
          <div className="feature">
            <h3>🎮 Roblox Integration</h3>
            <p>Items delivered directly to your Roblox game</p>
          </div>
          <div className="feature">
            <h3>💬 Discord Integration</h3>
            <p>Get rewards in your Discord server</p>
          </div>
          <div className="feature">
            <h3>🤖 AI Assistant</h3>
            <p>24/7 support and recommendations</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
