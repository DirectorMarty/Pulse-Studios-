import { Calendar, User } from 'lucide-react'

const Blogs = () => {
  const blogs = [
    { id: 1, title: 'Getting Started', excerpt: 'Learn how to set up your account', date: '2024-01-15', author: 'Team' },
    { id: 2, title: 'AI Tips & Tricks', excerpt: 'Maximize AI features', date: '2024-01-14', author: 'Alex' },
    { id: 3, title: 'Discord Integration', excerpt: 'Discord setup guide', date: '2024-01-13', author: 'Jordan' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="h2 mb-4">Blog</h1>
        <p className="text-neutral-400">Insights and tutorials</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="card group cursor-pointer">
            <div className="w-full h-40 bg-gradient-to-br from-pulse-600/20 to-neon-cyan/20 rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-neutral-400 text-sm mb-4">{blog.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {new Date(blog.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                {blog.author}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blogs