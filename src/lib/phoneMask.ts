import React, { useCallback } from 'react';

// Faqat raqamlarni olish uchun yordamchi funksiya
function getDigits(value: string) {
  return value.replace(/\D/g, '');
}

// Telefon raqamni +998 XX XXX XX XX formatga keltiruvchi funksiya
function formatPhoneUz(value: string) {
  let digits = getDigits(value);
  if (digits.startsWith('998')) {
  // digits = digits;
  } else if (digits.startsWith('9')) {
    digits = '998' + digits;
  } else if (digits.startsWith('8')) {
    digits = '998' + digits.slice(1);
  } else if (digits.startsWith('0')) {
    digits = '998' + digits.slice(1);
  } else {
    digits = '998' + digits;
  }
  digits = digits.slice(0, 12); // Faqat 12 ta raqam

  let formatted = '+998';
  if (digits.length > 3) {
    formatted += ' ' + digits.slice(3, 5);
  }
  if (digits.length > 5) {
    formatted += ' ' + digits.slice(5, 8);
  }
  if (digits.length > 8) {
    formatted += ' ' + digits.slice(8, 10);
  }
  if (digits.length > 10) {
    formatted += ' ' + digits.slice(10, 12);
  }
  return formatted;
}

// Custom hook: [value, onChange]
export function usePhoneMask(initialValue = '') {
  const [value, setValue] = React.useState(() => formatPhoneUz(initialValue));

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatPhoneUz(raw);
    setValue(formatted);
  }, []);

  return {
    value,
    onChange,
    maxLength: 17, // +998 XX XXX XX XX (17 ta belgi)
    inputMode: 'numeric' as const,
    pattern: '\\+998 \\d{2} \\d{3} \\d{2} \\d{2}',
    placeholder: '+998 XX XXX XX XX',
  };
} 