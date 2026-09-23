import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickActions from "@/components/QuickActions";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import { Footer, MobileBottomBar } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <QuickActions />
      <Services />
      <Experience />
      <Gallery />
      <Reviews />
      <Location />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
