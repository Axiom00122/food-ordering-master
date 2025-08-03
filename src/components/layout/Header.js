'use client';
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ import this
import './Header.css';

export default function Header() {
  const pathname = usePathname(); // ✅ get the current path

  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then((module) => {
        module.polyfill();
      });
    }
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight - 20,
        behavior: 'smooth'
      });
      window.history.pushState(null, null, `#${id}`);
    }
  };

  // ✅ Don't render anything if on /menu route
  if (pathname === '/menu') return null;

  return (
    <header className="header">
      <nav className="header-nav">
        <Link href="/" className="header-logo">
          IndiaGate
        </Link>

        <div className="nav-links-container">
<Link href="/" className="nav-link">Home</Link>
          <Link href="/menu" className="nav-link">Menu</Link>

           <Link href="/#locations" className="nav-link">
    Locations
  </Link>


          <Link href="/contact" className="nav-link">Contact</Link>

          <Link href="/order" className="order-button">ORDER NOW</Link>
        </div>
      </nav>
    </header>
  );
}
