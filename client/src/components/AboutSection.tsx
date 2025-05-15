import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Images from './Images';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 bg-[#EBFCFF]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <div className="rounded-full border-4 border-[#0B5FB0] shadow-lg overflow-hidden aspect-square bg-[#EBFCFF]">
                  <img 
                    src={Images.about} 
                    alt="Michael Holaschke" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      // Use a fallback image if the main one fails to load
                      target.src = "https://via.placeholder.com/400x400/0B5FB0/FFFFFF?text=MH";
                      console.error("Failed to load profile image, using fallback");
                    }}
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0F214D] mb-3">
                  {t('about.title')}
                </h2>
                <h3 className="text-xl font-medium text-[#0B5FB0] mb-4">
                  {t('about.subtitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.introduction')}
                </p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-[#0F214D] mt-8 mb-4">
              {t('about.whyISeeTitleh')}
            </h4>
            
            <div className="space-y-6">
              <Card className="border-[#AAF1FF]">
                <CardContent className="pt-6">
                  <h5 className="font-bold text-[#0B5FB0] mb-2">{t('about.dualEngineer')}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t('about.dualEngineerDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#AAF1FF]">
                <CardContent className="pt-6">
                  <h5 className="font-bold text-[#0B5FB0] mb-2">{t('about.projectManager')}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t('about.projectManagerDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#AAF1FF]">
                <CardContent className="pt-6">
                  <h5 className="font-bold text-[#0B5FB0] mb-2">{t('about.retailLeader')}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t('about.retailLeaderDesc')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="space-y-6">
              <Card className="border-[#AAF1FF]">
                <CardContent className="pt-6">
                  <h5 className="font-bold text-[#0B5FB0] mb-2">{t('about.agencyOwner')}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t('about.agencyOwnerDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-[#AAF1FF]">
                <CardContent className="pt-6">
                  <h5 className="font-bold text-[#0B5FB0] mb-2">{t('about.mediaStrategist')}</h5>
                  <p className="text-sm text-muted-foreground">
                    {t('about.mediaStrategistDesc')}
                  </p>
                </CardContent>
              </Card>
              
              <h4 className="text-lg font-semibold text-[#0F214D] mt-8 mb-4">
                {t('about.whatItMeans')}
              </h4>
              
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>
                  <span className="font-medium text-[#0B5FB0]">{t('about.crossFunctional')}</span> – {t('about.crossFunctionalDesc')}
                </li>
                <li>
                  <span className="font-medium text-[#0B5FB0]">{t('about.processObsession')}</span> – {t('about.processObsessionDesc')}
                </li>
                <li>
                  <span className="font-medium text-[#0B5FB0]">{t('about.growthMindset')}</span> – {t('about.growthMindsetDesc')}
                </li>
              </ul>
              
              <p className="mt-6 text-muted-foreground">
                {t('about.conclusion')}
              </p>
              
              <p className="mt-4 font-medium text-[#0B5FB0]">
                {t('about.ready')}
              </p>
              
              <div className="mt-6">
                <Button asChild className="bg-[#0B5FB0] hover:bg-[#2BA3EC]">
                  <a href="#contact" className="flex items-center">
                    {t('about.contactUs')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
