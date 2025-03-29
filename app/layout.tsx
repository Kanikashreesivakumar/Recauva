import "./globals.css";
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/loading-animation"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import LiveChat from "@/components/live-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Recauva  - Home Physiotherapy Services",
  description: "Professional physiotherapy services in the comfort of your home. Book your session today.",
  keywords: "physiotherapy, home care, physical therapy, rehabilitation, recovery, health",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LoadingAnimation />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <LiveChat />
        </ThemeProvider>
      </body>
    </html>
  )
}