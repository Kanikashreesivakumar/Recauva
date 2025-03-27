"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "./booking-modal"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [logoImage, setLogoImage] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative">
              {logoImage ? (
                <img src={logoImage || "/placeholder.svg"} alt="Reccova Logo" className="h-12 w-auto object-contain" />
              ) : (
                <div className="relative">
                  <motion.div
                    className="absolute -z-10 w-12 h-12 rounded-full bg-reccova-green/30 blur-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-2xl font-bold gradient-text"
                  >
                    Reccova
                  </motion.div>
                </div>
              )}

              <label
                htmlFor="logo-upload"
                className="absolute -right-2 -bottom-2 bg-white rounded-full p-1 shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
                title="Upload Logo"
              >
                <Upload size={14} className="text-gray-500" />
                <input id="logo-upload" type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link relative font-medium transition-colors hover:text-gray-900 ${
                  pathname === link.href ? "text-gray-900 active" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="btn-gradient text-white rounded-full px-6" onClick={() => setIsBookingModalOpen(true)}>
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`py-2 font-medium text-lg ${pathname === link.href ? "gradient-text" : "text-gray-700"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  className="btn-gradient text-white rounded-full w-full py-6"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsBookingModalOpen(true)
                  }}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}

