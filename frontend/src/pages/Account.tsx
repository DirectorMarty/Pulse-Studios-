import { Settings, Shield } from 'lucide-react'
import { useState } from 'react'

const Account = () => {
  const [tab, setTab] = useState('profile')

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="h2 mb-8">Account Settings</h1>

      <div className="flex gap-6 md:gap-12">
        <div className="hidden md:flex flex-col gap-2 w-48">
          {[
            { id: 'profile', label: 'Profile', icon: Settings },
            { id: 'security', label: 'Security', icon: Shield },
          ].map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  tab === item.id
                    ? 'bg-pulse-600 text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="flex-1">
          {tab === 'profile' && (
            <div className="card space-y-6">
              <h2 className="text-lg font-semibold">Profile Info</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input type="text" placeholder="Your username" className="input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" placeholder="your@email.com" className="input" />
              </div>
              <button className="btn-primary">Save</button>
            </div>
          )}

          {tab === 'security' && (
            <div className="card space-y-6">
              <h2 className="text-lg font-semibold">Security</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Current Password</label>
                <input type="password" placeholder="••••••••" className="input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input type="password" placeholder="••••••••" className="input" />
              </div>
              <button className="btn-primary">Update</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Account