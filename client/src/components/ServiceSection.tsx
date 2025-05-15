import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Images from './Images';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function ServiceSection() {
  const { t } = useLanguage();

  // Get services from translations file based on current language
  // Ensure services exists and is an array, otherwise use a fallback
  const services = Array.isArray(t('services.serviceList')) 
    ? t('services.serviceList') 
    : [
        {
          category: "AI SEO Optimized Web Design",
          description: "We create websites specifically designed to rank better in AI search results, with built-in automation for business growth.",
          benefits: "• Optimized for visibility in ChatGPT, Gemini, and Claude.\n• Built-in workflows for customer acquisition and CRM.\n• Automated content generation and newsletter distribution."
        },
        {
          category: "AI Prompt Engineering",
          description: "We teach your team how to \"speak\" to AI to get great results first time.",
          benefits: "• Staff produce reports, emails, or ideas 5× faster.\n• No more copy-paste rework.\n• You control quality instead of outsourcing it."
        },
        {
          category: "Workflow Automation",
          description: "We connect your email, CRM, accounting, and sales tools so boring tasks run themselves.",
          benefits: "• Reduces repetitive work by 50% or more.\n• Sales deals move faster.\n• Staff focus on high-value work."
        }
      ];

  // Map service types to images
  const getImageForService = (index: number) => {
    // Cycle through available images based on index
    const imageIndex = index % 3;
    switch (imageIndex) {
      case 0:
        return Images.strategy;
      case 1: 
        return Images.workflow;
      case 2:
        return Images.chatbot;
      default:
        return Images.strategy;
    }
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0F214D]">
            {t('services.title')}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl text-[#0B5FB0]">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Results-focused section */}
        <div className="max-w-4xl mx-auto mb-16 bg-[#EBFCFF] rounded-xl p-6 md:p-8 shadow-md border border-[#AAF1FF]">
          <h3 className="text-2xl font-bold text-[#0F214D] mb-4 text-center">
            {t('services.resultsFocusTitle')}
          </h3>
          
          <p className="text-[#0B5FB0] mb-6">
            {t('services.resultsFocusIntro')}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1">
              <p className="mb-4 text-center text-[#0F214D] font-medium flex items-center justify-center">
                <span className="text-[#2BA3EC] mr-2">🔹</span> {t('services.resultsFocusPoint1')}
              </p>
            </div>
            <div className="flex-1">
              <p className="mb-4 text-center text-[#0F214D] font-medium flex items-center justify-center">
                <span className="text-[#2BA3EC] mr-2">🔹</span> {t('services.resultsFocusPoint2')}
              </p>
            </div>
            <div className="flex-1">
              <p className="mb-4 text-center text-[#0F214D] font-medium flex items-center justify-center">
                <span className="text-[#2BA3EC] mr-2">🔹</span> {t('services.resultsFocusPoint3')}
              </p>
            </div>
          </div>
          
          <p className="text-[#0B5FB0] mb-6">
            {t('services.resultsFocusNoJargon')}
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-[#AAF1FF]">
            <p className="font-medium text-[#0F214D] mb-3">
              {t('services.resultsFocusTalkIf')}
            </p>
            <ul className="list-disc pl-6 text-[#0B5FB0] space-y-1">
              <li>{t('services.resultsFocusBullet1')}</li>
              <li>{t('services.resultsFocusBullet2')}</li>
              <li>{t('services.resultsFocusBullet3')}</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-[#AAF1FF] hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-[#EBFCFF] rounded-t-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                  <img 
                    src={getImageForService(index)} 
                    alt={service.category} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#EBFCFF]/60"></div>
                </div>
                <CardTitle className="text-[#0F214D] relative z-10">{service.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 text-[#0B5FB0]">
                  <h4 className="font-medium mb-2">{t('services.whatItIs')}</h4>
                  <p>{service.description}</p>
                </div>
                <div className="font-medium text-[#2BA3EC] border-t pt-4">
                  <h4 className="font-medium mb-2">{t('services.howItHelps')}</h4>
                  <div className="whitespace-pre-line">
                    {service.benefits}
                  </div>
                  <a 
                    href={`#use-cases`}
                    className="inline-block mt-4 text-sm font-semibold text-[#0B5FB0] hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      const useCase = service.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      const useCaseSection = document.getElementById('use-cases');
                      if (useCaseSection) {
                        // Get the position of the use cases section
                        const rect = useCaseSection.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const targetPosition = rect.top + scrollTop;
                        
                        // Smooth scroll to the use cases section
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                        
                        // Add a small delay to ensure the section is loaded and scrolling is complete
                        setTimeout(() => {
                          // Create and dispatch a custom event to notify the UseCasesSection
                          const event = new CustomEvent('showUseCase', { 
                            detail: { useCaseId: useCase } 
                          });
                          window.dispatchEvent(event);
                        }, 800); // Increased delay to ensure scrolling completes
                      }
                    }}
                  >
                    {t('services.seeUseCase')}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#0B5FB0] max-w-[800px] mx-auto mb-6">
            {t('services.needDemo')}
            {t('services.dropNote')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#0B5FB0] text-white hover:bg-[#2BA3EC] transition-colors"
          >
            {t('services.scheduleConsultation')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
