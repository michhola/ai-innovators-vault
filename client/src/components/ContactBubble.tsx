import * as React from 'react';
import { Mail, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

function ContactBubble() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();
  const bubbleRef = React.useRef<HTMLDivElement>(null);
  
  // Log visibility on mount to help debug
  React.useEffect(() => {
    console.log("ContactBubble mounted");
    
    // Force a redraw after component is mounted
    const timer = setTimeout(() => {
      if (bubbleRef.current) {
        console.log("Forcing redraw of contact bubble");
        bubbleRef.current.style.transform = 'translateZ(0)';
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => {
    console.log("Toggle form clicked, current state:", isOpen);
    setIsOpen(!isOpen);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  // Instead of embedding an iframe, let's create a direct contact option
  return (
    <div ref={bubbleRef} className="fixed bottom-6 right-6 z-[9999]">
      {/* Main floating button */}
      <Button
        onClick={toggleForm}
        className={`rounded-full w-14 h-14 ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#0B5FB0] hover:bg-[#0c54a0]'} shadow-lg transition-colors duration-300 animate-pulse`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        style={{ boxShadow: '0 0 15px rgba(11, 95, 176, 0.5)' }}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Mail className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Contact options popup */}
      <div 
        className={`fixed bottom-24 right-6 md:right-8 w-[300px] max-w-[90vw] rounded-lg shadow-xl transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        } bg-white border-2 border-[#AAF1FF] overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-[#0F214D] text-white p-4 flex justify-between items-center">
          <h3 className="font-medium text-lg">Contact Us</h3>
          <button 
            onClick={closeForm}
            className="text-white/80 hover:text-white"
            aria-label="Close contact options"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Contact options */}
        <div className="p-4 space-y-4">
          <a 
            href="mailto:ai.innovators.vault@gmail.com" 
            className="flex items-center gap-3 p-3 rounded-md bg-[#EBFCFF] hover:bg-[#D5F2F9] text-[#0B5FB0] transition-colors w-full"
          >
            <Mail className="h-5 w-5" />
            <span>Email Us</span>
          </a>
          
          <a 
            href="https://wa.me/639276854018" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-md bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors w-full"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
          
          <a 
            href="tel:+27603335261" 
            className="flex items-center gap-3 p-3 rounded-md bg-[#0B5FB0]/10 hover:bg-[#0B5FB0]/20 text-[#0B5FB0] transition-colors w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call Us</span>
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              closeForm();
            }}
            className="flex items-center gap-3 p-3 rounded-md bg-[#2BA3EC]/10 hover:bg-[#2BA3EC]/20 text-[#2BA3EC] transition-colors w-full"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Schedule Meeting</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactBubble;
