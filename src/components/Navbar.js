'use client';
import { useState } from 'react';
import Link from 'next/link';
import './NAVBAR.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">IndiaGate</div>
      
      {/* Mobile Toggle Button */}
      <button 
        className="mobile-toggle md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link href="#locations" onClick={() => setIsOpen(false)}>Locations</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link href="/order" className="order-btn" onClick={() => setIsOpen(false)}>ORDER</Link>
      </nav>
    </header>
  );
}