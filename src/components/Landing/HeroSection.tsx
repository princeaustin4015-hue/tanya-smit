"use client"

import { useState, useEffect } from "react"
import { Gift, Zap, Star, Sparkles, Crown, Diamond, Play, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const heroCards = [
  {
    id: 1,
    title: "Signup Bonus",
    subtitle: "120% Signup Bonus",
    description: "Get started with an amazing welcome bonus",
    icon: "gift",
    image: "/images/ppp.png",
    gradient: "from-yellow-400 via-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "Daily Bonus",
    subtitle: "40% Daily Bonus",
    description: "Claim your daily bonus every day",
    icon: "zap",
    image: "/images/ppp.png",
    gradient: "from-purple-400 via-pink-500 to-red-500"
  },
  {
    id: 3,
    title: "Purchase Bonus",
    subtitle: "30% Bonus on $20+ Purchase",
    description: "Get 30% bonus tokens when you purchase $20 or more",
    icon: "star",
    image: "/images/ppp.png",
    gradient: "from-blue-400 via-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Regular Bonus",
    subtitle: "20% Regular Bonus on $10+ Purchase",
    description: "Get 20% bonus tokens on purchases of $10 or more",
    icon: "gift",
    image: "/images/ppp.png",
    gradient: "from-green-400 via-teal-500 to-blue-500"
  },
  {
    id: 5,
    title: "Free Tokens",
    subtitle: "$5 Free Tokens",
    description: "Get $5 free tokens to start your journey",
    icon: "zap",
    image: "/images/ppp.png",
    gradient: "from-yellow-400 via-amber-500 to-orange-500"
  }
]

const IconComponent = ({ iconType }: { iconType: string }) => {
  switch (iconType) {
    case "gift":
      return <Gift className="h-8 w-8 text-yellow-400" />
    case "zap":
      return <Zap className="h-8 w-8 text-yellow-400" />
    case "star":
      return <Star className="h-8 w-8 text-yellow-400" />
    default:
      return <Gift className="h-8 w-8 text-yellow-400" />
  }
}

export default function HeroSection() {
  const [currentCard, setCurrentCard] = useState(0)
  const [socialModalOpen, setSocialModalOpen] = useState(false)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % heroCards.length)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextCard, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentHeroCard = heroCards[currentCard]
  const nextHeroCard = heroCards[(currentCard + 1) % heroCards.length]

  return (
    <section id="home" className="pt-20 sm:pt-24 md:pt-32 xl:pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero image.png"
          alt="Hero Background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black"></div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="hidden sm:block absolute top-20 left-10 text-yellow-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Crown className="h-12 w-12" />
      </motion.div>

      <motion.div
        className="hidden sm:block absolute bottom-20 right-10 text-red-400/20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Diamond className="h-8 w-8" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mt-4 sm:mt-6 md:mt-10">
        {/* Hero Cards Section */}
        <motion.div
          className="relative "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Cards Container with Peek */}
          <div className="relative flex items-center">
            {/* Main Card */}
            <div className="w-full max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className={`glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 h-auto min-h-[400px] sm:h-80 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden opacity-80`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentHeroCard.gradient} opacity-10 rounded-3xl`}></div>

                    {/* Floating Sparkles */}
                    <motion.div
                      className="absolute top-6 right-6 text-yellow-400/30"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 z-10">
                      <motion.div
                        className="flex items-center space-x-3 mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="p-2 rounded-xl glass-effect glow-gold">
                          <IconComponent iconType={currentHeroCard.icon} />
                        </div>
                        <span className="text-yellow-400 font-bold text-sm sm:text-base md:text-lg text-glow">
                          {currentHeroCard.subtitle}
                        </span>
                      </motion.div>

                      <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 text-glow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentHeroCard.title}
                      </motion.h1>

                      <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 sm:mb-6 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {currentHeroCard.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      >
                        <Button 
                          variant="gold" 
                          size="lg" 
                          className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 font-black w-full sm:w-auto"
                          onClick={() => setSocialModalOpen(true)}
                        >
                          <Gift className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Claim Now
                        </Button>
                      </motion.div>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block ml-8 relative w-64 h-64 lg:w-80 lg:h-80">
                      <Image
                        src={currentHeroCard.image}
                        alt={currentHeroCard.title}
                        fill
                        quality={80}
                        sizes="(max-width: 768px) 0vw, (max-width: 1024px) 256px, 320px"
                        className="object-contain opacity-65"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Peek Card */}
            <div className="hidden lg:block w-64 ml-4 opacity-60 hover:opacity-80 transition-opacity cursor-pointer" onClick={nextCard}>
              <div className="relative rounded-2xl h-80 overflow-hidden">
                {/* Background Image */}
                <Image
                  src="/images/pp1.png"
                  alt="Next Tournament Preview"
                  fill
                  quality={75}
                  sizes="256px"
                  className="object-cover"
                />

                {/* Gradient Overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Text Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">{nextHeroCard.title}</h3>
                  <p className="text-gray-200 text-sm">{nextHeroCard.subtitle}</p>
                </div>
              </div>
            </div>
          </div>


        </motion.div>


      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center items-center mt-8 sm:mt-12 md:mt-20 px-4"
      >
        {/* Play Button */}
        <Button 
          variant="gold" 
          size="lg" 
          className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 font-black flex items-center gap-2 w-full sm:w-auto"
          onClick={() => setSocialModalOpen(true)}
        >
          <Play className="h-4 w-4 sm:h-5 sm:w-5" />
          Play Now
        </Button>
        <Button 
          variant="glass" 
          size="lg" 
          className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 font-black flex items-center gap-2 w-full sm:w-auto"
          onClick={() => setSocialModalOpen(true)}
        >
          <Gift className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
          Claim Bonus
        </Button>
      </motion.div>

      {/* Social Media Modal */}
      <Dialog open={socialModalOpen} onOpenChange={setSocialModalOpen}>
        <DialogContent className="glass-effect border-yellow-400/20 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-white text-center mb-4 text-glow">
              Connect With Us
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 py-6">
            <p className="text-gray-300 text-center text-lg">
              Choose your preferred platform to get started
            </p>
            <div className="flex items-center justify-center space-x-8">
              {/* Facebook Icon */}
              <motion.a
                href="https://www.facebook.com/share/1BzNW3aSMd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-6 rounded-2xl glass-effect bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 group-hover:border-blue-400/60 transition-all duration-300">
                  <Facebook className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors">
                  Facebook
                </span>
              </motion.a>

              {/* Telegram Icon */}
              <motion.a
                href="https://t.me/Tanyasmitofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-6 rounded-2xl glass-effect bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                  <svg 
                    className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                  Telegram
                </span>
              </motion.a>
            </div>
          </div>
        </DialogContent>
      </Dialog>


    </section>
  )
}