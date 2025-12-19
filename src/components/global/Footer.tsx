'use client'
import {  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Twitch } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="glass-effect mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center space-x-3 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >

              <Image
                src={'/logo.png'}
                alt="logo image for tanya smit"
                height={120}
                width={120}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
            </motion.div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              TANYA SMIT is your ultimate gaming hub.
              Explore next-gen titles, join tournaments, and connect with a global community of gamers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1BzNW3aSMd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 cursor-pointer" />
              </a>
              <a 
                href="https://t.me/Tanyasmitofficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                aria-label="Telegram"
              >
                <svg 
                  className="h-5 w-5 cursor-pointer" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitch className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#games" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('games')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Games
                </a>
              </li>
              <li>
                <a 
                  href="#tournaments" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('tournaments')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Tournaments
                </a>
              </li>
              <li>
                <a 
                  href="#leaderboards" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('leaderboards')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a 
                  href="#community" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('community')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a 
                  href="#store" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('store')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Store
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/help-center" className="text-gray-400 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="/rules-and-fair-play" className="text-gray-400 hover:text-yellow-400 transition-colors">Rules & Fair Play</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/contact-us" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">support@tanyasmit.gg</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">Global Gaming Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col space-y-4">
            {/* Legal and Responsible Gaming */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 TANYA SMIT. All rights reserved. | Play Without Limits
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <span>Esports Ready</span>
                <span>•</span>
                <span>Cross-Platform</span>
                <span>•</span>
                <span>Secure Gaming</span>
              </div>
            </div>
            
            {/* Legal Links and Disclaimers */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                <a 
                  href="/privacy-policy" 
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
                <span>•</span>
                <span>No Purchase Necessary</span>
              </div>
              <div className="text-xs text-gray-400">
                Responsible Gaming: Must be 21+ to participate
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
