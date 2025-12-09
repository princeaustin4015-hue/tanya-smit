"use client"

import { ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const specialOffers = [
  {
    id: 1,
    title: "Signup Bonus",
    description: "120% Signup Bonus",
    discount: "120%"
  },
  {
    id: 2,
    title: "Daily Bonus",
    description: "40% Daily Bonus",
    discount: "40%"
  },
  {
    id: 3,
    title: "Deposit Bonus",
    description: "30% Bonus on $20+ Deposit",
    discount: "30%"
  },
  {
    id: 4,
    title: "Regular Bonus",
    description: "20% Regular Bonus on $10+ Deposit",
    discount: "20%"
  },
  {
    id: 5,
    title: "Free Play",
    description: "$5 Free Play",
    discount: "$5"
  }
]

function SpecialOffer({ offer }: { offer: typeof specialOffers[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-gradient-to-r from-yellow-500/10 to-red-500/10 border border-yellow-400/20"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{offer.title}</h3>
          <p className="text-gray-300 text-xs sm:text-sm">{offer.description}</p>
        </div>
        <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-lg text-sm">
          {offer.discount}
        </div>
      </div>
      <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
        <Button variant="gold" size="sm" className="w-full">
          Claim Offer
        </Button>
      </Link>
    </motion.div>
  )
}

export default function StoreSection() {
  return (
    <section id="store" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-glow">Store</h2>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
        </motion.div>

        {/* Special Offers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {specialOffers.map((offer) => (
            <SpecialOffer key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

