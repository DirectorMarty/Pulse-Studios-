import { Plus, Edit, Trash2 } from 'lucide-react'
import { useState } from 'react'

const Admin = () => {
  const [tab, setTab] = useState('products')

  const products = [
    { id: 1, name: 'Premium Skin', price: 9.99, stock: 100 },
    { id: 2, name: 'Early Access', price: 19.99, stock: 50 },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="h2">Admin Panel</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={18} />
          New Item
        </button>
      </div>

      <div className="flex gap-4 mb-8 border-b border-neutral-800">
        {['products', 'blogs', 'users'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 border-b-2 transition-colors ${
              tab === t
                ? 'border-pulse-600 text-pulse-400'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'products' && (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-800">
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Price</th>
                <th className="text-left py-3 px-4 font-semibold">Stock</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-neutral-800 hover:bg-neutral-800/30">
                  <td className="py-3 px-4">{product.name}</td>
                  <td className="py-3 px-4">${product.price}</td>
                  <td className="py-3 px-4">{product.stock}</td>
                  <td className="py-3 px-4 flex gap-2">
                    <button className="p-1 hover:bg-pulse-600/20 rounded">
                      <Edit size={18} />
                    </button>
                    <button className="p-1 hover:bg-red-600/20 rounded">
                      <Trash2 size={18} className="text-red-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Admin