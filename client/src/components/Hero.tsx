import * as React from 'react';
import { Button } from '@/components/ui/button';
import Images from './Images';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#EBFCFF] to-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Images.hero} 
          alt="AI Technology" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EBFCFF]/90 to-white/90"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-6 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#0F214D]">
            {t('hero.title')}
          </h1>
          <p className="max-w-[700px] md:text-xl text-[#0B5FB0]">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild className="bg-[#0B5FB0] hover:bg-[#2BA3EC]">
              <a href="#services">{t('hero.exploreServices')}</a>
            </Button>
            <Button asChild variant="outline" className="border-[#0B5FB0] text-[#0B5FB0]">
              <a href="#contact">{t('hero.scheduleConsultation')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
