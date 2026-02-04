import BestSellers from "./components/BestSellers";
import BlogSection from "./components/BlogSection";
import CTABar from "./components/CTABar";
import Hero from "./components/Hero";
import KagedStandard from "./components/KagedStandard";
import Partners from "./components/Partners";
import Personalized from "./components/Personalized";
import PreWorkouts from "./components/PreWorkouts";
import Reviews from "./components/Reviews";
import TrustBar from "./components/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustBar />
      <BestSellers />
      <Partners />
      <Personalized />
      <KagedStandard />
      <Reviews />
      <CTABar />
      <PreWorkouts />
      <BlogSection />
    </main>
  );
}
