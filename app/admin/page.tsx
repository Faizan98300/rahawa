"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { AdminLayout } from "@/components/admin-layout"
import { Card } from "@/components/ui/card"
import { ShoppingCart, Users, Package, DollarSign, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 320 },
  { month: "Feb", revenue: 52000, orders: 380 },
  { month: "Mar", revenue: 48000, orders: 350 },
  { month: "Apr", revenue: 61000, orders: 420 },
  { month: "May", revenue: 55000, orders: 390 },
  { month: "Jun", revenue: 67000, orders: 480 },
  { month: "Jul", revenue: 72000, orders: 510 },
  { month: "Aug", revenue: 69000, orders: 495 },
  { month: "Sep", revenue: 78000, orders: 550 },
  { month: "Oct", revenue: 82000, orders: 590 },
  { month: "Nov", revenue: 88000, orders: 630 },
  { month: "Dec", revenue: 95000, orders: 680 },
]

const categoryData = [
  { category: "Business Cards", sales: 12500 },
  { category: "Marketing", sales: 8900 },
  { category: "Apparel", sales: 6700 },
  { category: "Gifts", sales: 5400 },
  { category: "Stationery", sales: 4200 },
]

export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome to your admin dashboard</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold mt-2">$95,234</p>
                  <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+12.5%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold mt-2">1,847</p>
                  <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+8.2%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Customers</p>
                  <p className="text-3xl font-bold mt-2">892</p>
                  <div className="flex items-center gap-1 mt-2 text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+15.3%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Products</p>
                  <p className="text-3xl font-bold mt-2">245</p>
                  <div className="flex items-center gap-1 mt-2 text-red-600 text-sm">
                    <TrendingDown className="w-4 h-4" />
                    <span>-2.1%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Revenue Overview</h3>
                <Button className="text-[#0066cc] text-sm" variant="ghost" size="sm">
                  View Report <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#0066cc" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Sales by Category</h3>
                <Button className="text-[#0066cc] text-sm" variant="ghost" size="sm">
                  View All <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#0066cc" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-semibold">{order.customer}</p>
                      <p className="text-sm text-gray-600">Order #{order.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.amount}</p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-[#0066cc] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sales} sales</p>
                    </div>
                    <p className="font-semibold text-[#0066cc]">${product.revenue}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}

const recentOrders = [
  { id: "VPS-8901", customer: "John Smith", amount: "234.50", status: "Completed" },
  { id: "VPS-8902", customer: "Sarah Johnson", amount: "156.00", status: "Processing" },
  { id: "VPS-8903", customer: "Mike Davis", amount: "89.99", status: "Completed" },
  { id: "VPS-8904", customer: "Emily Brown", amount: "445.25", status: "Processing" },
  { id: "VPS-8905", customer: "David Wilson", amount: "192.75", status: "Completed" },
]

const topProducts = [
  { id: 1, name: "Standard Business Cards", sales: 1247, revenue: "31,175" },
  { id: 2, name: "Premium Flyers", sales: 892, revenue: "22,300" },
  { id: 3, name: "Custom T-Shirts", sales: 654, revenue: "19,620" },
  { id: 4, name: "Photo Mugs", sales: 423, revenue: "12,690" },
  { id: 5, name: "Wall Calendars", sales: 387, revenue: "9,675" },
]

function Button({ children, className, variant, size, ...props }: any) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
