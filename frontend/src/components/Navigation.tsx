import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-800 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-pulse-600 rounded-lg group-hover:bg-pulse-500 transition-colors" />
            <span className="text-xl font-bold">Pulse</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="hover:text-pulse-400 transition-colors">Dashboard</Link>
            <Link to="/shop" className="hover:text-pulse-400 transition-colors">Shop</Link>
            <Link to="/ai" className="hover:text-pulse-400 transition-colors">AI</Link>
            <Link to="/blogs" className="hover:text-pulse-400 transition-colors">Blog</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-neutral-900 rounded-lg transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 hover:bg-neutral-900 rounded-lg transition-colors">
              <User size={20} />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-neutral-900 rounded-lg"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-neutral-800 mt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/dashboard" className="px-4 py-2 hover:bg-neutral-900 rounded-lg">Dashboard</Link>
              <Link to="/shop" className="px-4 py-2 hover:bg-neutral-900 rounded-lg">Shop</Link>
              <Link to="/ai" className="px-4 py-2 hover:bg-neutral-900 rounded-lg">AI</Link>
              <Link to="/blogs" className="px-4 py-2 hover:bg-neutral-900 rounded-lg">Blog</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation