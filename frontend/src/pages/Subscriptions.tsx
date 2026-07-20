import { Check } from 'lucide-react'

const Subscriptions = () => {
  const plans = [
    { name: 'Free', price: 0, features: ['Access to shop', 'Basic support', 'Limited AI usage'] },
    { name: 'Pro', price: 9.99, features: ['Everything in Free', 'Priority support', 'Unlimited AI', 'Discord perks'], highlighted: true },
    { name: 'Enterprise', price: 49.99, features: ['Everything in Pro', 'Custom integration', 'Dedicated support', 'Advanced analytics'] },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="h2 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-neutral-400 max-w-2xl mx-auto">Choose the plan that fits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`card transition-transform hover:scale-105 ${
              plan.highlighted ? 'border-pulse-500 border-2 md:scale-105' : ''
            }`}
          >
            {plan.highlighted && <div className="text-xs font-semibold text-pulse-400 mb-2">MOST POPULAR</div>}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-neutral-400 text-sm">/month</span>
            </div>
            <button className={`w-full py-2 rounded-lg font-semibold transition-all mb-8 ${
              plan.highlighted
                ? 'bg-pulse-600 hover:bg-pulse-700 text-white'
                : 'bg-neutral-800 hover:bg-neutral-700 text-white'
            }`}>
              {plan.price === 0 ? 'Current Plan' : 'Subscribe'}
            </button>
            <ul className="space-y-3">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subscriptions