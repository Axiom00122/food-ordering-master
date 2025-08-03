'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function MenuItem({ name, description, price, image }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 opacity-0"
    >
      <div className="relative h-48">
        <Image 
          src={image || '/images/menu/placeholder.jpg'} 
          fill
          className="object-cover"
          alt={name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            €{price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}