// fonts.js
import { Open_Sans, Lora } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});