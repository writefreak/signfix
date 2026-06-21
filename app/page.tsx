import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { Reviews } from "@/components/sections/reviews";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeStrip />
        <About />
        <Services />
        <Process />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
