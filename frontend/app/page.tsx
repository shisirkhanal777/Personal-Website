import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import Initiatives from "@/components/sections/Initiatives";
import ParliamentWork from "@/components/sections/ParliamentWork";
import Communication from "@/components/sections/Communication";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Initiatives />
        <ParliamentWork />
        <Communication />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
