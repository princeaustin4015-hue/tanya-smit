"use client"

import { useState, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-effect"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('home')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="flex items-center space-x-3 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              
              <Image
                src={'/logo.png'}
                alt="logo image for tanya smit"
                height={120}
                width={120}
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
              />
            </motion.a>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center flex-1 max-w-md mx-6">
              <motion.div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search games, players, tournaments..."
                  className="w-full pl-12 pr-6 py-3 premium-input text-white placeholder-gray-400 text-base"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const searchTerm = (e.target as HTMLInputElement).value
                      if (searchTerm.trim()) {
                        // Handle search functionality here
                      }
                    }
                  }}
                />
              </motion.div>
            </div>

            {/* Nav Links (desktop) */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {[
                { name: "Games", id: "games" },
                { name: "Tournaments", id: "tournaments" },
                { name: "Leaderboards", id: "leaderboards" },
                { name: "Community", id: "community" },
                { name: "Store", id: "store" }
              ].map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-white hover:text-red-400 transition-all duration-300 font-medium text-base xl:text-lg relative group whitespace-nowrap"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              {/* Search Button (mobile) */}
              <Button 
                variant="glass" 
                size="icon" 
                className="xl:hidden"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>


              {/* Mobile Menu Toggle */}
              <Button 
                variant="glass" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden px-4 sm:px-6 lg:px-8 pb-4 overflow-hidden"
            >
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search games, players..."
                  className="w-full pl-12 pr-6 py-3 premium-input text-white placeholder-gray-400 text-base"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const searchTerm = e.currentTarget.value
                      if (searchTerm.trim()) {
                        // Handle search functionality here
                      }
                    }
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-16 sm:top-20 right-0 bottom-0 w-full sm:w-80 glass-effect z-40 p-4 sm:p-6 flex flex-col space-y-2 sm:space-y-4 lg:hidden overflow-y-auto"
            >
            {[
              { name: "Games", id: "games" },
              { name: "Tournaments", id: "tournaments" },
              { name: "Leaderboards", id: "leaderboards" },
              { name: "Community", id: "community" },
              { name: "Store", id: "store" }
            ].map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  setMenuOpen(false)
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="text-white hover:text-red-400 text-lg sm:text-xl font-medium py-3 sm:py-4 px-4 rounded-lg hover:bg-white/5 transition-all min-h-[48px] flex items-center"
              >
                {item.name}
              </a>
            ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Animated Separator */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        className="fixed top-20 xl:top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent z-40 origin-center"
        style={{ top: 'calc(5rem + 0px)' }}
      />
    </>
  )
}
