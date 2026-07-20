import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-black mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pulse-600 rounded-lg" />
              <span className="text-lg font-bold">Pulse</span>
            </div>
            <p className="text-neutral-400 text-sm">Built with intention. Crafted with care.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
              <li><Link to="/ai" className="hover:text-white">AI</Link></li>
              <li><Link to="/subscriptions" className="hover:text-white">Subscriptions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><Link to="/blogs" className="hover:text-white">Blog</Link></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Refund</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8">
          <p className="text-neutral-400 text-sm">© {year} Pulse Studios™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer