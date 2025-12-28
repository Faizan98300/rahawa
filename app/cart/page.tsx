"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight, Trash2, Plus, Minus } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart()

  const handleUpdateQuantity = (id: string, change: number) => {
    const item = cartItems.find((i) => i.id === id)
    if (item) {
      updateQuantity(id, Math.max(1, item.quantity + change))
    }
  }

  const handleRemoveItem = (id: string) => {
    removeItem(id)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const total = subtotal

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b bg-[#f7f7f7]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#0066cc] hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Shopping Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Card className="p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some products to get started!</p>
            <Button className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.options}</p>
                      <p className="text-sm text-gray-600 mb-4">Quantity: {item.quantity}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, -1)}
                            className="h-8 w-8"
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleUpdateQuantity(item.id, 1)}
                            className="h-8 w-8"
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#0066cc]">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-[#0066cc]">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-lg py-6" asChild>
                  <Link href="/contact?order=true">Contact Us to Order</Link>
                </Button>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Our team will contact you to finalize your order
                </p>
                <Button variant="outline" className="w-full mt-3 bg-transparent" asChild>
                  <Link href="/">Continue Shopping</Link>
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
