"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ShoppingCart, User, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
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
      <div className="bg-[#0066cc] text-white text-center py-2 px-4 text-sm">
       
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
          {/* Top Header Row */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold text-[#0066cc]">
                Rawaha
              </Link>
              <div className="hidden lg:flex items-center gap-6">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-[#0066cc]">
                    Business Cards <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/category/business-cards">Standard Business Cards</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/business-cards">Premium Business Cards</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/business-cards">Rounded Corner Cards</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-[#0066cc]">
                    Marketing materials <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/category/flyers">Flyers</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/brochures">Brochures</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/postcards">Postcards</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-[#0066cc]">
                    Clothing & Bags <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/category/tshirts">T-Shirts</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/hoodies">Hoodies</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/bags">Tote Bags</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm hover:text-[#0066cc]">
                    Gifts & Stationery <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/category/mugs">Custom Mugs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/calendars">Calendars</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/category/stationery">Stationery</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/deals" className="text-sm hover:text-[#0066cc] text-red-600 font-semibold">
                  Deals
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 border rounded-md px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search products"
                  className="border-0 focus-visible:ring-0 w-[200px] p-0"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {currentUser && (
                    <>
                      <div className="px-2 py-2 border-b">
                        <p className="font-semibold">{currentUser.name}</p>
                        <p className="text-xs text-gray-500">{currentUser.email}</p>
                        <span className="text-xs bg-[#0066cc] text-white px-2 py-0.5 rounded mt-1 inline-block">
                          {currentUser.role}
                        </span>
                      </div>
                      {currentUser.role === "admin" && (
                        <DropdownMenuItem asChild>
                          <Link href="/admin">Admin Dashboard</Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem asChild>
                        <Link href="/account">My Account</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/account/orders">Orders</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/account/saved-designs">Saved Designs</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>Sign Out</DropdownMenuItem>
                    </>
                  )}
                  {!currentUser && (
                    <DropdownMenuItem asChild>
                      <Link href="/login">Sign In</Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b p-4 space-y-4">
          <Link href="/category/business-cards" className="block py-2 hover:text-[#0066cc]">
            Business Cards
          </Link>
          <Link href="/category/marketing" className="block py-2 hover:text-[#0066cc]">
            Marketing Materials
          </Link>
          <Link href="/category/clothing" className="block py-2 hover:text-[#0066cc]">
            Clothing & Bags
          </Link>
          <Link href="/category/gifts" className="block py-2 hover:text-[#0066cc]">
            Gifts & Stationery
          </Link>
          <Link href="/deals" className="block py-2 text-red-600 font-semibold">
            Deals
          </Link>
        </div>
      )}
    </>
  )
}
