'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import './style.css';



export default function Contact() {
  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('visible');
    });
  }, []);

  return (
    <>
      
      <section className="fade-in">
  <div className="contact-wrapper">
    <div className="contact-title-box">Get in Touch</div>

    <div className="white-line">
      We're here to answer any questions you may have. Whether you're looking to make a reservation, inquire about our menu, or provide feedback, don't hesitate to contact us.
    </div>

    <div className="contact-cards">
      <div className="contact-icon-card">
        <h3>Call Us</h3>
        <p>+34 932 45 67 89<br />We’re available during restaurant hours.</p>
      </div>
      <div className="contact-icon-card">
        <h3>Visit Us</h3>
        <p>Carrer de Balmes, 123,<br />08008 Barcelona, Spain</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/#locations">Locations</Link></li>
                          </ul>
          </div>
          <div>
            <h4>Visit us</h4>
            <ul>
              <li><Link href="/">Barcelona</Link></li>
              <li><Link href="/">Viladecans</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><Link href="/contact">Contact us</Link></li>
              
            </ul>
          </div>
                 </div>

        <div className="footer-bottom">
          <p>© 2025 India Gate – Pizzeria and Restaurant. All rights reserved.</p>
          <Link href="/terms">Terms and Conditions</Link> | <Link href="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
