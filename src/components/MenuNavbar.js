'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function MenuNavbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (navRef.current) observer.observe(navRef.current);

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <header 
      ref={navRef}
      className="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-gray-100 opacity-0"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          {/* Home button - left aligned */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-primary" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-primary font-semibold">Home</span>
          </Link>

          {/* Centered title */}
          <h1 className="text-xl font-bold text-primary absolute left-1/2 transform -translate-x-1/2">
            India Gate
          </h1>
        </div>
      </div>
    </header>
  );
}
