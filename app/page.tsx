import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RawahaClone() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f7f7f7] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Order tonight to get  delivery with express shipping
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Up to 10% off cards & wall calendars. Plus, up to 15% off gifts.
            </p>
            <p className="text-sm text-gray-600 mb-6">Ends Dec. 22</p>
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
              <Button className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
                <Link href="/category/gifts">All Gifts</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/category/holiday-cards">Holiday Cards</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/category/calendars">Wall Calendars</Link>
              </Button>
            </div>
            <Link href="/shipping" className="text-[#0066cc] underline text-sm">
              Check our shipping cut-off dates
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <img
              src="/holiday-cards-and-wall-calendar-display.jpg"
              alt="Holiday Cards"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <img
              src="/custom-gifts-and-mugs-display.jpg"
              alt="Custom Gifts"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>

          <p className="text-center mt-6 text-gray-700">Order by Dec. 21 and use express shipping at checkout.</p>
        </div>
      </section>

      {/* Explore Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore all categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link key={category.name} href={category.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold">{category.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Get it by Christmas */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Order custom gifts by Dec. 21, 11:59pm EST for express shipping
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {christmasProducts.map((product) => (
              <Link key={product.name} href={product.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className="p-3 text-center">
                    {product.badge && <span className="text-xs text-red-600 font-semibold">{product.badge}</span>}
                    <h3 className="text-sm font-medium mt-1">{product.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Save on Gifts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Save on select personalized gifts, delivered fast</h2>
          <p className="text-center mb-8">
            <Link href="/shipping" className="text-[#0066cc] underline">
              Shipping cut-off dates
            </Link>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {giftCategories.map((gift) => (
              <Link key={gift.name} href={gift.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={gift.image || "/placeholder.svg"}
                    alt={gift.name}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-medium">{gift.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Essentials */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stock up on business essentials for the new year</h2>
            <p className="text-xl text-gray-700 mb-6">Get ready for the year ahead with marketing must-haves.</p>
            <Button className="bg-[#0066cc] hover:bg-[#0052a3]" asChild>
              <Link href="/category/business">Shop now</Link>
            </Button>
          </div>
          <img
            src="/business-marketing-materials-display-with-business.jpg"
            alt="Business Essentials"
            className="w-full h-[300px] object-cover rounded-lg mb-8"
          />

          <h3 className="text-2xl font-bold mb-6 text-center">Stock up and save on business staples</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {businessProducts.map((product) => (
              <Link key={product.name} href={product.link}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className="p-3 text-center">
                    {product.badge && <span className="text-xs text-red-600 font-semibold">{product.badge}</span>}
                    <h3 className="text-sm font-medium mt-1">{product.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Made by you, #MadeWithRawaha</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We love to see your custom creations. Post a photo on social media and add @Rawaha and #MadeWithRawaha for a
            chance to be featured here.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={`/custom-product-.jpg?height=300&width=300&query=custom product ${i + 1}`}
                  alt={`Customer creation ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Rawaha: Here for small business since 2016.</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            With a vision to excel in the business of Paper Manufacturing, Import & Export, Rawaha International (Private) Limited was incorporated on April 14, 2016 under Companies Ordinance,
            1984. The company is privately owned, headed by a Chief Executive officer, has an efficient board of directors that supervise the operations of the company and carry out the decision making. Rawaha International comprises of a team of strong professionals who accomplish their defined roles to achieve the overall business objectives according to the highest standards of competence and corporate responsibility.
            The head office of the company is located in Punjab Paper Market, Opposite Police Station, Abkari Road, New Anarkali, Lahore.
            Vision 
            To be one of the leading organizations in the industry, effectively achieving business objectives, attaining ultimate client satisfaction and pursuing multiple growth opportunities while remaining ethically and socially responsible.
            Mission Statement
            * To provide our customers with highest quality products in a safe, reliable, efficient and environmentally sound manner.
            * Combining the latest technology with most efficient management systems to seek leadership and trend setting within the industry.
            * Developing deep-rooted and cordial relationship with all customers and stakeholders and maximization of returns to the stakeholders.
            * Maintaining highest standards of corporate culture while providing the employees an opportunity to work in a competitive environment and swift career progression.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Easy Design</h3>
              <p className="text-gray-700">
                Our online tools make the process as simple and clear as possible, and we're working to improve your
                experience all the time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Make It Match</h3>
              <p className="text-gray-700">
                Our designs can be used across multiple printed products, which makes it easier for you to create
                consistent, professional marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

const categories = [
  { name: "Deals", image: "/deals-and-discounts-badge.jpg", link: "/deals" },
  { name: "Holiday Cards", image: "/holiday-greeting-cards.jpg", link: "/category/holiday-cards" },
  { name: "Calendars & Gifting", image: "/wall-calendar-and-mug.jpg", link: "/category/gifts" },
  { name: "Business Cards", image: "/professional-business-cards.jpg", link: "/category/business-cards" },
  { name: "Postcards & Print Advertising", image: "/advertising-postcards.jpg", link: "/category/postcards" },
  { name: "Signs, Banners & Posters", image: "/vinyl-banner.jpg", link: "/category/signs" },
  { name: "Stickers & Labels", image: "/roll-of-stickers.jpg", link: "/category/labels" },
  { name: "Clothing & Bags", image: "/custom-t-shirt.jpg", link: "/category/clothing" },
  { name: "Promotional Products", image: "/reusable-water-bottle.png", link: "/category/promo" },
  { name: "Packaging", image: "/custom-packaging.png", link: "/category/packaging" },
  { name: "Invitations, Gifts & Stationery", image: "/invitation-cards.jpg", link: "/category/invitations" },
  { name: "Booklets", image: "/printed-booklets.jpg", link: "/category/booklets" },
]

const christmasProducts = [
  { name: "Holiday Cards", image: "/christmas-holiday-card.jpg", link: "/product/holiday-cards" },
  { name: "Custom Wall Calendars", image: "/placeholder.svg?height=180&width=180", link: "/product/wall-calendars" },
  { name: "Custom Mugs", image: "/placeholder.svg?height=180&width=180", link: "/product/mugs" },
  {
    name: "Select T-shirts",
    image: "/placeholder.svg?height=180&width=180",
    link: "/product/tshirts",
    badge: "Up to 10% off select",
  },
  { name: "Custom Desk Calendars", image: "/placeholder.svg?height=180&width=180", link: "/product/desk-calendars" },
  { name: "Personalized Note Cards", image: "/placeholder.svg?height=180&width=180", link: "/product/note-cards" },
]

const giftCategories = [
  { name: "Gifts by Price Point", image: "/placeholder.svg?height=180&width=180", link: "/category/gifts-by-price" },
  { name: "Gifts for Her", image: "/placeholder.svg?height=180&width=180", link: "/category/gifts-her" },
  { name: "Gifts for Him", image: "/placeholder.svg?height=180&width=180", link: "/category/gifts-him" },
  { name: "Gifts for Anyone", image: "/placeholder.svg?height=180&width=180", link: "/category/gifts-anyone" },
  {
    name: "Gifts for Clients & Employees",
    image: "/placeholder.svg?height=180&width=180",
    link: "/category/business-gifts",
  },
  { name: "Gifts for Pet Lovers", image: "/placeholder.svg?height=180&width=180", link: "/category/pet-gifts" },
]

const businessProducts = [
  {
    name: "Business Cards",
    image: "/placeholder.svg?height=180&width=180",
    link: "/product/business-cards",
    badge: "Up to 20% off",
  },
  { name: "Vinyl Banners", image: "/vinyl-banner.jpg", link: "/product/banners" },
  { name: "Posters", image: "/placeholder.svg?height=180&width=180", link: "/product/posters" },
  {
    name: "Custom Postcards",
    image: "/placeholder.svg?height=180&width=180",
    link: "/product/postcards",
    badge: "Up to 20% off",
  },
  { name: "Flyers", image: "/placeholder.svg?height=180&width=180", link: "/product/flyers" },
  {
    name: "Roll Labels",
    image: "/placeholder.svg?height=180&width=180",
    link: "/product/labels",
    badge: "Up to 20% off",
  },
]
