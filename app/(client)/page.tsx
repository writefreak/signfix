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
import { FAQ } from "@/components/sections/faq";
import { ScrollFab } from "@/components/ui/scroll-fab";
import { SeparatorFade } from "@/components/ui/separator";
import { ClientLogoStrip } from "@/components/ui/client-logo-strip";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ScrollFab />
        <Hero />
        <MarqueeStrip />
        <About />
        <SeparatorFade />
        <ClientLogoStrip />
        <Services />
        <Process />
        <Work />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}
