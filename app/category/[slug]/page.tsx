import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ChevronRight, SlidersHorizontal } from "lucide-react"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryData = getCategoryData(params.slug)

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
            <span className="text-gray-600">{categoryData.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">{categoryData.name}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{categoryData.description}</p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-4 bg-[#f7f7f7] rounded-lg">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <span className="font-semibold">Filter by:</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Product Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
                <SelectItem value="deluxe">Deluxe</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{categoryData.products.length} products</span>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {categoryData.products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-[250px] object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.subtitle}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-[#0066cc]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="w-full bg-[#0066cc] hover:bg-[#0052a3]">Customize</Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Category Info Section */}
        <div className="bg-[#f7f7f7] p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About {categoryData.name}</h2>
          <p className="text-gray-700 leading-relaxed">{categoryData.longDescription}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function getCategoryData(slug: string) {
  const categories: Record<string, any> = {
    "business-cards": {
      name: "Business Cards",
      description:
        "Make a lasting impression with professionally designed business cards. Choose from standard, premium, or luxury finishes.",
      longDescription:
        "Business cards are essential for making connections and growing your network. Our high-quality printing and diverse paper stocks ensure your cards stand out. Choose from standard, rounded corner, premium, or luxury finishes to match your brand perfectly.",
      products: [
        {
          id: 1,
          name: "Standard Business Cards",
          subtitle: "Classic matte or glossy finish",
          slug: "business-cards",
          price: "9.99",
          originalPrice: "19.99",
          badge: "50% OFF",
          image: "/standard-business-cards.jpg",
        },
        {
          id: 2,
          name: "Premium Business Cards",
          subtitle: "Extra-thick 16pt cardstock",
          slug: "premium-business-cards",
          price: "24.99",
          originalPrice: "39.99",
          badge: "20% OFF",
          image: "/premium-business-cards.jpg",
        },
        {
          id: 3,
          name: "Rounded Corner Cards",
          subtitle: "Smooth, professional edges",
          slug: "rounded-business-cards",
          price: "14.99",
          image: "/rounded-corner-business-cards.jpg",
        },
        {
          id: 4,
          name: "Luxury Business Cards",
          subtitle: "Ultra-premium 32pt with foil",
          slug: "luxury-business-cards",
          price: "49.99",
          image: "/luxury-business-cards.jpg",
        },
      ],
    },
    gifts: {
      name: "Gifts & Custom Products",
      description: "Personalized gifts for every occasion. From mugs to calendars, create memorable presents.",
      longDescription:
        "Our custom gift collection features high-quality products perfect for personal or corporate gifting. Add photos, text, and designs to create unique presents your recipients will treasure.",
      products: [
        {
          id: 1,
          name: "Custom Mugs",
          subtitle: "11oz ceramic, dishwasher safe",
          slug: "mugs",
          price: "12.99",
          originalPrice: "18.99",
          badge: "30% OFF",
          image: "/custom-photo-mug.png",
        },
        {
          id: 2,
          name: "Wall Calendars",
          subtitle: "12-month, full color",
          slug: "wall-calendars",
          price: "19.99",
          image: "/wall-calendar.jpg",
        },
        {
          id: 3,
          name: "Photo Books",
          subtitle: "Hardcover, premium paper",
          slug: "photo-books",
          price: "29.99",
          image: "/open-photo-book.png",
        },
        {
          id: 4,
          name: "Desk Calendars",
          subtitle: "Stand-up design, 12 months",
          slug: "desk-calendars",
          price: "14.99",
          image: "/desk-calendar.png",
        },
      ],
    },
    clothing: {
      name: "Clothing & Bags",
      description: "Custom apparel and accessories for your brand. High-quality printing on premium fabrics.",
      longDescription:
        "Create custom apparel that represents your brand or event. Our clothing and bags are made with high-quality materials and professional printing techniques.",
      products: [
        {
          id: 1,
          name: "Custom T-Shirts",
          subtitle: "100% cotton, multiple colors",
          slug: "tshirts",
          price: "15.99",
          badge: "10% OFF",
          image: "/custom-t-shirt.jpg",
        },
        {
          id: 2,
          name: "Hoodies",
          subtitle: "Soft fleece, pullover or zip",
          slug: "hoodies",
          price: "34.99",
          image: "/custom-hoodie.jpg",
        },
        {
          id: 3,
          name: "Tote Bags",
          subtitle: "Canvas, 15x16 inches",
          slug: "bags",
          price: "9.99",
          image: "/custom-tote-bag.jpg",
        },
        {
          id: 4,
          name: "Baseball Caps",
          subtitle: "Adjustable, embroidered or printed",
          slug: "caps",
          price: "12.99",
          image: "/custom-baseball-cap.png",
        },
      ],
    },
    signs: {
      name: "Signs, Banners & Posters",
      description: "Eye-catching signage for any purpose. Indoor and outdoor options available.",
      longDescription:
        "Our signs, banners, and posters are perfect for events, promotions, and permanent displays. We offer various sizes and materials to suit your needs.",
      products: [
        {
          id: 1,
          name: "Vinyl Banners",
          subtitle: "Weather-resistant, grommets included",
          slug: "banners",
          price: "29.99",
          image: "/vinyl-banner.jpg",
        },
        {
          id: 2,
          name: "Yard Signs",
          subtitle: "Corrugated plastic, 18x24",
          slug: "yard-signs",
          price: "19.99",
          image: "/yard-sign.jpg",
        },
        {
          id: 3,
          name: "Posters",
          subtitle: "Glossy or matte, multiple sizes",
          slug: "posters",
          price: "9.99",
          image: "/promotional-poster.png",
        },
        {
          id: 4,
          name: "Retractable Banners",
          subtitle: "Portable, includes stand",
          slug: "retractable-banners",
          price: "79.99",
          image: "/retractable-banner-stand.jpg",
        },
      ],
    },
  }

  return (
    categories[slug] || {
      name: "Products",
      description: "Browse our selection of custom products",
      longDescription: "Discover high-quality custom printed products for your business or personal needs.",
      products: [],
    }
  )
}
