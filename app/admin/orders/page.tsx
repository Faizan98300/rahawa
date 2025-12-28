"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { AdminLayout } from "@/components/admin-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Eye, Printer } from "lucide-react"
import { useState } from "react"

const orders = [
  {
    id: "VPS-8901",
    customer: "John Smith",
    email: "john@example.com",
    date: "Dec 20, 2024",
    items: "Standard Business Cards (500)",
    total: 234.5,
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "VPS-8902",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    date: "Dec 20, 2024",
    items: "Premium Flyers (250)",
    total: 156.0,
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "VPS-8903",
    customer: "Mike Davis",
    email: "mike@example.com",
    date: "Dec 19, 2024",
    items: "Custom Mugs (12)",
    total: 89.99,
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "VPS-8904",
    customer: "Emily Brown",
    email: "emily@example.com",
    date: "Dec 19, 2024",
    items: "Wall Calendars (20), Postcards (100)",
    total: 445.25,
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "VPS-8905",
    customer: "David Wilson",
    email: "david@example.com",
    date: "Dec 18, 2024",
    items: "T-Shirts (10)",
    total: 192.75,
    status: "Shipped",
    payment: "Paid",
  },
  {
    id: "VPS-8906",
    customer: "Lisa Anderson",
    email: "lisa@example.com",
    date: "Dec 18, 2024",
    items: "Brochures (500)",
    total: 345.0,
    status: "Pending",
    payment: "Pending",
  },
  {
    id: "VPS-8907",
    customer: "Robert Taylor",
    email: "robert@example.com",
    date: "Dec 17, 2024",
    items: "Rounded Corner Business Cards (1000)",
    total: 567.89,
    status: "Completed",
    payment: "Paid",
  },
  {
    id: "VPS-8908",
    customer: "Jennifer Martin",
    email: "jennifer@example.com",
    date: "Dec 17, 2024",
    items: "Hoodies (5), T-Shirts (10)",
    total: 449.95,
    status: "Shipped",
    payment: "Paid",
  },
]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || order.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <ProtectedRoute requiredRole="admin">
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Orders</h1>
              <p className="text-gray-600 mt-1">Manage and track customer orders</p>
            </div>
            <Button variant="outline" className="bg-transparent gap-2">
              <Download className="w-4 h-4" />
              Export Orders
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Orders</h3>
              <p className="text-3xl font-bold">{orders.length}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Pending</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {orders.filter((o) => o.status === "Pending").length}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Processing</h3>
              <p className="text-3xl font-bold text-blue-600">
                {orders.filter((o) => o.status === "Processing").length}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Completed</h3>
              <p className="text-3xl font-bold text-green-600">
                {orders.filter((o) => o.status === "Completed").length}
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by order ID or customer name..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Date</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Items</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Total</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Payment</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <p className="font-semibold">{order.id}</p>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-semibold">{order.customer}</p>
                          <p className="text-xs text-gray-500">{order.email}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">{order.date}</td>
                      <td className="py-4 px-4 text-sm max-w-xs truncate">{order.items}</td>
                      <td className="py-4 px-4 text-sm font-semibold">${order.total.toFixed(2)}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            order.payment === "Paid" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.payment}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <select
                          className="text-xs px-2 py-1 rounded-full font-semibold border-0"
                          value={order.status}
                          style={{
                            backgroundColor:
                              order.status === "Completed"
                                ? "#dcfce7"
                                : order.status === "Processing"
                                  ? "#dbeafe"
                                  : order.status === "Shipped"
                                    ? "#e0e7ff"
                                    : "#fef3c7",
                            color:
                              order.status === "Completed"
                                ? "#15803d"
                                : order.status === "Processing"
                                  ? "#1e40af"
                                  : order.status === "Shipped"
                                    ? "#4338ca"
                                    : "#a16207",
                          }}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" title="View Details">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Print Invoice">
                            <Printer className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No orders found</p>
              </div>
            )}
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}
