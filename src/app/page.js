import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Naybar1 from "./components/Naybar1";
import WhatsAppButton from "./components/WhatsAppButton";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      
      <div className=" mt-24 mx-auto px-12 py-10">
       
        <Navbar />
        <div className="  ">
          <HeroSection />
          <AboutSection />
        </div>
      </div>
      <Footer />
      <WhatsAppButton/>
    </main>
  );
}
