import * as React from 'react';
import { Button } from '@/components/ui/button';
import Images from './Images';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { ThemeToggle } from './ThemeToggle';
import { Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const openContactForm = () => {
    // Open the form in a new window/tab
    window.open('https://aivault.app.n8n.cloud/form/9e427619-7c4f-47ab-b88a-1b51e383fd4f', '_blank');
  };

  const handleScheduleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-bold text-[#0F214D] flex items-center gap-2">
              <span>AI Innovators Vault</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 text-xs sm:text-sm whitespace-nowrap">
            <a href="#services" className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1">
              {t('header.services')}
            </a>
            <a href="#faq" className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1">
              FAQ
            </a>
            <a href="#use-cases" className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1">
              {t('header.useCases')}
            </a>
            <a href="#about" className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1">
              {t('header.about')}
            </a>
            <button 
              onClick={openContactForm}
              className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1"
            >
              {t('header.contact')}
            </button>
            <a 
              href="https://wa.me/639276854018" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1"
            >
              {t('header.sendWhatsApp')}
            </a>
            <a 
              href="#contact" 
              onClick={handleScheduleClick}
              className="text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors px-1"
            >
              {t('header.scheduleCall')}
            </a>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <LanguageSelector className="hidden md:flex" />
            <Button asChild className="hidden md:inline-flex bg-[#0B5FB0] hover:bg-[#2BA3EC] text-xs">
              <a href="#contact">{t('header.getStarted')}</a>
            </Button>
            <button 
              className="md:hidden text-[#0B5FB0]"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <nav className="container py-4 flex flex-col">
              <a 
                href="#services" 
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.services')}
              </a>
              <a 
                href="#faq" 
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#use-cases" 
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.useCases')}
              </a>
              <a 
                href="#about" 
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.about')}
              </a>
              <button 
                className="py-2 text-left text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactForm();
                }}
              >
                {t('header.contact')}
              </button>
              <a 
                href="https://wa.me/639276854018" 
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('header.sendWhatsApp')}
              </a>
              <a 
                href="#contact" 
                className="py-2 text-[#0B5FB0] hover:text-[#2BA3EC] transition-colors"
                onClick={handleScheduleClick}
              >
                {t('header.scheduleCall')}
              </a>
              <div className="flex items-center gap-4 py-2">
                <ThemeToggle />
                <LanguageSelector />
              </div>
              <Button asChild className="mt-2 bg-[#0B5FB0] hover:bg-[#2BA3EC]">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  {t('header.getStarted')}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Form Modal removed since we're opening in a new window */}
    </>
  );
}

export default Header;
