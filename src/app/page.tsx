import Navbar from "@/components/global/Navbar"
import HeroSection from "@/components/Landing/HeroSection"
import GamesSection from "@/components/Landing/GamesSection"
import TournamentsSection from "@/components/Landing/TournamentsSection"
import LeaderboardsSection from "@/components/Landing/LeaderboardsSection"
import CommunitySection from "@/components/Landing/CommunitySection"
import StoreSection from "@/components/Landing/StoreSection"
import PromotionsSection from "@/components/Landing/PromotionsSection"
import Footer from "@/components/global/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <TournamentsSection />
      <LeaderboardsSection />
      <CommunitySection />
      <StoreSection />
      <PromotionsSection />
      <Footer />
    </main>
  )
}