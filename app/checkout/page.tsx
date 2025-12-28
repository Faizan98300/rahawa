"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ChevronRight, CreditCard, Lock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const cartItems = [
    {
      id: 1,
      name: "Standard Business Cards",
      quantity: 500,
      price: 24.99,
    },
    {
      id: 2,
      name: "Custom Photo Mugs",
      quantity: 12,
      price: 155.88,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shippingCost = shippingMethod === "express" ? 19.99 : shippingMethod === "overnight" ? 39.99 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shippingCost + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    }
  }

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
            <Link href="/cart" className="text-[#0066cc] hover:underline">
              Cart
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Checkout</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Shipping" },
              { num: 2, label: "Payment" },
              { num: 3, label: "Review" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.num ? "bg-[#0066cc] text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step > s.num ? <CheckCircle className="w-6 h-6" /> : s.num}
                  </div>
                  <span className="text-sm mt-2">{s.label}</span>
                </div>
                {i < 2 && <div className={`w-24 h-1 mx-4 ${step > s.num ? "bg-[#0066cc]" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Information */}
              {step === 1 && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input id="address" required className="mt-1" />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="address2">Apartment, Suite, etc. (Optional)</Label>
                    <Input id="address2" className="mt-1" />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input id="zip" required className="mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Shipping Method</h3>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="ml-3 cursor-pointer">
                              <span className="font-semibold">Standard Shipping</span>
                              <span className="block text-sm text-gray-600">5-7 business days</span>
                            </Label>
                          </div>
                          <span className="font-semibold">$9.99</span>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="ml-3 cursor-pointer">
                              <span className="font-semibold">Express Shipping</span>
                              <span className="block text-sm text-gray-600">2-3 business days</span>
                            </Label>
                          </div>
                          <span className="font-semibold">$19.99</span>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center">
                            <RadioGroupItem value="overnight" id="overnight" />
                            <Label htmlFor="overnight" className="ml-3 cursor-pointer">
                              <span className="font-semibold">Overnight Shipping</span>
                              <span className="block text-sm text-gray-600">1 business day</span>
                            </Label>
                          </div>
                          <span className="font-semibold">$39.99</span>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-lg py-6">
                    Continue to Payment
                  </Button>
                </Card>
              )}

              {/* Step 2: Payment Information */}
              {step === 2 && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

                  <div className="mb-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-3">
                        <div className="flex items-center p-4 border rounded-lg">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="ml-3 cursor-pointer flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            <span className="font-semibold">Credit/Debit Card</span>
                          </Label>
                        </div>
                        <div className="flex items-center p-4 border rounded-lg">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal" className="ml-3 cursor-pointer font-semibold">
                            PayPal
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "card" && (
                    <>
                      <div className="mb-4">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-1" />
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="cardName">Cardholder Name *</Label>
                        <Input id="cardName" required className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <Label htmlFor="expiry">Expiry Date *</Label>
                          <Input id="expiry" placeholder="MM/YY" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input id="cvv" placeholder="123" required className="mt-1" />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 mb-6">
                    <Checkbox id="saveCard" />
                    <Label htmlFor="saveCard" className="cursor-pointer">
                      Save payment information for future purchases
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 bg-[#0066cc] hover:bg-[#0052a3]">
                      Review Order
                    </Button>
                  </div>
                </Card>
              )}

              {/* Step 3: Review Order */}
              {step === 3 && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Shipping Address</h3>
                    <p className="text-gray-700">
                      John Doe
                      <br />
                      123 Main Street
                      <br />
                      New York, NY 10001
                      <br />
                      john@example.com
                    </p>
                    <Button variant="link" className="text-[#0066cc] p-0" onClick={() => setStep(1)}>
                      Edit
                    </Button>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
                    <p className="text-gray-700">Credit Card ending in 3456</p>
                    <Button variant="link" className="text-[#0066cc] p-0" onClick={() => setStep(2)}>
                      Edit
                    </Button>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Order Items</h3>
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between py-2 border-b">
                          <span>
                            {item.name} (Qty: {item.quantity})
                          </span>
                          <span className="font-semibold">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="cursor-pointer text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-[#0066cc] underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-[#0066cc] underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      className="flex-1 bg-[#0066cc] hover:bg-[#0052a3] text-lg py-6"
                      onClick={() => (window.location.href = "/order-confirmation")}
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      Place Order
                    </Button>
                  </div>
                </Card>
              )}
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-[#0066cc]">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-[#0066cc]">${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
