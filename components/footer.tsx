import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#003d7a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:underline">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">About Rawaha</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press Center
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:underline">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products & Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/business-cards" className="hover:underline">
                  Business Cards
                </Link>
              </li>
              <li>
                <Link href="/category/marketing" className="hover:underline">
                  Marketing Materials
                </Link>
              </li>
              <li>
                <Link href="/category/signs" className="hover:underline">
                  Signs & Banners
                </Link>
              </li>
              <li>
                <Link href="/category/promotional" className="hover:underline">
                  Promotional Products
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Partners</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/affiliates" className="hover:underline">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/resellers" className="hover:underline">
                  Reseller Program
                </Link>
              </li>
              <li>
                <Link href="/designers" className="hover:underline">
                  For Designers
                </Link>
              </li>
              <li>
                <Link href="/referral" className="hover:underline">
                  Refer a Friend
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#0066cc] pt-8 text-center text-sm">
          <p>&copy; 2025 Rawaha. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
