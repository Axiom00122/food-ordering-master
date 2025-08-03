'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Home.module.css';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      import('smoothscroll-polyfill').then((module) => {
        module.polyfill();
      });
    }

    const scrollElements = document.querySelectorAll('.scroll-fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    scrollElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.pageContainer} animate-fade-in`}>

      {/* Hero Section */}
      <section className={`${styles.about} scroll-fade-up`}>

        <div className={styles.heroContainer}>
          <div className={styles.heroImage}>
            <Image 
              src="/images/hero-indian-food.jpg" 
              alt="Delicious Indian Food"
              width={800}
              height={600}
              priority
            />
          </div>
          <div className={styles.heroText}>
            <h1>Welcome to <span>India Gate Restaurant!</span></h1>
            <p>
              Experience the best of both worlds at India Gate – Pizzeria and Restaurant!<br />
              We offer a unique fusion of authentic Indian cuisine and delicious pizzas,<br />
              all in a warm and welcoming atmosphere.<br />
              Visit us in Barcelona and Viladecans or order online today!
            </p>
            <Link href="/menu" className={styles.menuBoxBtn}>Menu</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`${styles.about} scroll-fade-up`}>

        <div className={styles.aboutText}>
          <h2>About India Gate – Pizzeria and Restaurant</h2>
          <p>
            Founded in Barcelona, India Gate offers a unique blend of authentic Indian cuisine and delicious pizzas,
            emphasizing quality, authenticity, and customer satisfaction in a modern and welcoming environment.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}><strong>1500+</strong><br />Happy Customers</div>
            <div className={styles.stat}><strong>50+</strong><br />Menu Items</div>
            <div className={styles.stat}><strong>7</strong><br />Days Open</div>
            <div className={styles.stat}><strong>2</strong><br />Locations</div>
          </div>
        </div>
        <Image 
          src="/images/restaurant-interior.jpg" 
          alt="About India Gate"
          width={600}
          height={400}
          className={styles.aboutImg}
        />
      </section>

      {/* Locations Section */}

      <section id="locations" className={`${styles.locationsSection} scroll-mt-24 scroll-fade-up`}>

        <h2>Visit Us at Our Two Locations</h2>
        <div className={styles.locationsContainer}>
          <div className={styles.locationCard}>
            <Image 
              src="/images/barcelona.jpg" 
              alt="Barcelona Location"
              width={400}
              height={300}
            />
            <h3>Barcelona Location</h3>
            <p>Carrer Example 123, 08014 Barcelona</p>
            <p>Our Barcelona location offers a cozy and modern dining experience...</p>
          </div>
          <div className={styles.locationCard}>
            <Image 
              src="/images/viladecans.jpg" 
              alt="Viladecans Location"
              width={400}
              height={300}
            />
            <h3>Viladecans Location</h3>
            <p>Avinguda Sample 456, 08840 Viladecans</p>
            <p>Our Viladecans location offers a relaxed atmosphere...</p>
          </div>
        </div>
      </section>

      {/* Maps Section */}
     <section className={`${styles.mapSection} scroll-fade-up`}>

        <div className={styles.mapBox}>
          <h3>Barcelona</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.324681280323!2d2.1322654!3d41.3670301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498912fc17381%3A0xe9c04e23910cad00!2sCarrer%20de%20la%20Riera%20Blanca%2C%20215%2C%20Sants-Montju%C3%AFc%2C%2008014%20Barcelona%2C%20Spain!5e0!3m2!1sen!2sin!4v1753556959682!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.mapBox}>
          <h3>Viladecans</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5992.922256882164!2d2.0083053!3d41.3205851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49d002d5354bb%3A0xa8bd04e0011e7d22!2sIndia%20Gate%20Restaurant!5e0!3m2!1sen!2sin!4v1753556657546!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Opening Hours */}
      <section className={styles.openingHours}>
        <div className={styles.openingContent}>
          <div className={styles.openingImage}>
            <Image 
              src="/images/chef-cooking.jpg" 
              alt="Restaurant Open"
              width={500}
              height={400}
            />
          </div>
          <div className={styles.openingText}>
            <h2>Visit us anytime! We're open every day of the week!</h2>
            <p>
              We are dedicated to serving you delicious Indian cuisine and pizzas at your convenience. 
              Check out our opening hours for our Barcelona and Viladecans locations below.
            </p>
            <p>We look forward to welcoming you!</p>
            <div className={styles.openingStats}>
              <div>
                <h3>14h</h3>
                <p>Serving delicious food for over 14 hours a day</p>
              </div>
              <div>
                <h3>7d</h3>
                <p>Open 7 days a week with a warm welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="#locations">Locations</Link></li>
              <li><Link href="/order">Order Online</Link></li>
              <li><Link href="/contact">Visit us</Link></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Connect</h4>
            <ul>
              <li><Link href="/contact">Contact us</Link></li>
              
            </ul>
          </div>
                  </div>
        <div className={styles.footerBottom}>
          <p>© 2025 India Gate – Pizzería y Restaurante. All rights reserved.</p>
          <p>
            <Link href="/terms">Terms and Conditions</Link> | 
            <Link href="/privacy">Privacy Policy</Link>
          </p>
          <p className={styles.footerAddresses}>
            Barcelona: Carrer Example 123 | Viladecans: Avinguda Sample 456
          </p>
        </div>
      </footer>
    </div>
  );
}
