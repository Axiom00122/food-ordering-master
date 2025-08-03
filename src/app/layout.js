import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Lora, Open_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "react-hot-toast";

// Font configuration
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-lora',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata = {
  title: 'India Gate - Pizzería y Restaurante',
  description: 'Authentic Indian & Italian cuisine in Barcelona',
  keywords: 'Indian food, pizza, Barcelona, Viladecans, restaurant',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lora.variable} ${openSans.variable}`}>
      <body className="font-sans bg-white text-gray-800 min-h-screen flex flex-col">
        {/* Header is now included here */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-center"
          toastOptions={{
            className: '!bg-primary !text-white',
            duration: 4000,
          }}
        />
      </body>
    </html>
  );
}