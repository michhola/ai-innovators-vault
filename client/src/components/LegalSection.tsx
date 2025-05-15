
import * as React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function LegalSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-8 bg-[#0a1a3d] text-gray-400 text-xs">
      <div className="container">
        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-sm font-medium text-gray-300 mb-3">{t('legal.title')}</h3>
          
          <div className="space-y-2">
            <p>{t('legal.businessAs')}</p>
            <p>{t('legal.owner')}: Michael Holaschke</p>
            <p>{t('legal.address')}: Cape Town, South Africa</p>
            <p>{t('legal.phone')}: +27 603335261</p>
            <p>{t('legal.email')}: ai.innovators.vault@gmail.com</p>
          </div>
          
          <div className="mt-4">
            <p>{t('legal.disclaimer')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalSection;
