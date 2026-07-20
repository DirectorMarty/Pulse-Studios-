export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  createdAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  featured: boolean
  stock: number
}

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}