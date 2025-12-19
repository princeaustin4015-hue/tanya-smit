"use client"

import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { HelpCircle, Book, MessageCircle, Search, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HelpCenterPage() {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      questions: [
        {
          q: "How do I create an account?",
          a: "Click on the 'Play Now' button in the hero section, then follow the prompts to create your account using your preferred social media platform.",
        },
        {
          q: "What games are available?",
          a: "We offer a variety of popular games. Visit the Games section to see all available titles and their features.",
        },
        {
          q: "How do I join tournaments?",
          a: "Tournaments are currently in development. Check back soon for exciting competitive events!",
        },
      ],
    },
    {
      icon: MessageCircle,
      title: "Account & Profile",
      questions: [
        {
          q: "How do I update my profile?",
          a: "Navigate to your profile settings through your account dashboard to update your information, avatar, and preferences.",
        },
        {
          q: "Can I change my username?",
          a: "Username changes are available through your account settings. Some restrictions may apply to prevent abuse.",
        },
        {
          q: "How do I reset my password?",
          a: "If you're using social media login, your password is managed by that platform. For other accounts, use the 'Forgot Password' link on the login page.",
        },
      ],
    },
    {
      icon: Search,
      title: "Technical Support",
      questions: [
        {
          q: "The game won't load. What should I do?",
          a: "Try clearing your browser cache, disabling browser extensions, or using a different browser. If the issue persists, contact our support team.",
        },
        {
          q: "I'm experiencing lag during gameplay",
          a: "Check your internet connection, close other applications, and ensure your browser is up to date. For mobile devices, try switching between WiFi and mobile data.",
        },
        {
          q: "How do I report a bug?",
          a: "Contact our support team at support@tanyasmit.gg with details about the bug, including screenshots and steps to reproduce the issue.",
        },
      ],
    },
    {
      icon: HelpCircle,
      title: "Community & Fair Play",
      questions: [
        {
          q: "How do I report inappropriate behavior?",
          a: "Use the report feature available in-game or contact our moderation team directly at support@tanyasmit.gg with details of the incident.",
        },
        {
          q: "What are the community rules?",
          a: "Please review our Rules & Fair Play page for detailed guidelines on expected behavior and community standards.",
        },
        {
          q: "How are leaderboards calculated?",
          a: "Leaderboards are based on your performance in games and tournaments. Rankings are updated regularly to reflect current standings.",
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-20 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-glow">
              Help Center
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Find answers to common questions and get the support you need.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12"
          >
            <Link
              href="/contact-us"
              className="glass-card rounded-xl p-6 hover:border-yellow-400/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Contact Support
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Get in touch with our support team
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </div>
            </Link>
            <Link
              href="/rules-and-fair-play"
              className="glass-card rounded-xl p-6 hover:border-yellow-400/50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Rules & Fair Play
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Learn about our community guidelines
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
              </div>
            </Link>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + categoryIndex * 0.1 }}
                  className="glass-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-xl glass-effect bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 flex-shrink-0">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-glow">
                      {category.title}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="border-l-2 border-yellow-400/30 pl-4 py-2"
                      >
                        <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">
                          {faq.q}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Still Need Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow">
              Still Need Help?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

