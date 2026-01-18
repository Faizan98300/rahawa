import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Users, Award, Globe, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0066cc] to-[#003d7a] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Rawaha</h1>
            <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
              Empowering small businesses and individuals to make a lasting impression since 1995
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#003d7a]">Our Story</h2>
                <p className="text-lg leading-relaxed mb-4">
                  About Us
                  With a vision to excel in the business of Paper Manufacturing, Import & Export, Rawaha International (Private) Limited was incorporated on April 14, 2016 under Companies Ordinance,
                  1984.
                  The company privately owned, headed by a Chief Executive officer, has an efficient board of directors that supervise the operations of the company and carry out the decision making. Rawaha International comprises of a team of strong professionals who accomplish their defined roles to achieve the overall business objectives according to the highest standards of competence and corporate responsibility.
                  The head office of the company is located in Punjab Paper Market, Opposite Police Station, Abkari Road, New Anarkali, Lahore.
                  Vision
                  To be one of the leading organizations in the industry, effectively achieving business objectives, attaining ultimate client satisfaction and pursuing multiple growth opportunities while remaining ethically and socially responsible.
                  Mission Statement
                  * To provide our customers with highest quality products in a safe, reliable, efficient and environmentally sound manner.
                  * Combining the latest technology with most efficient management systems to seek leadership and trend setting within the industry.
                  * Developing deep-rooted and cordial relationship with all customers and stakeholders and maximization of returns to the stakeholders.
                  * Maintaining highest standards of corporate culture while providing the employees an opportunity to work in a competitive environment and swift career progression.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  We believe that everyone, regardless of budget or expertise, deserves professional marketing materials
                  to help them succeed. Our mission is to make it easy and affordable for small businesses to create
                  custom, professional marketing.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we serve millions of customers worldwide, helping them bring their visions to life with
                  high-quality printed products and marketing services.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/modern-office-workspace-with-team-collaboration.jpg"
                  alt="Rawaha Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#003d7a]">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-gray-600">
                  We put our customers at the heart of everything we do, ensuring their success is our success.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering the highest quality products and services at affordable prices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                <p className="text-gray-600">
                  We're proud to serve millions of customers worldwide, helping businesses thrive globally.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg text-center">
                <div className="bg-[#e6f2ff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#0066cc]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Passion & Innovation</h3>
                <p className="text-gray-600">
                  We're passionate about innovation and continuously improving our products and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-[#003d7a]">Rawaha By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#0066cc] mb-2">10+</div>
                <p className="text-lg text-gray-600">Years in Business</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0066cc] mb-2">2000+</div>
                <p className="text-lg text-gray-600">Customers Worldwide</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0066cc] mb-2">4+</div>
                <p className="text-lg text-gray-600">Countries Served</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#0066cc] mb-2">500+</div>
                <p className="text-lg text-gray-600">Dedicated Employees</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="bg-[#0066cc] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="text-lg leading-relaxed mb-8">
                We're committed to reducing our environmental impact and creating a more sustainable future. From using
                responsibly sourced materials to optimizing our production processes, we're constantly working to make
                our operations more eco-friendly.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/sustainability">Learn About Our Sustainability Efforts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#003d7a]">Join Our Team</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who are passionate about helping small businesses succeed.
                Explore career opportunities at Rawaha.
              </p>
              <Button size="lg" className="bg-[#0066cc] hover:bg-[#003d7a]" asChild>
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
