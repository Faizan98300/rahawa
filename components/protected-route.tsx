"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, type UserRole } from "@/lib/auth"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: UserRole
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter()

  useEffect(() => {
    const user = getCurrentUser()

    if (!user) {
      router.push("/login")
      return
    }

    if (requiredRole && user.role !== requiredRole) {
      router.push("/account")
    }
  }, [router, requiredRole])

  const user = getCurrentUser()

  if (!user || (requiredRole && user.role !== requiredRole)) {
    return null
  }

  return <>{children}</>
}
