// Authentication utilities for role-based access control

export type UserRole = "admin" | "user"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  createdAt: string
}

// Mock user database (in production, this would be a real database)
const users: User[] = [
  {
    id: "1",
    email: "admin@rawaha.com",
    name: "Admin User",
    role: "admin",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    email: "user@example.com",
    name: "John Doe",
    role: "user",
    avatar: "/placeholder.svg?height=40&width=40",
    createdAt: "2024-01-15",
  },
]

// Simulate authentication
export function authenticateUser(email: string, password: string): User | null {
  const user = users.find((u) => u.email === email)
  // In production, verify password hash
  if (user && password === "password") {
    return user
  }
  return null
}

export function getUserById(id: string): User | null {
  return users.find((u) => u.id === id) || null
}

export function isAdmin(user: User | null): boolean {
  return user?.role === "admin"
}

// Mock current user (in production, this would use sessions/JWT)
let currentUser: User | null = null

export function getCurrentUser(): User | null {
  return currentUser
}

export function setCurrentUser(user: User | null) {
  currentUser = user
}

export function logout() {
  currentUser = null
}
