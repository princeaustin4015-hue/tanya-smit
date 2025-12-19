"use client"

import { Trophy, Crown, Medal, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const leaderboardData = [
  { id: 1, name: "John D.", avatar: "🤴" },
  { id: 2, name: "Lisa W.", avatar: "👸" },
  { id: 3, name: "Robert M.", avatar: "👨‍💼" },
  { id: 4, name: "Anna S.", avatar: "👩‍🚀" },
  { id: 5, name: "Chris B.", avatar: "👨‍🎨" },
  { id: 6, name: "Sarah K.", avatar: "👩" },
  { id: 7, name: "Mike R.", avatar: "👨" },
  { id: 8, name: "Emma L.", avatar: "👩‍💻" },
  { id: 9, name: "David P.", avatar: "👨‍🎓" },
  { id: 10, name: "Alex M.", avatar: "👨" }
]

function RankIcon({ index }: { index: number }) {
  if (index === 0) {
    return <Crown className="h-6 w-6 text-yellow-400" />
  }
  if (index === 1) {
    return <Medal className="h-6 w-6 text-gray-300" />
  }
  if (index === 2) {
    return <Medal className="h-6 w-6 text-amber-600" />
  }
  return null
}

function LeaderboardRow({ player, index }: { player: typeof leaderboardData[0], index: number }) {
  const isTopThree = index < 3
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 rounded-lg sm:rounded-xl ${
        isTopThree 
          ? 'glass-effect bg-gradient-to-r from-yellow-500/10 to-transparent' 
          : 'glass-effect hover:bg-white/5'
      } transition-all duration-300`}
    >
      <div className="flex items-center justify-center w-8 sm:w-10 md:w-12 flex-shrink-0">
        <RankIcon index={index} />
      </div>
      
      <div className="text-2xl sm:text-3xl flex-shrink-0">{player.avatar}</div>
      
      <div className="flex-1">
        <h3 className={`font-bold ${isTopThree ? 'text-yellow-400' : 'text-white'}`}>
          {player.name}
        </h3>
      </div>
      
      {isTopThree && (
        <Award className={`h-6 w-6 ${
          index === 0 ? 'text-yellow-400' : 
          index === 1 ? 'text-gray-300' : 
          'text-amber-600'
        }`} />
      )}
    </motion.div>
  )
}

export default function LeaderboardsSection() {
  return (
    <section id="leaderboards" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-glow">Leaderboards</h2>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2 glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <div className="flex items-center mb-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-6 w-6 text-green-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Top Players</h3>
              </div>
            </div>
            
            <div className="space-y-2">
              {leaderboardData.map((player, index) => (
                <LeaderboardRow key={player.id} player={player} index={index} />
              ))}
            </div>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Top Player</h3>
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{leaderboardData[0].avatar}</div>
              <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">{leaderboardData[0].name}</div>
              <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
                <Button variant="gold" size="lg" className="w-full">
                  Challenge Top Player
                </Button>
              </Link>
            </div>

            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Your Stats</h3>
              <div className="pt-4">
                <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
                  <Button variant="glass" size="sm" className="w-full">
                    View Full Leaderboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

