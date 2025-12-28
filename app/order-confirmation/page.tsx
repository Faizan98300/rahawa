import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Download, Mail, Truck } from "lucide-react"

export default function OrderConfirmationPage() {
  const orderNumber = "VPS-" + Math.random().toString(36).substring(2, 11).toUpperCase()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">Thank you for your order</p>
          </div>

          {/* Order Details */}
          <Card className="p-8 mb-6">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div>
                <p className="text-sm text-gray-600 mb-1">Order Number</p>
                <p className="text-2xl font-bold text-[#0066cc]">{orderNumber}</p>
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="w-4 h-4" />
                Download Invoice
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-gray-700">
                  John Doe
                  <br />
                  123 Main Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Payment Method</h3>
                <p className="text-gray-700">Credit Card ending in 3456</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Order Items</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span>Standard Business Cards (Qty: 500)</span>
                  <span className="font-semibold">$24.99</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Custom Photo Mugs (Qty: 12)</span>
                  <span className="font-semibold">$155.88</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f7f7f7] p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>$180.87</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Tax</span>
                <span>$14.47</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t pt-3">
                <span>Total</span>
                <span className="text-[#0066cc]">$205.33</span>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Confirmation Email</h3>
              <p className="text-sm text-gray-600">Check your inbox for order details</p>
            </Card>
            <Card className="p-6 text-center">
              <Truck className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Track Shipment</h3>
              <p className="text-sm text-gray-600">You'll receive tracking info soon</p>
            </Card>
            <Card className="p-6 text-center">
              <Download className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Production Updates</h3>
              <p className="text-sm text-gray-600">We'll notify you at each stage</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/account/orders">View All Orders</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
