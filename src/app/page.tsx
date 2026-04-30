import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portal } from "@/components/sections/Portal";
import { Services } from "@/components/sections/Services";
import { SocialMedia } from "@/components/sections/SocialMedia";
import { Contact } from "@/components/sections/Contact";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SocialMedia />
        <Portal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
