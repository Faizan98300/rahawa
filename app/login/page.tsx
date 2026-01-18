"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { authenticateUser, setCurrentUser } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const user = authenticateUser(email, password)

    if (user) {
      setCurrentUser(user)

      // Redirect based on user role
      if (user.role === "admin") {
        router.push("/admin")
      } else {
        router.push("/account")
      }
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2 text-center">{isSignUp ? "Create Account" : "Sign In"}</h1>
            <p className="text-gray-600 text-center mb-6">
              {isSignUp ? "Join Rawaha to start creating" : "Welcome back! Please sign in to continue"}
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="mt-1" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="mt-1" required />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  className="mt-1"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {isSignUp && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" className="mt-1" required />
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="cursor-pointer text-sm">
                      Remember me
                    </Label>
                  </div>
                  <Link href="/forgot-password" className="text-sm text-[#0066cc] hover:underline">
                    Forgot password?
                  </Link>
                </div>
              )}

              {isSignUp && (
                <div className="flex items-start gap-2">
                  <Checkbox id="terms" required className="mt-1" />
                  <Label htmlFor="terms" className="cursor-pointer text-sm">
                    I agree to Rawaha's{" "}
                    <Link href="/terms" className="text-[#0066cc] underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#0066cc] underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>
              )}

              <Button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3] py-6">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="bg-transparent">
                Google
              </Button>
              <Button variant="outline" className="bg-transparent">
                Facebook
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#0066cc] font-semibold hover:underline"
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </p>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
