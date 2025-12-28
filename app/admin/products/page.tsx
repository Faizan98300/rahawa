"use client"

import { ProtectedRoute } from "@/components/protected-route"
import { AdminLayout } from "@/components/admin-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Edit, MoreVertical, Eye } from "lucide-react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const initialProducts = [
  {
    id: 1,
    name: "Standard Business Cards",
    category: "Business Cards",
    price: 24.99,
    stock: 1500,
    status: "Active",
    sales: 1247,
    image: "/standard-business-cards.jpg",
  },
  {
    id: 2,
    name: "Premium Flyers",
    category: "Marketing Materials",
    price: 45.99,
    stock: 890,
    status: "Active",
    sales: 892,
    image: "/flyers.jpg",
  },
  {
    id: 3,
    name: "Custom T-Shirts",
    category: "Apparel",
    price: 29.99,
    stock: 450,
    status: "Active",
    sales: 654,
    image: "/tshirts.jpg",
  },
  {
    id: 4,
    name: "Photo Mugs",
    category: "Gifts",
    price: 14.99,
    stock: 0,
    status: "Out of Stock",
    sales: 423,
    image: "/custom-photo-mug.png",
  },
  {
    id: 5,
    name: "Wall Calendars",
    category: "Stationery",
    price: 24.99,
    stock: 320,
    status: "Active",
    sales: 387,
    image: "/wall-calendar.jpg",
  },
  {
    id: 6,
    name: "Rounded Corner Business Cards",
    category: "Business Cards",
    price: 34.99,
    stock: 750,
    status: "Active",
    sales: 298,
    image: "/rounded-corner-business-cards.jpg",
  },
  {
    id: 7,
    name: "Postcards",
    category: "Marketing Materials",
    price: 19.99,
    stock: 1200,
    status: "Active",
    sales: 567,
    image: "/postcards.jpg",
  },
  {
    id: 8,
    name: "Hoodies",
    category: "Apparel",
    price: 49.99,
    stock: 180,
    status: "Low Stock",
    sales: 145,
    image: "/hoodies.jpg",
  },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [products, setProducts] = useState(initialProducts)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    category: "Business Cards",
    price: "",
    stock: "",
    status: "Active",
    description: "",
    image: "",
  })

  const handleAddProduct = () => {
    setFormData({
      name: "",
      category: "Business Cards",
      price: "",
      stock: "",
      status: "Active",
      description: "",
      image: "",
    })
    setIsAddDialogOpen(true)
  }

  const handleSaveProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      category: formData.category,
      price: Number.parseFloat(formData.price),
      stock: Number.parseInt(formData.stock),
      status: formData.status,
      sales: 0,
      image: formData.image || "/placeholder.svg",
    }
    setProducts([...products, newProduct])
    setIsAddDialogOpen(false)
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      status: product.status,
      description: "",
      image: product.image,
    })
    setIsEditDialogOpen(true)
  }

  const handleUpdateProduct = () => {
    setProducts(
      products.map((p) =>
        p.id === editingProduct.id
          ? {
              ...p,
              name: formData.name,
              category: formData.category,
              price: Number.parseFloat(formData.price),
              stock: Number.parseInt(formData.stock),
              status: formData.status,
              image: formData.image || p.image,
            }
          : p,
      ),
    )
    setIsEditDialogOpen(false)
  }

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = filterCategory === "all" || product.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <ProtectedRoute requiredRole="admin">
      <AdminLayout>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Products</h1>
              <p className="text-gray-600 mt-1">Manage your product catalog</p>
            </div>
            <Button onClick={handleAddProduct} className="bg-[#0066cc] hover:bg-[#0052a3] gap-2">
              <Plus className="w-4 h-4" />
              Add Product
            </Button>
          </div>

          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg bg-white"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Business Cards">Business Cards</option>
                <option value="Marketing Materials">Marketing Materials</option>
                <option value="Apparel">Apparel</option>
                <option value="Gifts">Gifts</option>
                <option value="Stationery">Stationery</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Category</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Stock</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Sales</th>
                    <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
                    <th className="text-right py-3 px-4 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-xs text-gray-500">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">{product.category}</td>
                      <td className="py-4 px-4 text-sm font-semibold">${product.price}</td>
                      <td className="py-4 px-4 text-sm">{product.stock}</td>
                      <td className="py-4 px-4 text-sm">{product.sales}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            product.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : product.status === "Low Stock"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleEditProduct(product)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Duplicate</DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found</p>
              </div>
            )}
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Products</h3>
              <p className="text-3xl font-bold">{products.length}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Low Stock Items</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {products.filter((p) => p.status === "Low Stock" || p.status === "Out of Stock").length}
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Sales</h3>
              <p className="text-3xl font-bold text-green-600">
                {products.reduce((sum, p) => sum + p.sales, 0).toLocaleString()}
              </p>
            </Card>
          </div>
        </div>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter product name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Business Cards">Business Cards</option>
                    <option value="Marketing Materials">Marketing Materials</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Signage">Signage</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Stock Quantity *</Label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter product description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Product Image URL</Label>
                <Input
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <p className="text-xs text-gray-500">Enter the URL of the product image</p>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleSaveProduct}
                  className="bg-[#0066cc] hover:bg-[#0052a3]"
                  disabled={!formData.name || !formData.price || !formData.stock}
                >
                  Add Product
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Product Name *</Label>
                  <Input
                    id="edit-name"
                    placeholder="Enter product name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-category">Category *</Label>
                  <select
                    id="edit-category"
                    className="w-full px-3 py-2 border rounded-lg"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Business Cards">Business Cards</option>
                    <option value="Marketing Materials">Marketing Materials</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Gifts">Gifts</option>
                    <option value="Stationery">Stationery</option>
                    <option value="Signage">Signage</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-price">Price ($) *</Label>
                  <Input
                    id="edit-price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-stock">Stock Quantity *</Label>
                  <Input
                    id="edit-stock"
                    type="number"
                    placeholder="0"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <select
                  id="edit-status"
                  className="w-full px-3 py-2 border rounded-lg"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                >
                  <option value="Active">Active</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  placeholder="Enter product description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-image">Product Image URL</Label>
                <Input
                  id="edit-image"
                  placeholder="https://example.com/image.jpg"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
                <p className="text-xs text-gray-500">Enter the URL of the product image</p>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdateProduct}
                  className="bg-[#0066cc] hover:bg-[#0052a3]"
                  disabled={!formData.name || !formData.price || !formData.stock}
                >
                  Update Product
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </AdminLayout>
    </ProtectedRoute>
  )
}
