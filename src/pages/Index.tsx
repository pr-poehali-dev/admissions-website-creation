import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import AdmissionCalculator from '@/components/AdmissionCalculator';
import AdmissionSection from '@/components/AdmissionSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ProgramsSection />
      <AdvantagesSection />
      <AdmissionCalculator />
      <AdmissionSection />
      <FAQSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}