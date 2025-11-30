'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll with offset for fixed nav
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = (target as HTMLElement).offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
            // Close mobile menu if open
            const navMenu = document.querySelector('nav ul');
            if (navMenu) {
              navMenu.classList.remove('show');
            }
          }
        }
      });
    });
  }, []);

  const toggleMobileMenu = () => {
    const navMenu = document.querySelector('nav ul');
    if (navMenu) {
      navMenu.classList.toggle('show');
    }
  };

  return (
    <>
      <nav id="navbar">
        <div className="container">
          <div className="logo">
             <img src="/images/logo.png" alt="AdeptNow Logo" />
            AdeptNow
          </div>
          <i className="fas fa-bars mobile-menu" onClick={toggleMobileMenu}></i>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header id="home">
        <div className="container">
          <h1>Driving Digital Excellence Across Pharma & Life Sciences</h1>
          <p>We connect technology with compliance — enabling smarter, faster, and more reliable operations.</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Explore Our Services</a>
            <a href="#about" className="btn btn-secondary">About AdeptNow</a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-light">
        <div className="container">
          <h2>About AdeptNow Techno Solutions</h2>
          <div className="about-content">
            <p>
              AdeptNow is a specialized digital transformation partner for the pharmaceutical and life sciences industry. We focus on implementing, validating, and supporting GxP-regulated systems that enable efficiency, compliance, and data integrity across laboratory, manufacturing, quality, and clinical domains.
            </p>
            <p>
              Our strength lies in understanding both scientific workflows and regulatory expectations. By combining domain expertise with structured project delivery, we help organizations transition confidently from paper-based processes to fully digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-intro">
            <p>
              Empowering Digital Transformation in Pharma & Life Sciences. Our mission is to bridge the gap between business processes and technology, ensuring every GxP-regulated system is implemented with precision, compliance, and long-term sustainability.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-number">1</div>
              <h3>GxP Software Implementation – From Kickoff to Go-Live</h3>
              <p className="service-tagline">&quot;Your compliance journey, digitally enabled.&quot;</p>
              <p>AdeptNow provides end-to-end implementation services for all types of GxP software – including LIMS, QMS, DMS, MES, SAP, and ERP systems. We manage every stage: requirement gathering, configuration, testing, validation, and user training – all aligned with GxP 21 CFR Part 11, and data integrity principles.</p>
            </div>

            <div className="service-card">
              <div className="service-number">2</div>
              <h3>Project Management & Business Analysis Consulting</h3>
              <p className="service-tagline">&quot;Structured governance meets domain expertise.&quot;</p>
              <p>Our project managers and business analysts bring industry insight, documentation accuracy, and proactive coordination to every engagement. We ensure your digitalization initiatives are strategically planned, risk-mitigated, and deliver on project scope, time, and compliance expectations.</p>
            </div>

            <div className="service-card">
              <div className="service-number">3</div>
              <h3>Master Data Design, Creation & Validation</h3>
              <p className="service-tagline">&quot;The backbone of every compliant system.&quot;</p>
              <p>AdeptNow delivers comprehensive services for master data design and validation across multiple GxP systems. We ensure consistency, accuracy, and audit-readiness – building a strong, validated foundation for your organization&apos;s digital ecosystem.</p>
            </div>

            <div className="service-card">
              <div className="service-number">4</div>
              <h3>Project Coordination & Stakeholder Management</h3>
              <p className="service-tagline">&quot;Bridging communication across teams for seamless delivery.&quot;</p>
              <p>AdeptNow acts as a strategic coordination partner, ensuring effective collaboration between vendors, customers, and internal project teams. Our stakeholder management services simplify communication, reduce delays, and maintain alignment with quality and compliance objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment-section">
        <div className="container">
          <h2><i className="fas fa-handshake"></i> Our Commitment</h2>
          <p className="commitment">
            At AdeptNow, we go beyond implementation — we build <strong>digital trust</strong>. Through transparency, precision, and domain-driven expertise, we empower pharmaceutical and life sciences organizations to embrace digital transformation with confidence and compliance.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <h2><i className="fas fa-envelope"></i> Let&apos;s Connect</h2>
          <p>
            Let&apos;s connect and build the future of compliant digital transformation together.
          </p>
          <a href="mailto:adeptnow@gmail.com" className="btn">Send us an Email</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 AdeptNow Techno Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}