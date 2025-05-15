import * as React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import FAQSection from '@/components/FAQSection';
import UseCasesSection from '@/components/UseCasesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function App() {
  const { language } = useLanguage();
  
  // Update HTML lang attribute when language changes
  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <FAQSection />
        <UseCasesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      {/* The n8n chat widget is loaded via script in index.html */}
    </div>
  );
}

export default App;
