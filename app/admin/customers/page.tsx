"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { AdminLayout } from "@/components/admin-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Eye, Edit, Ban, CheckCircle } from "lucide-react"
import { useState } from "react"

const customers = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    role: "user",
    orders: 12,
    totalSpent: 1245.67,
    status: "Active",
    joined: "Jan 15, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "user",
    orders: 8,
    totalSpent: 892.34,
    status: "Active",
    joined: "Feb 03, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Mike Davis",
    email: "mike@example.com",
    role: "user",
    orders: 5,
    totalSpent: 456.78,
    status: "Active",
    joined: "Feb 18, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Emily Brown",
    email: "emily@example.com",
    role: "user",
    orders: 15,
    totalSpent: 2134.56,
    status: "Active",
    joined: "Mar 05, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david@example.com",
    role: "user",
    orders: 3,
    totalSpent: 234.89,
    status: "Inactive",
    joined: "Mar 22, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Lisa Anderson",
    email: "lisa@example.com",
    role: "user",
    orders: 20,
    totalSpent: 3456.78,
    status: "Active",
    joined: "Apr 10, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "7",
    name: "Robert Taylor",
    email: "robert@example.com",
    role: "user",
    orders: 7,
    totalSpent: 678.9,
    status: "Active",
    joined: "May 15, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "8",
    name: "Admin User",
    email: "admin@rawaha.com",
    role: "admin",
    orders: 0,
    totalSpent: 0,
    status: "Active",
    joined: "Jan 01, 2024",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || customer.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <ProtectedRoute requiredRole="admin">
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Customers</h1>
              <p className="text-gray-600 mt-1">Manage customer accounts and data</p>
            </div>
            <Button variant="outline" className="bg-transparent gap-2">
              <Download className="w-4 h-4" />
              Export Customers
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Customers</h3>
              <p className="text-3xl font-bold">{customers.length}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Active</h3>
              <p className="text-3xl font-bold text-green-600">
                {customers.filter((c) => c.status === "Active").length}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-[#0066cc]">
                ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg Order Value</h3>
              <p className="text-3xl font-bold text-purple-600">
                $
                {(
                  customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.reduce((sum, c) => sum + c.orders, 0)
                ).toFixed(2)}
              </p>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
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
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Role</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Orders</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Total Spent</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Joined</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={customer.avatar || "/placeholder.svg"}
                            alt={customer.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div>
                            <p className="font-semibold">{customer.name}</p>
                            <p className="text-xs text-gray-500">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            customer.role === "admin" ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {customer.role}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm">{customer.orders}</td>
                      <td className="py-4 px-4 text-sm font-semibold">${customer.totalSpent.toFixed(2)}</td>
                      <td className="py-4 px-4 text-sm">{customer.joined}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            customer.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" title="View Details">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Edit Customer">
                            <Edit className="w-4 h-4" />
                          </Button>
                          {customer.status === "Active" ? (
                            <Button variant="ghost" size="icon" title="Deactivate">
                              <Ban className="w-4 h-4 text-red-600" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="icon" title="Activate">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredCustomers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No customers found</p>
              </div>
            )}
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}
