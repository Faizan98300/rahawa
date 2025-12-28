import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ChevronRight, Clock } from "lucide-react"

export default function DealsPage() {
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
            <span className="text-gray-600">Deals</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Amazing Deals & Discounts</h1>
          <p className="text-2xl mb-6">Save up to 50% on select products</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock className="w-5 h-5" />
            <span>Limited time offers - Ends Dec. 31, 2025</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Deals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Deals</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredDeals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <Badge className="bg-red-600 mb-2">{deal.discount}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{deal.name}</h3>
                      <p className="text-gray-600 mb-4">{deal.description}</p>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-3xl font-bold text-[#0066cc]">${deal.price}</span>
                        <span className="text-lg text-gray-500 line-through">${deal.originalPrice}</span>
                      </div>
                    </div>
                    <Button className="bg-[#0066cc] hover:bg-[#0052a3] w-full" asChild>
                      <Link href={`/product/${deal.slug}`}>Shop Now</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* All Deals Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">All Current Deals</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allDeals.map((deal) => (
              <Link key={deal.id} href={`/product/${deal.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="relative">
                    <img
                      src={deal.image || "/placeholder.svg"}
                      alt={deal.name}
                      className="w-full h-[200px] object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-red-600">{deal.discount}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{deal.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#0066cc]">${deal.price}</span>
                      <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

const featuredDeals = [
  {
    id: 1,
    name: "Business Cards Bundle",
    description: "500 premium business cards with free design service",
    slug: "business-cards",
    price: "24.99",
    originalPrice: "49.99",
    discount: "50% OFF",
    image: "/business-cards-bundle.jpg",
  },
  {
    id: 2,
    name: "Marketing Starter Pack",
    description: "Includes flyers, postcards, and brochures",
    slug: "marketing-pack",
    price: "79.99",
    originalPrice: "149.99",
    discount: "47% OFF",
    image: "/marketing-materials-bundle.jpg",
  },
]

const allDeals = [
  {
    id: 1,
    name: "Business Cards",
    slug: "business-cards",
    price: "9.99",
    originalPrice: "19.99",
    discount: "50% OFF",
    image: "/assorted-business-cards.png",
  },
  {
    id: 2,
    name: "Custom Mugs",
    slug: "mugs",
    price: "12.99",
    originalPrice: "18.99",
    discount: "30% OFF",
    image: "/custom-mug.png",
  },
  {
    id: 3,
    name: "T-Shirts",
    slug: "tshirts",
    price: "15.99",
    originalPrice: "22.99",
    discount: "30% OFF",
    image: "/custom-t-shirt.jpg",
  },
  {
    id: 4,
    name: "Postcards",
    slug: "postcards",
    price: "19.99",
    originalPrice: "29.99",
    discount: "33% OFF",
    image: "/postcards.jpg",
  },
  {
    id: 5,
    name: "Roll Labels",
    slug: "labels",
    price: "24.99",
    originalPrice: "39.99",
    discount: "38% OFF",
    image: "/roll-labels.jpg",
  },
  {
    id: 6,
    name: "Vinyl Banners",
    slug: "banners",
    price: "29.99",
    originalPrice: "49.99",
    discount: "40% OFF",
    image: "/vinyl-banner.jpg",
  },
  {
    id: 7,
    name: "Holiday Cards",
    slug: "holiday-cards",
    price: "14.99",
    originalPrice: "29.99",
    discount: "50% OFF",
    image: "/christmas-holiday-card.jpg",
  },
  {
    id: 8,
    name: "Wall Calendars",
    slug: "wall-calendars",
    price: "19.99",
    originalPrice: "34.99",
    discount: "43% OFF",
    image: "/wall-calendar.jpg",
  },
]
