import { ShoppingCart, Search } from 'lucide-react'
import { useState } from 'react'

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    { id: 1, name: 'Premium Skin Pack', price: 9.99, category: 'cosmetics', image: '🎨' },
    { id: 2, name: 'Early Access Pass', price: 19.99, category: 'access', image: '🎟️' },
    { id: 3, name: 'Supporter Badge', price: 4.99, category: 'badges', image: '🏅' },
    { id: 4, name: 'Lifetime Membership', price: 99.99, category: 'subscription', image: '👑' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="h2 mb-4">Shop</h1>
        <p className="text-neutral-400">Discover our exclusive digital items</p>
      </div>

      <div className="flex gap-4 mb-8 flex-wrap">
        <div className="flex-1 min-w-xs relative">
          <Search size={20} className="absolute left-3 top-3 text-neutral-500" />
          <input type="text" placeholder="Search products..." className="input pl-10" />
        </div>
      </div>

      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {['All', 'Cosmetics', 'Access', 'Badges'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-pulse-600 text-white'
                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card group cursor-pointer">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{product.image}</div>
            <h3 className="font-semibold mb-2">{product.name}</h3>
            <p className="text-neutral-400 text-sm mb-4">Premium item</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">${product.price}</span>
              <button className="bg-pulse-600 hover:bg-pulse-700 p-2 rounded-lg transition-colors">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop