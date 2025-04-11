"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet pt-20 pb-8 relative overflow-hidden">
      {}
      <div className="absolute top-0 left-0 w-64 h-64 bg-reccova-green/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-reccova-violet/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <Image
                src="/reccova logo.jpeg"
                alt="Reccova Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
            <p className="text-black mb-6">
              Professional physiotherapy services in the comfort of your home. We bring healing to your doorstep with
              personalized care and expert therapists.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-green"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-green"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-reccova-green"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", text: "Home", color: "green" },
                { href: "/services", text: "Services", color: "violet" },
                { href: "/blog", text: "Blog", color: "pink" },
                { href: "/testimonials", text: "Testimonials", color: "green" },
                { href: "/contact", text: "Contact", color: "violet" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-black hover:text-gray-900 transition-colors flex items-center"
                  >
                    <span className={`bg-reccova-${link.color}/10 w-2 h-2 rounded-full mr-2`}></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Services</h4>
            <ul className="space-y-3">
              {[
                { href: "#rehabilitation", text: "Rehabilitation" },
                { href: "#sports-injury", text: "Sports Injury" },
                { href: "#geriatric-care", text: "Geriatric Care" },
                { href: "#neurological", text: "Neurological Therapy" },
                { href: "#pediatric", text: "Pediatric Therapy" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={`/services${service.href}`}
                    className="text-black hover:text-gray-900 transition-colors flex items-center"
                  >
                    <span className="bg-black w-2 h-2 rounded-full mr-2"></span>
                    {service.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-black">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-reccova-green mt-1 flex-shrink-0" />
                <span className="text-black">Madiwala, Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-reccova-violet flex-shrink-0" />
                <a href="tel:+916383791589" className="text-black hover:text-gray-900 transition-colors">
                  +91 6383791589
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-reccova-pink flex-shrink-0" />
                <a href="mailto:mukil@gmail.com" className="text-black hover:text-gray-900 transition-colors">
                  mukil@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-black mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Reccova. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { href: "/privacy-policy", text: "Privacy Policy" },
                { href: "/terms", text: "Terms of Service" },
                { href: "/sitemap", text: "Sitemap" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  {link.text}
                </Link>
              ))}
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

