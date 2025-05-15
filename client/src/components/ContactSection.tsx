import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0F214D]">
            {t('contact.title')}
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl text-[#0B5FB0]">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Calendar Scheduling */}
          <Card className="border-[#AAF1FF] shadow-md overflow-hidden mb-8">
            <CardHeader className="bg-[#EBFCFF] rounded-t-xl">
              <CardTitle className="text-[#0F214D]">{t('services.scheduleConsultation')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 px-4">
              <div className="calendar-container w-full">
                {/* Google Calendar Appointment Scheduling */}
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ZNaoh-NEZGhBNNzSxYUmhcAJEHZKltl9kZYKsEzXAnNaTRj_4p9vm_Y6JhHmrKSC11l1_Ertp?gv=true" 
                  style={{ 
                    border: 'none', 
                    width: '100%', 
                    height: '650px', 
                    backgroundColor: 'transparent' 
                  }}
                  title="Google Calendar Appointment Scheduling"
                  loading="eager"
                  importance="high"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 p-6 border border-[#AAF1FF] rounded-xl bg-[#EBFCFF]/30 shadow-md">
            <h3 className="text-xl font-medium text-[#0F214D] mb-4 text-center">Direct Contact</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <div className="text-center md:text-left">
                <p className="mb-3">
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:ai.innovators.vault@gmail.com" className="text-[#0B5FB0] hover:underline">
                    ai.innovators.vault@gmail.com
                  </a>
                </p>
                <p className="mb-3">
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:+27603335261" className="text-[#0B5FB0] hover:underline">
                    +27 603335261
                  </a>
                </p>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://wa.me/639276854018" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#25D366] hover:text-[#128C7E] text-lg font-medium py-2 px-4 border border-[#25D366] rounded-lg hover:bg-[#25D366]/10 transition-colors"
                >
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contact us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;