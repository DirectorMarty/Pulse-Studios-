import { Plus, MessageSquare } from 'lucide-react'

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="h2">Support</h1>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={18} />
          Create Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Your Tickets</h2>
            <div className="space-y-3">
              {[
                { id: '001', subject: 'Account verification', status: 'open', priority: 'high' },
                { id: '002', subject: 'Product not delivered', status: 'in-progress', priority: 'medium' },
                { id: '003', subject: 'Refund request', status: 'resolved', priority: 'low' },
              ].map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-4 border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-4 flex-1">
                    <MessageSquare size={20} className="text-pulse-400" />
                    <div>
                      <p className="font-semibold">{ticket.subject}</p>
                      <p className="text-neutral-400 text-sm">#{ticket.id}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    ticket.status === 'open' ? 'bg-red-500/20 text-red-400' :
                    ticket.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {ticket.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card h-fit">
          <h2 className="text-lg font-semibold mb-4">Help</h2>
          <div className="space-y-3">
            <a href="#" className="block p-3 border border-neutral-800 rounded-lg hover:border-neutral-700">
              <p className="font-semibold text-sm">FAQ</p>
            </a>
            <a href="#" className="block p-3 border border-neutral-800 rounded-lg hover:border-neutral-700">
              <p className="font-semibold text-sm">Documentation</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support