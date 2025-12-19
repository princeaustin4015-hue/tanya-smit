"use client"

import Navbar from "@/components/global/Navbar"
import Footer from "@/components/global/Footer"
import { Shield, Users, AlertTriangle, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function RulesAndFairPlayPage() {
  const rules = [
    {
      icon: Shield,
      title: "Code of Conduct",
      items: [
        "Respect all players regardless of skill level, background, or identity",
        "No harassment, bullying, or discriminatory behavior",
        "No cheating, exploiting bugs, or using unauthorized software",
        "No sharing of personal information without consent",
        "Maintain sportsmanship in all competitions and interactions",
      ],
    },
    {
      icon: Users,
      title: "Community Guidelines",
      items: [
        "Keep discussions constructive and on-topic",
        "No spamming, trolling, or disruptive behavior",
        "Follow platform-specific rules for each game",
        "Report violations to moderators promptly",
        "Help create a welcoming environment for all members",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Tournament Rules",
      items: [
        "All participants must follow game-specific rules",
        "No account sharing or unauthorized assistance",
        "Disputes must be reported within 24 hours",
        "Decisions by tournament administrators are final",
        "Violations may result in disqualification or ban",
      ],
    },
    {
      icon: CheckCircle,
      title: "Fair Play Standards",
      items: [
        "Equal opportunity for all participants",
        "Transparent scoring and ranking systems",
        "Regular monitoring for suspicious activity",
        "Fair matchmaking and balanced teams",
        "Clear communication of all rules and changes",
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
              Rules & Fair Play
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Our commitment to maintaining a fair, respectful, and enjoyable gaming environment for everyone.
            </p>
          </motion.div>

          {/* Rules Sections */}
          <div className="space-y-6">
            {rules.map((rule, index) => {
              const IconComponent = rule.icon
              return (
                <motion.div
                  key={rule.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-xl glass-effect bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 flex-shrink-0">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white text-glow">
                      {rule.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {rule.items.map((item, itemIndex) => (
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

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 sm:p-8 mt-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 text-glow">
              Enforcement & Appeals
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              Violations of these rules may result in warnings, temporary suspensions, or permanent bans depending on the severity and frequency of the offense. We take all reports seriously and investigate them thoroughly.
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              If you believe you have been unfairly penalized, you may appeal by contacting our support team at{" "}
              <a
                href="mailto:support@tanyasmit.gg"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                support@tanyasmit.gg
              </a>
              . All appeals will be reviewed within 5-7 business days.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

