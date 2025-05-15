import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage, supportedLanguages } from '@/lib/i18n/LanguageContext';

// Get flag from language name (e.g., "🇬🇧 English" -> "🇬🇧")
// Add safety check for undefined values
const getFlag = (fullName: string | undefined) => {
  if (!fullName) return '🌐'; // Return globe emoji as fallback
  return fullName.split(' ')[0];
};

// Safely get language name without the flag
const getLanguageName = (fullName: string | undefined) => {
  if (!fullName) return 'Unknown'; // Return fallback text
  const parts = fullName.split(' ');
  return parts.length > 1 ? parts.slice(1).join(' ') : fullName;
};

function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage, languageNames, t } = useLanguage();

  // Ensure we have a valid language, fallback to 'en' if needed
  const currentLanguage = language && supportedLanguages.includes(language) ? language : 'en';

  return (
    <div className={className}>
      <Select value={currentLanguage} onValueChange={setLanguage}>
        <SelectTrigger className="w-[120px] bg-white text-xs" aria-label={t('header.languageSelector')}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{getFlag(languageNames[currentLanguage])}</span>
            <span>{getLanguageName(languageNames[currentLanguage])}</span>
          </div>
        </SelectTrigger>
        <SelectContent>
          {supportedLanguages.map((lang) => (
            <SelectItem key={lang} value={lang}>
              <div className="flex items-center gap-2">
                <span className="text-lg">{getFlag(languageNames[lang])}</span>
                <span className="text-xs">{getLanguageName(languageNames[lang])}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default LanguageSelector;
