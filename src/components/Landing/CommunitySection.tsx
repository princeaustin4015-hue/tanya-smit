"use client"

import { Users, MessageCircle, Heart, Share2, TrendingUp, Star } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const communityPosts = [
  {
    id: 1,
    author: "Alex M.",
    avatar: "👨",
    content: "Just hit my biggest win ever! $12,450 on Mega Fortune! 🎉",
    likes: 245,
    comments: 32,
    shares: 18,
    time: "2h ago",
    game: "Mega Fortune"
  },
  {
    id: 2,
    author: "Sarah K.",
    avatar: "👩",
    content: "The new tournament format is amazing! Can't wait for the next one!",
    likes: 189,
    comments: 45,
    shares: 12,
    time: "5h ago",
    game: "Tournament"
  },
  {
    id: 3,
    author: "Mike R.",
    avatar: "👨‍💼",
    content: "Tips for Blackjack Pro: Always count your cards and stay disciplined!",
    likes: 312,
    comments: 67,
    shares: 24,
    time: "8h ago",
    game: "Blackjack Pro"
  },
  {
    id: 4,
    author: "Emma L.",
    avatar: "👩‍💻",
    content: "Just joined the community! Excited to play with everyone! 🎮",
    likes: 156,
    comments: 28,
    shares: 8,
    time: "12h ago",
    game: "General"
  }
]

const topContributors = [
  { id: 1, name: "John D.", avatar: "🤴", points: 12500, badge: "Champion" },
  { id: 2, name: "Lisa W.", avatar: "👸", points: 9800, badge: "Expert" },
  { id: 3, name: "Robert M.", avatar: "👨‍💼", points: 8700, badge: "Pro" }
]

function CommunityPost({ post, index }: { post: typeof communityPosts[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/5 transition-all duration-300"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="text-3xl sm:text-4xl flex-shrink-0">{post.avatar}</div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-white font-bold">{post.author}</h3>
            <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">
              {post.game}
            </span>
            <span className="text-gray-400 text-sm">{post.time}</span>
          </div>
          <p className="text-gray-200 leading-relaxed">{post.content}</p>
        </div>
      </div>

      <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
          <Heart className="h-5 w-5" />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
          <MessageCircle className="h-5 w-5" />
          <span>{post.comments}</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
          <Share2 className="h-5 w-5" />
          <span>{post.shares}</span>
        </button>
      </div>
    </motion.div>
  )
}

function ContributorCard({ contributor }: { contributor: typeof topContributors[0] }) {
  return (
    <div className="glass-effect rounded-xl p-4 hover:bg-white/5 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-3">
        <div className="text-3xl">{contributor.avatar}</div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h4 className="text-white font-bold">{contributor.name}</h4>
            <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">
              {contributor.badge}
            </span>
          </div>
          <div className="text-gray-400 text-sm">{contributor.points.toLocaleString()} pts</div>
        </div>
      </div>
    </div>
  )
}

export default function CommunitySection() {
  return (
    <section id="community" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-center justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-glow">Community</h2>
          <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-effect glow-gold">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-yellow-400" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Community Posts */}
          <div className="lg:col-span-2 space-y-6">
            {communityPosts.map((post, index) => (
              <CommunityPost key={post.id} post={post} index={index} />
            ))}
            
            <div className="text-center pt-4">
              <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
                <Button variant="glass" size="lg">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Top Contributors</h3>
              </div>
              <div className="space-y-3">
                {topContributors.map((contributor) => (
                  <ContributorCard key={contributor.id} contributor={contributor} />
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Community Stats</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Members</span>
                  <span className="text-white font-bold">12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Posts Today</span>
                  <span className="text-white font-bold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Discussions</span>
                  <span className="text-white font-bold">8,920</span>
                </div>
              </div>
            </div>

            {/* Join Community */}
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Join the Community</h3>
              <p className="text-gray-400 text-sm mb-4">
                Connect with players, share strategies, and compete together!
              </p>
              <Link href="https://www.facebook.com/share/1BzNW3aSMd/" target="_blank">
                <Button variant="gold" size="lg" className="w-full">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

