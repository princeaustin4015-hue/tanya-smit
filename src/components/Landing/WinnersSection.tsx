import { Trophy, DollarSign, Crown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const latestPlayers = [
  { id: 1, name: "Alex M.", xp: "12,450 XP", game: "MF", avatar: "👨" },
  { id: 2, name: "Sarah K.", xp: "8,920 XP", game: "BP", avatar: "👩" },
  { id: 3, name: "Mike R.", xp: "15,680 XP", game: "RR", avatar: "👨‍💼" },
  { id: 4, name: "Emma L.", xp: "6,340 XP", game: "LS", avatar: "👩‍💻" },
  { id: 5, name: "David P.", xp: "22,100 XP", game: "PM", avatar: "👨‍🎓" }
]

const topPlayers = [
  { id: 1, name: "John D.", xp: "125,000 XP", rank: 1, avatar: "🤴" },
  { id: 2, name: "Lisa W.", xp: "98,500 XP", rank: 2, avatar: "👸" },
  { id: 3, name: "Robert M.", xp: "87,200 XP", rank: 3, avatar: "👨‍💼" },
  { id: 4, name: "Anna S.", xp: "76,800 XP", rank: 4, avatar: "👩‍🚀" },
  { id: 5, name: "Chris B.", xp: "65,400 XP", rank: 5, avatar: "👨‍🎨" }
]

interface Player {
  id: number;
  name: string;
  xp: string;
  game?: string;
  rank?: number;
  avatar: string;
}

function PlayerCard({ player, showGame = false }: { player: Player, showGame?: boolean }) {
  return (
    <div className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:bg-white/5 transition-colors">
      <div className="text-2xl">{player.avatar}</div>
      <div className="flex-1">
        <div className="text-white font-semibold">{player.name}</div>
        {showGame && <div className="text-gray-400 text-sm">{player.game}</div>}
        {player.rank && (
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-sm">#{player.rank}</span>
          </div>
        )}
      </div>
      <div className="text-green-400 font-bold">{player.xp}</div>
    </div>
  )
}

export default function WinnersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Achievements */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Latest Achievements</h3>
            </div>
            <div className="space-y-3">
              {latestPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} showGame />
              ))}
            </div>
          </div>

          {/* Token Pool */}
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <DollarSign className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Token Pool</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold gold-gradient mb-2">2,847,392</div>
              <div className="text-gray-400">Total Tokens Available</div>
            </div>
            <div className="mb-6">
              <div className="text-6xl mb-4">💰</div>
              <div className="text-gray-300 text-sm mb-4">
                Token pool increases as players earn XP and achievements
              </div>
            </div>
            <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
              <Button variant="gold" size="lg" className="w-full">
                <Trophy className="h-5 w-5 mr-2" />
                Play Now
              </Button>
            </Link>
          </div>

          {/* Top Players */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Crown className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Top Players</h3>
            </div>
            <div className="space-y-3">
              {topPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}