import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, Clock, HelpCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0066cc] to-[#003d7a] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-balance max-w-2xl mx-auto">
              We're here to help! Get in touch with our customer support team
            </p>
          </div>
        </section>

        {/* Order Placement Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-[#003d7a]">Ready to Place Your Order?</h2>
                <p className="text-lg text-gray-600">
                  Contact us through your preferred method and our team will assist you with your order
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a
                      href="https://wa.me/message/Z6LP4UWYDAGLN1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                      <p className="text-gray-600 text-sm mb-4">Chat with us instantly</p>
                      <Button className="bg-green-600 hover:bg-green-700 w-full">Message on WhatsApp</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a
                      href="mailto:info@rawahainternationalpvtltd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-600 text-sm mb-4">Send us your order details</p>
                      <Button className="bg-red-600 hover:bg-red-700 w-full">Send Email</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a href="tel:+8619819208835" className="block">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Call Us</h3>
                      <p className="text-gray-600 text-sm mb-4">Speak with our team</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">Call Now</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a
                      href="https://www.facebook.com/share/17UvjTAQeh/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Facebook</h3>
                      <p className="text-gray-600 text-sm mb-4">Message us on Facebook</p>
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">Chat on Facebook</Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a
                      href="https://www.instagram.com/rawahainternationalpvtltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Instagram</h3>
                      <p className="text-gray-600 text-sm mb-4">DM us on Instagram</p>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full">
                        Message on Instagram
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <a
                      href="https://www.linkedin.com/in/rawaha-international-459637335"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                      <p className="text-gray-600 text-sm mb-4">Connect with us</p>
                      <Button className="bg-blue-700 hover:bg-blue-800 w-full">Message on LinkedIn</Button>
                    </a>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Include your cart details and our team will respond with a custom quote and payment options
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#003d7a]">How Can We Help You?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[#0066cc]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our customer support team</p>
                  <p className="text-2xl font-bold text-[#0066cc] mb-2">+8619819208835</p>
                  <p className="text-sm text-gray-500 mt-4">Mon-Fri: 8am-11pm EST</p>
                  <p className="text-sm text-gray-500">Sat-Sun: 9am-9pm EST</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-[#0066cc]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with a support agent in real-time</p>
                  <Button className="bg-[#0066cc] hover:bg-[#003d7a] mt-4">Start Chat Now</Button>
                  <p className="text-sm text-gray-500 mt-4">Average wait time: 2 mins</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-[#0066cc]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>
                  <p className="text-lg font-semibold text-[#0066cc] mb-2">info@rawahainternationalpvtltd.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-[#003d7a]">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="orderNumber">Order Number (if applicable)</Label>
                      <Input id="orderNumber" placeholder="VP-123456789" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#0066cc] hover:bg-[#003d7a]">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help Center & FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-[#0066cc]" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#003d7a]">Looking for Quick Answers?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Visit our Help Center for instant answers to common questions about orders, shipping, design, and more.
              </p>
              <Button size="lg" variant="outline" className="border-[#0066cc] text-[#0066cc] bg-transparent">
                Visit Help Center
              </Button>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#003d7a]">Our Headquarters</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-[#0066cc] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Corporate Office</h3>
                      <p className="text-gray-600">275 Wyman Street</p>
                      <p className="text-gray-600">Waltham, MA 02451</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <Clock className="w-6 h-6 text-[#0066cc] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#0066cc] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">General Inquiries</h3>
                      <p className="text-gray-600">info@rawahainternationalpvtltd.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
                <p className="text-gray-500">Map Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
