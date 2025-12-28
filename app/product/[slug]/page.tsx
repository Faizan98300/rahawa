"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ChevronRight, Star, Check, Upload, Truck, Shield } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { useRouter } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductData(params.slug)
  const [quantity, setQuantity] = useState(100)
  const [selectedOptions, setSelectedOptions] = useState({
    size: product.options.sizes[0].value,
    paper: product.options.paperTypes[0].value,
    finish: product.options.finishes[0].value,
  })
  const { addToCart } = useCart()
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)

  const calculatePrice = () => {
    const basePrice = product.basePrice
    const quantityMultiplier = quantity / 100
    return (basePrice * quantityMultiplier).toFixed(2)
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    const cartItem = {
      id: `${params.slug}-${selectedOptions.size}-${selectedOptions.paper}-${selectedOptions.finish}-${quantity}`,
      name: product.name,
      image: product.mainImage,
      quantity: quantity,
      price: Number.parseFloat(calculatePrice()),
      options: `${selectedOptions.size}, ${selectedOptions.paper}, ${selectedOptions.finish}`,
      productSlug: params.slug,
    }
    addToCart(cartItem)

    setTimeout(() => {
      setIsAdding(false)
      router.push("/cart")
    }, 500)
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
            <Link href={`/category/${product.category}`} className="text-[#0066cc] hover:underline">
              {product.categoryName}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4">
              <img
                src={product.mainImage || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
              {product.badge && (
                <Badge className="absolute top-4 right-4 bg-red-600 text-lg px-4 py-2">{product.badge}</Badge>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.thumbnails.map((thumb, i) => (
                <img
                  key={i}
                  src={thumb || "/placeholder.svg"}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-24 object-cover rounded border-2 border-gray-200 hover:border-[#0066cc] cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Product Details & Customization */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffa500] text-[#ffa500]" />
                ))}
              </div>
              <span className="text-sm text-gray-600">(2,847 reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-[#0066cc]">${calculatePrice()}</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Customization Options */}
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Customize Your Product</h3>

              {/* Quantity */}
              <div className="mb-6">
                <Label className="text-base font-semibold mb-2 block">Quantity</Label>
                <RadioGroup value={quantity.toString()} onValueChange={(v) => setQuantity(Number(v))}>
                  <div className="grid grid-cols-4 gap-2">
                    {product.quantities.map((qty) => (
                      <div key={qty} className="relative">
                        <RadioGroupItem value={qty.toString()} id={`qty-${qty}`} className="peer sr-only" />
                        <Label
                          htmlFor={`qty-${qty}`}
                          className="flex items-center justify-center p-3 border-2 rounded-md cursor-pointer peer-data-[state=checked]:border-[#0066cc] peer-data-[state=checked]:bg-[#e6f2ff] hover:border-gray-400"
                        >
                          {qty}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Size */}
              <div className="mb-6">
                <Label className="text-base font-semibold mb-2 block">Size</Label>
                <RadioGroup
                  value={selectedOptions.size}
                  onValueChange={(v) => setSelectedOptions({ ...selectedOptions, size: v })}
                >
                  <div className="space-y-2">
                    {product.options.sizes.map((size) => (
                      <div key={size.value} className="flex items-center">
                        <RadioGroupItem value={size.value} id={`size-${size.value}`} />
                        <Label htmlFor={`size-${size.value}`} className="ml-2 cursor-pointer">
                          {size.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Paper Type */}
              <div className="mb-6">
                <Label className="text-base font-semibold mb-2 block">Paper Type</Label>
                <RadioGroup
                  value={selectedOptions.paper}
                  onValueChange={(v) => setSelectedOptions({ ...selectedOptions, paper: v })}
                >
                  <div className="space-y-2">
                    {product.options.paperTypes.map((paper) => (
                      <div key={paper.value} className="flex items-center">
                        <RadioGroupItem value={paper.value} id={`paper-${paper.value}`} />
                        <Label htmlFor={`paper-${paper.value}`} className="ml-2 cursor-pointer">
                          {paper.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Finish */}
              <div className="mb-6">
                <Label className="text-base font-semibold mb-2 block">Finish</Label>
                <RadioGroup
                  value={selectedOptions.finish}
                  onValueChange={(v) => setSelectedOptions({ ...selectedOptions, finish: v })}
                >
                  <div className="space-y-2">
                    {product.options.finishes.map((finish) => (
                      <div key={finish.value} className="flex items-center">
                        <RadioGroupItem value={finish.value} id={`finish-${finish.value}`} />
                        <Label htmlFor={`finish-${finish.value}`} className="ml-2 cursor-pointer">
                          {finish.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Design Upload */}
              <div className="mb-6">
                <Label className="text-base font-semibold mb-2 block">Upload Your Design</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0066cc] cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Drag and drop or click to upload</p>
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (Max 50MB)</p>
                </div>
              </div>

              <Button
                className="w-full bg-[#0066cc] hover:bg-[#0052a3] text-lg py-6"
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                {isAdding ? "Adding..." : "Add to Cart"}
              </Button>
            </Card>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#0066cc] mt-0.5" />
                <div>
                  <p className="font-semibold">Fast Shipping</p>
                  <p className="text-sm text-gray-600">Ships in 1-3 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#0066cc] mt-0.5" />
                <div>
                  <p className="font-semibold">Quality Guarantee</p>
                  <p className="text-sm text-gray-600">100% satisfaction or your money back</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#0066cc] mt-0.5" />
                <div>
                  <p className="font-semibold">Free Design Support</p>
                  <p className="text-sm text-gray-600">Our team can help refine your design</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-6 bg-[#f7f7f7] rounded-b-lg">
            <h3 className="text-xl font-bold mb-4">Product Details</h3>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#0066cc] mt-0.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews" className="p-6 bg-[#f7f7f7] rounded-b-lg">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {product.reviews.map((review, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-[#ffa500] text-[#ffa500]" />
                      ))}
                    </div>
                    <span className="font-semibold">{review.author}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="faq" className="p-6 bg-[#f7f7f7] rounded-b-lg">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {product.faqs.map((faq, i) => (
                <div key={i}>
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}

function getProductData(slug: string) {
  const products: Record<string, any> = {
    "business-cards": {
      name: "Standard Business Cards",
      category: "business-cards",
      categoryName: "Business Cards",
      description:
        "Make a lasting impression with professionally printed business cards. High-quality matte or glossy finish on durable cardstock.",
      basePrice: 9.99,
      originalPrice: 19.99,
      badge: "50% OFF",
      mainImage: "/standard-business-cards.jpg",
      thumbnails: [
        "/standard-business-cards.jpg",
        "/business-cards-front.jpg",
        "/business-cards-back.jpg",
        "/business-cards-stack.jpg",
      ],
      quantities: [50, 100, 250, 500, 1000, 2500],
      options: {
        sizes: [
          { label: '3.5" x 2" (Standard)', value: "standard" },
          { label: '3.5" x 2.5"', value: "large" },
          { label: '2" x 2" (Square)', value: "square" },
        ],
        paperTypes: [
          { label: "14pt Cardstock (Standard)", value: "14pt" },
          { label: "16pt Cardstock (Premium)", value: "16pt" },
          { label: "100lb Gloss Cover", value: "gloss" },
        ],
        finishes: [
          { label: "Matte", value: "matte" },
          { label: "Glossy", value: "glossy" },
          { label: "High Gloss UV", value: "uv" },
        ],
      },
      details: [
        "Professional quality printing",
        "Full color on both sides",
        "Multiple paper and finish options",
        "Quick turnaround - ships in 1-3 business days",
        "Free design review by our team",
        "100% satisfaction guarantee",
      ],
      reviews: [
        {
          author: "Sarah M.",
          rating: 5,
          comment: "Excellent quality! The cards look professional and the turnaround time was fast.",
        },
        {
          author: "John D.",
          rating: 5,
          comment: "Great value for money. Highly recommend for any small business owner.",
        },
        {
          author: "Emily R.",
          rating: 4,
          comment: "Very happy with the print quality. Colors came out vibrant.",
        },
      ],
      faqs: [
        {
          question: "What file format should I use?",
          answer: "We accept PDF, AI, EPS, JPG, and PNG files. For best results, use PDF with embedded fonts.",
        },
        {
          question: "How long does production take?",
          answer: "Standard production is 1-3 business days, plus shipping time.",
        },
        {
          question: "Can I see a proof before printing?",
          answer: "Yes! We provide a digital proof for your approval before production begins.",
        },
      ],
    },
    mugs: {
      name: "Custom Photo Mugs",
      category: "gifts",
      categoryName: "Gifts",
      description:
        "Create personalized ceramic mugs with your photos and text. Perfect for gifts or promotional items. Dishwasher and microwave safe.",
      basePrice: 12.99,
      originalPrice: 18.99,
      badge: "30% OFF",
      mainImage: "/custom-photo-mug.png",
      thumbnails: ["/custom-photo-mug.png", "/custom-mug.png", "/mug-both-sides.png", "/mug-packaging.png"],
      quantities: [1, 6, 12, 24, 48, 96],
      options: {
        sizes: [
          { label: "11 oz (Standard)", value: "11oz" },
          { label: "15 oz (Large)", value: "15oz" },
        ],
        paperTypes: [{ label: "White Ceramic", value: "white" }],
        finishes: [
          { label: "Full Wrap", value: "wrap" },
          { label: "Front Only", value: "front" },
        ],
      },
      details: [
        "High-quality ceramic construction",
        "Dishwasher safe",
        "Microwave safe",
        "Vibrant, fade-resistant printing",
        "Available in 11oz and 15oz sizes",
        "Perfect for photos, logos, or custom designs",
      ],
      reviews: [
        {
          author: "Lisa K.",
          rating: 5,
          comment: "Beautiful quality! The photo printed clearly and the mug feels sturdy.",
        },
        {
          author: "Mike T.",
          rating: 5,
          comment: "Ordered these for corporate gifts. Everyone loved them!",
        },
        {
          author: "Anna P.",
          rating: 5,
          comment: "Great personalized gift. Fast delivery and excellent packaging.",
        },
      ],
      faqs: [
        {
          question: "Are the mugs dishwasher safe?",
          answer: "Yes, all our mugs are dishwasher and microwave safe.",
        },
        {
          question: "What resolution should my image be?",
          answer: "For best results, use images that are at least 1500x1500 pixels at 300 DPI.",
        },
        {
          question: "Can I add text to my design?",
          answer: "You can add custom text, photos, or both to create your perfect mug.",
        },
      ],
    },
  }

  return (
    products[slug] || {
      name: "Product",
      category: "general",
      categoryName: "Products",
      description: "High-quality custom product",
      basePrice: 19.99,
      mainImage: "/placeholder.svg?height=500&width=500",
      thumbnails: [],
      quantities: [50, 100, 250, 500],
      options: {
        sizes: [{ label: "Standard", value: "standard" }],
        paperTypes: [{ label: "Standard", value: "standard" }],
        finishes: [{ label: "Standard", value: "standard" }],
      },
      details: [],
      reviews: [],
      faqs: [],
    }
  )
}
