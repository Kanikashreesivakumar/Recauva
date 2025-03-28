import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet pt-20 pb-8 relative overflow-hidden">
      {}
      <div className="absolute top-0 left-0 w-64 h-64 bg-reccova-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-reccova-violet/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-6xl font-bold gradient-text mb-10">Reccova</h2>
            <p className="text-black mb-8">
              Professional physiotherapy services in the comfort of your home. We bring healing to your doorstep with
              personalized care and expert therapists.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-green"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-pink"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-violet"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-black hover:text-black transition-colors flex items-center">
                  <span className="bg-reccova-green/10 w-2 h-2 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-black hover:text-black transition-colors flex items-center"
                >
                  <span className="bg-reccova-violet/10 w-2 h-2 rounded-full mr-2 "></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-black hover:text-gray-900 transition-colors flex items-center">
                  <span className="bg-reccova-pink/10 w-2 h-2 rounded-full mr-2 "></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-black hover:text-black transition-colors flex items-center"
                >
                  <span className="bg-reccova-green/10 w-2 h-2 rounded-full mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-gray-900 transition-colors flex items-center">
                  <span className="bg-reccova-violet/10 w-2 h-2 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#rehabilitation"
                  className="text-black hover:text-gray-900 transition-colors flex items-center"
                >
                  <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                  Rehabilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#sports-injury"
                  className="text-black hover:text-gray-900 transition-colors flex items-center"
                >
                  <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                  Sports Injury
                </Link>
              </li>
              <li>
                <Link
                  href="/services#geriatric-care"
                  className="text-black hover:text-gray-900 transition-colors flex items-center"
                >
                  <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                  Geriatric Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services#neurological"
                  className="text-black hover:text-gray-900 transition-colors flex items-center"
                >
                  <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                  Neurological Therapy
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pediatric"
                  className="text-black hover:text-gray-900 transition-colors flex items-center"
                >
                  <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                  Pediatric Therapy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-reccova-green mt-1 flex-shrink-0" />
                <span className="text-black">123 Healing Street, Wellness City, WC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-reccova-violet flex-shrink-0" />
                <a href="tel:+1234567890" className="text-black hover:text-gray-900 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-reccova-pink flex-shrink-0" />
                <a href="mailto:info@reccova.com" className="text-black hover:text-gray-900 transition-colors">
                  info@reccova.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-0">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Reccova. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-black hover:text-gray-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-black hover:text-gray-700 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-black hover:text-gray-700 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="text-center mt-6 text-black text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-reccova-pink" /> for better health and wellness
          </div>
        </div>
      </div>
    </footer>
  )
}

