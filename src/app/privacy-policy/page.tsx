"use client"

import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { Lock, Eye, Shield, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Account information (username, email address, profile data)",
        "Gameplay data (scores, achievements, tournament participation)",
        "Device information (IP address, browser type, operating system)",
        "Usage data (pages visited, time spent, interactions)",
        "Communication data (support tickets, community posts)",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our gaming services",
        "To manage your account and process transactions",
        "To communicate with you about updates and events",
        "To ensure fair play and prevent fraud",
        "To analyze usage patterns and enhance user experience",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "We use industry-standard encryption to protect your data",
        "Access to personal information is restricted to authorized personnel",
        "We regularly update our security measures",
        "Your data is stored on secure servers with backup systems",
        "We comply with applicable data protection regulations",
      ],
    },
    {
      icon: Lock,
      title: "Your Rights",
      content: [
        "Access your personal data at any time",
        "Request correction of inaccurate information",
        "Request deletion of your account and data",
        "Opt-out of marketing communications",
        "File a complaint with relevant data protection authorities",
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-20 sm:pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-glow">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mt-4">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mb-8"
          >
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At TANYA SMIT, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our gaming platform and services.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl glass-effect bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 flex-shrink-0">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-glow">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="text-yellow-400 mt-1.5 flex-shrink-0">•</span>
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>
                Email:{" "}
                <a
                  href="mailto:support@tanyasmit.gg"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  support@tanyasmit.gg
                </a>
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-4">
                We reserve the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

