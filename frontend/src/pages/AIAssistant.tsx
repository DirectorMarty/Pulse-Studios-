import { Send, Plus, Settings } from 'lucide-react'
import { useState } from 'react'

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: 'Hello! I\'m your AI assistant. How can I help?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, role: 'user', content: input }])
      setInput('')
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, role: 'assistant', content: 'Processing...' }])
      }, 500)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-screen flex flex-col">
      <div className="flex-1 flex gap-6 overflow-hidden">
        <div className="hidden lg:block w-64">
          <div className="card h-full flex flex-col">
            <button className="btn-primary w-full flex items-center justify-center gap-2 mb-4">
              <Plus size={18} />
              New Chat
            </button>
          </div>
        </div>

        <div className="flex-1 card flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-pulse-600 text-white'
                    : 'bg-neutral-800 text-neutral-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="input flex-1"
            />
            <button onClick={handleSend} className="btn-primary">
              <Send size={18} />
            </button>
            <button className="btn-secondary">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAssistant