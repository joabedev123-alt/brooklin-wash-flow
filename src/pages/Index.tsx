import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Plans from "@/components/Plans";
import HighTechWashing from "@/components/HighTechWashing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Plans />
      <HighTechWashing />
      <FAQ />
      <Testimonials />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
