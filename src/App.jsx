import AboutSection from "./components/AboutSection";
import AppointmentSection from "./components/AppointmentSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import StorySection from "./components/StorySection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";

function App() {
  return (
    <div className="overflow-x-hidden bg-soft text-ink">
      <Navbar />

      <main>
        <HeroSection />

        <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-5 px-3 py-5 sm:gap-7 sm:px-6 sm:py-8 lg:px-12 lg:py-10">
          <AboutSection />
          <ServicesSection />
          <TrustSection />
          <JourneySection />
          <StatsSection />
          <TestimonialsSection />
          <StorySection />
          <ContactSection />
          <AppointmentSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
