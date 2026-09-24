import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MetodoBello from "@/components/MetodoBello";
import Procedures from "@/components/Procedures";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-beige-50">
      <Navbar />
      <Hero />
      <Philosophy />
      <MetodoBello />
      <Procedures />
      <About />
      <Differentials />
      <Testimonials />
      <Faq />
      <ContactCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
