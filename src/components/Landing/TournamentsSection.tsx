"use client"

import { Trophy } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tournaments = [
  {
    id: 1,
    name: "Mega Championship",
    game: "Mega Fortune"
  },
  {
    id: 2,
    name: "Weekly Showdown",
    game: "Blackjack Pro"
  },
  {
    id: 3,
    name: "Elite Tournament",
    game: "Poker Master"
  },
  {
    id: 4,
    name: "Daily Challenge",
    game: "Roulette Royal"
  }
]

function TournamentCard({ tournament, index }: { tournament: typeof tournaments[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="h-5 w-5 text-gray-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
              {tournament.name}
            </h3>
          </div>
          <p className="text-gray-400 text-sm mb-3">{tournament.game}</p>
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500/20 text-yellow-400">
          Coming Soon
        </div>
      </div>

      <div className="flex items-center justify-center pt-4 border-t border-white/10">
        <div className="text-center">
          <div className="text-sm text-gray-400 mb-2">Tournament details will be announced soon</div>
          <div className="text-lg sm:text-xl font-bold text-yellow-400">Coming Soon</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function TournamentsSection() {
  return (
    <section id="tournaments" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-glow">Tournaments</h2>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tournaments.map((tournament, index) => (
            <TournamentCard key={tournament.id} tournament={tournament} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

