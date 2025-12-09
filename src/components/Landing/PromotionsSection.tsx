"use client"

import { motion } from "framer-motion"

export default function PromotionsSection() {
  return (
    <section id="promotions" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white text-center mb-8 sm:mb-12 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest Offers
        </motion.h2>

        {/* Two Images Side by Side */}
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden group relative w-full md:w-auto"
          >
            <img
              src="/images/bannerimage.jpg"
              alt="Offer 1"
              className="w-full md:w-[300px] lg:w-[450px] h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden group relative w-full md:w-auto"
          >
            <img
              src="/images/bannerimage2.jpg"
              alt="Offer 2"
              className="w-full md:w-[300px] lg:w-[450px] h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
