"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { User, Package, FileText, Settings, LogOut } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Account</h1>
          <p className="text-gray-600">Manage your orders, designs, and account settings</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-flex">
            <TabsTrigger value="overview" className="gap-2">
              <User className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <Package className="w-4 h-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="designs" className="gap-2">
              <FileText className="w-4 h-4" />
              Designs
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="logout" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
                <p className="text-3xl font-bold text-[#0066cc] mb-2">5</p>
                <p className="text-sm text-gray-600">In the last 30 days</p>
                <Button variant="link" className="text-[#0066cc] p-0 mt-2" asChild>
                  <Link href="/account/orders">View all orders</Link>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Saved Designs</h3>
                <p className="text-3xl font-bold text-[#0066cc] mb-2">12</p>
                <p className="text-sm text-gray-600">Ready to print</p>
                <Button variant="link" className="text-[#0066cc] p-0 mt-2" asChild>
                  <Link href="/account/saved-designs">View designs</Link>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Account Credit</h3>
                <p className="text-3xl font-bold text-[#0066cc] mb-2">$25.00</p>
                <p className="text-sm text-gray-600">Available to use</p>
                <Button variant="link" className="text-[#0066cc] p-0 mt-2">
                  View details
                </Button>
              </Card>
            </div>

            <Card className="p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Account Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold">John Doe</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-semibold">January 2024</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 bg-transparent">
                Edit Profile
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Order History</h2>
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-lg">Order #{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "In Production"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{order.items}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-bold text-[#0066cc]">${order.total}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Details
                        </Button>
                        <Button size="sm" className="bg-[#0066cc] hover:bg-[#0052a3]">
                          Reorder
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="designs">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Saved Designs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {mockDesigns.map((design) => (
                  <div key={design.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gray-100 flex items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{design.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">{design.type}</p>
                      <p className="text-xs text-gray-500 mb-3">Last edited: {design.lastEdited}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1 bg-[#0066cc] hover:bg-[#0052a3]">
                          Print
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Email Preferences</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Order updates and shipping notifications</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">Special offers and promotions</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Design tips and inspiration</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Change Password</h3>
                  <Button variant="outline" className="bg-transparent">
                    Update Password
                  </Button>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Delete Account</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="logout">
            <Card className="p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Sign Out</h2>
              <p className="text-gray-600 mb-6">Are you sure you want to sign out of your account?</p>
              <div className="flex gap-4 justify-center">
                <Button variant="outline" className="bg-transparent">
                  Cancel
                </Button>
                <Button className="bg-[#0066cc] hover:bg-[#0052a3]">Sign Out</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}

const mockOrders = [
  {
    id: "VPS-8K9L2M3N",
    date: "Dec 18, 2024",
    items: "Standard Business Cards (500)",
    total: "24.99",
    status: "Delivered",
  },
  {
    id: "VPS-4P5Q6R7S",
    date: "Dec 10, 2024",
    items: "Custom Mugs (12)",
    total: "155.88",
    status: "In Production",
  },
  {
    id: "VPS-1T2U3V4W",
    date: "Nov 28, 2024",
    items: "Flyers (250), Postcards (100)",
    total: "89.97",
    status: "Shipped",
  },
]

const mockDesigns = [
  {
    id: 1,
    name: "My Business Card",
    type: "Business Card",
    lastEdited: "Dec 15, 2024",
  },
  {
    id: 2,
    name: "Holiday Greeting",
    type: "Holiday Card",
    lastEdited: "Dec 12, 2024",
  },
  {
    id: 3,
    name: "Company Flyer",
    type: "Flyer",
    lastEdited: "Nov 20, 2024",
  },
]
