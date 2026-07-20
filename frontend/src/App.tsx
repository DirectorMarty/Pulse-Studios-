import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer'
import Home from '@pages/Home'
import Dashboard from '@pages/Dashboard'
import Shop from '@pages/Shop'
import AIAssistant from '@pages/AIAssistant'
import Subscriptions from '@pages/Subscriptions'
import Support from '@pages/Support'
import Blogs from '@pages/Blogs'
import Account from '@pages/Account'
import Admin from '@pages/Admin'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/ai" element={<AIAssistant />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App