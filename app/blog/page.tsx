"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TextReveal from "@/components/text-reveal"
import AnimatedBlob from "@/components/animated-blob"


const blogPosts = [
  {
    id: "post-surgery-exercises",
    title: "10 Essential Exercises for Post-Surgery Recovery",
    excerpt:
      "Learn about the most effective exercises to speed up your recovery after surgery and regain your strength and mobility safely.",
    image: "/blog1.jpeg?height=400&width=600",
    date: "May 15, 2023",
    category: "Recovery Tips",
    author: "Dr. Suresh",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "chronic-pain-management",
    title: "Understanding Chronic Pain: Causes and Management",
    excerpt:
      "Our experts explain the science behind chronic pain and effective strategies for managing it in your daily life.",
    image: "/blog2.jpeg?height=400&width=600",
    date: "April 28, 2023",
    category: "Expert Advice",
    author: "Dr. Mugilvanan",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "benefits-of-stretching",
    title: "The Benefits of Regular Stretching for All Ages",
    excerpt:
      "Discover how incorporating simple stretching routines into your daily life can improve flexibility, reduce pain, and enhance overall well-being.",
    image: "/blog3.jpeg?height=400&width=600",
    date: "March 12, 2023",
    category: "Wellness",
    author: "Madhumitha",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "sports-injury-prevention",
    title: "Preventing Common Sports Injuries: A Guide for Athletes",
    excerpt:
      "Learn proactive strategies to prevent common sports injuries and keep yourself in the game longer with these expert tips.",
    image: "/injury.jpeg?height=400&width=600",
    date: "February 25, 2023",
    category: "Sports Therapy",
    author: "Dr. Kunal ",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "elderly-fall-prevention",
    title: "Fall Prevention Strategies for Older Adults",
    excerpt:
      "Discover practical tips and exercises to improve balance and reduce the risk of falls for seniors living independently.",
    image: "/walk.jpeg?height=400&width=600",
    date: "January 18, 2023",
    category: "Geriatric Care",
    author: "Dr. Ramesh Kumar",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "desk-ergonomics",
    title: "Ergonomics at Home: Setting Up Your Workspace",
    excerpt:
      "Working from home? Learn how to set up an ergonomic workspace to prevent pain and discomfort during long hours at your desk.",
    image: "/work.jpeg?height=400&width=600",
    date: "December 5, 2022",
    category: "Ergonomics",
    author: "Rohit",
    authorImage: "/placeholder.svg?height=80&width=80",
  },
]

const categories = [
  "All",
  "Recovery Tips",
  "Expert Advice",
  "Wellness",
  "Sports Therapy",
  "Geriatric Care",
  "Ergonomics",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {}
      <AnimatedBlob color="#ACE1AF" size="400px" top="-200px" left="-200px" />
      <AnimatedBlob color="#FFB4A2" size="350px" bottom="-150px" right="-150px" delay={2} />

      {}
      <section className="bg-gradient-to-r from-reccova-green to-reccova-mint text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/blogback.jpeg?height=200&width=200')] bg-center bg-cover bg-no-repeat opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-9 text-center"> <span className="gradient-text">Recauva Blog</span></h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-3xl max-w-5xl mx-auto text-center mb-8 text-black font-semibold">
              Expert insights, tips, and advice from our physiotherapists to help you on your wellness journey.
            </p>
          </TextReveal>
        </div>
      </section>

      {}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-2/3 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" size={18} />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/3">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-reccova-green"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet">
        <div className="container mx-auto px-4 relative z-10">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-black">{post.date}</span>
                      <span className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-reccova-green/40 to-reccova-mint/30 text-reccova-green rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl text-black font-semibold mb-3">{post.title}</h3>

                    <p className="text-black mb-4">{post.excerpt}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          width={32}
                          height={32}
                          className="rounded-full mr-2 border-2 border-reccova-green/20"
                        />
                        <span className="text-sm text-black">{post.author}</span>
                      </div>

                      <Button
                        variant="outline"
                        className="border-reccova-green text-reccova-green hover:bg-reccova-green/5 rounded-full"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
              <p className="text-black mb-6">
                We couldn't find any articles matching your search criteria. Try adjusting your search or browse all
                articles.
              </p>
              <Button
                className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-white rounded-full"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {}
      <section className="py-16 bg-[#F2EFE7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-4xl font-bold mb-4 text-black">Subscribe to Our Newsletter</h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-black font-semibold lg:text-2xl mb-8">
                Stay updated with the latest articles, tips, and advice from our expert physiotherapists.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <Input type="email" placeholder="Your email address" className="flex-1 rounded-full" required />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-white rounded-full"
                >
                  Subscribe
                </Button>
              </form>
            </TextReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

