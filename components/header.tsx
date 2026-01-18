"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getCurrentUser, logout, type User as UserType } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const [currentUser, setCurrentUser] = useState<UserType | null>(null)
  const router = useRouter()

  useEffect(() => {
    setCurrentUser(getCurrentUser())
  }, [])

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
    router.push("/")
  }

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#444545] text-white text-center py-2 px-4 text-sm">
        <Link href="/gifts" className="ml-2 underline font-semibold">
          All gifts
        </Link>
        {" | "}
        <Link href="/shipping" className="underline">
          Shipping cut-off dates
        </Link>
      </div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-[#FFD700]">
                Rawaha
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

