import { TrendingUp, Users, ShoppingCart, MessageSquare } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="h2 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: ShoppingCart, label: 'Total Sales', value: '$12,420', trend: '+12.5%' },
          { icon: Users, label: 'Total Users', value: '2,543', trend: '+8.2%' },
          { icon: MessageSquare, label: 'Support Tickets', value: '42', trend: '-2.1%' },
          { icon: TrendingUp, label: 'Growth', value: '23.5%', trend: '+4.3%' },
        ].map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="card">
              <div className="flex items-center justify-between mb-4">
                <Icon size={24} className="text-pulse-400" />
                <span className="text-green-400 text-sm font-semibold">{stat.trend}</span>
              </div>
              <p className="text-neutral-400 text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <div key={order} className="flex items-center justify-between pb-4 border-b border-neutral-800 last:border-0">
                <div>
                  <p className="font-semibold">Order #{1000 + order}</p>
                  <p className="text-neutral-400 text-sm">2 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$99.99</p>
                  <p className="text-green-400 text-sm">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary justify-center">New Product</button>
            <button className="w-full btn-secondary justify-center">Create Blog</button>
            <button className="w-full btn-secondary justify-center">View Tickets</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard