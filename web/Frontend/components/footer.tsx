import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">RentACar.lk</span>
            </div>
            <p className="text-gray-400">
              Sri Lanka's premier peer-to-peer car rental platform connecting car owners with renters.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/vehicles" className="hover:text-orange-400 transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link href="/owners/get-started" className="hover:text-orange-400 transition-colors">
                  List Your Car
                </Link>
              </li>
              <li>
                <Link href="/customers/get-started" className="hover:text-orange-400 transition-colors">
                  Rent a Car
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-orange-400 transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-orange-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-orange-400 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-orange-400 transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="hover:text-orange-400 transition-colors">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RentACar.lk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
