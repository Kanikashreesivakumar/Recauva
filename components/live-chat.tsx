"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ sender: "user" | "support"; text: string; time: string }[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setIsTyping(true)

        setTimeout(() => {
          setIsTyping(false)
          setMessages([
            {
              sender: "support",
              text: "Hello! Welcome to Recauva support. How can I help you today?",
              time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            },
          ])
        }, 2000)
      }, 1000)
    }
  }, [isOpen, messages.length])

  const handleSendMessage = () => {
    if (!message.trim()) return

    const userMessage = {
      sender: "user" as const,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, userMessage])
    setMessage("")

   
    setTimeout(() => {
      setIsTyping(true)

      setTimeout(() => {
        setIsTyping(false)

        const responses = [
          "Thank you for your message. One of our physiotherapists will get back to you shortly.",
          "I understand. Let me check the available appointments for you.",
          "We offer home visits throughout the city. Is there a specific area you're located in?",
          "Our specialists are experienced in treating various conditions. Can you tell me more about your needs?",
          "You can book an appointment through our online system or I can help you schedule one now.",
        ]

        const randomResponse = responses[Math.floor(Math.random() * responses.length)]

        setMessages((prev) => [
          ...prev,
          {
            sender: "support",
            text: randomResponse,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ])
      }, 2000)
    }, 1000)
  }

  return (
    <>
      {}
      <motion.button
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-reccova-green to-reccova-mint text-white rounded-full p-4 shadow-lg hover-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {}
            <div className="bg-gradient-to-r from-reccova-green to-reccova-mint text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support" />
                  <AvatarFallback>RC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Recauva Support</h3>
                  <p className="text-xs text-white/80">Online</p>
                </div>
              </div>
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </motion.button>
            </div>

            {}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.sender === "support" && (
                    <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support" />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-reccova-green to-reccova-mint text-white"
                        : "bg-white text-black border border-gray-200"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                      {msg.time}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Support" />
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <div className="bg-white border border-gray-200 rounded-2xl p-3">
                    <div className="flex space-x-1">
                      <motion.div
                        className="h-2 w-2 bg-reccova-green rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0 }}
                      />
                      <motion.div
                        className="h-2 w-2 bg-reccova-violet rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.15 }}
                      />
                      <motion.div
                        className="h-2 w-2 bg-reccova-pink rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {}
            <div className="p-3 border-t">
              <form
                className="flex items-center"
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
              >
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 mr-2 rounded-full"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-white rounded-full"
                  disabled={!message.trim()}
                >
                  <Send size={18} />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

