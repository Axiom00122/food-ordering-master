// app/_app.js
'use client';
import { usePathname } from 'next/navigation';
import Header from "@/components/layout/Header";

export default function App({ children }) {
  const pathname = usePathname();
  const isMenuPage = pathname?.startsWith('/menu');

  return (
    <>
      {/* Only show Header if NOT on menu page */}
      {!isMenuPage && <Header />}
      {children}
    </>
  );
}