import * as React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function FAQSection() {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = React.useState<number | null>(null);
  
  // Get FAQ items from translations
  const faqItems = t('faq.items');
  
  // Toggle FAQ item
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-[#EBFCFF]/30">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0F214D]">
            {t('faq.title')}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl text-[#0B5FB0]">
            {t('faq.subtitle')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-[#AAF1FF] rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full text-left px-6 py-4 flex justify-between items-center font-medium focus:outline-none ${openItem === index ? 'bg-[#EBFCFF]' : 'bg-white'}`}
                  aria-expanded={openItem === index}
                >
                  <span className="text-[#0F214D]">{item.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-[#0B5FB0] transition-transform ${openItem === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96' : 'max-h-0'}`}
                  aria-hidden={openItem !== index}
                >
                  <div className="px-6 py-4 border-t border-[#AAF1FF]">
                    <p className="font-medium text-[#0B5FB0] mb-2">{item.shortAnswer}</p>
                    <p className="text-muted-foreground">{item.extendedAnswer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-[#0B5FB0] mb-4">{t('faq.moreQuestions')}</p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#0B5FB0] text-white hover:bg-[#2BA3EC] transition-colors"
            >
              {t('faq.contactUs')}
            </a>
          </div>
        </div>
      </div>
      
      {/* JSON-LD structured data for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.shortAnswer
              }
            }))
          })
        }}
      />
    </section>
  );
}

export default FAQSection;
