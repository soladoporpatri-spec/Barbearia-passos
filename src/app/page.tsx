import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import { Footer, WhatsAppCTA } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
