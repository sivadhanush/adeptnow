"use client";

import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll with offset for fixed nav
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = (target as HTMLElement).offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
            // Close mobile menu if open
            const navMenu = document.querySelector("nav ul");
            if (navMenu) {
              navMenu.classList.remove("show");
            }
          }
        }
      });
    });
  }, []);

  const toggleMobileMenu = () => {
    const navMenu = document.querySelector("nav ul");
    if (navMenu) {
      navMenu.classList.toggle("show");
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
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header id="home">
        <div className="container">
          <h1>Driving Digital Excellence Across Pharma & Life Sciences</h1>
          <p>
            We connect technology with compliance — enabling smarter, faster,
            and more reliable operations.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Explore Our Services
            </a>
            <a href="#about" className="btn btn-secondary">
              About AdeptNow
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-light">
        <div className="container">
          <h2>About AdeptNow Techno Solutions</h2>
          <div className="about-content">
            <p>
              AdeptNow is a specialized digital transformation partner for the
              pharmaceutical and life sciences industry. We focus on
              implementing, validating, and supporting GxP-regulated systems
              that enable efficiency, compliance, and data integrity across
              laboratory, manufacturing, quality, and clinical domains.
            </p>
            <p>
              Our strength lies in understanding both scientific workflows and
              regulatory expectations. By combining domain expertise with
              structured project delivery, we help organizations transition
              confidently from paper-based processes to fully digital
              ecosystems.
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
              Empowering Digital Transformation in Pharma & Life Sciences. Our
              mission is to bridge the gap between business processes and
              technology, ensuring every GxP-regulated system is implemented
              with precision, compliance, and long-term sustainability.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>GxP Software Implementation – From Kickoff to Go-Live</h3>
              <p className="service-tagline">
                &quot;Your compliance journey, digitally enabled.&quot;
              </p>
              <p>
                AdeptNow provides end-to-end implementation services for all
                types of GxP software – including LIMS, QMS, DMS, MES, SAP, and
                ERP systems. We manage every stage: requirement gathering,
                configuration, testing, validation, and user training – all
                aligned with GxP 21 CFR Part 11, and data integrity principles.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9L9 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 9L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                  <circle cx="15" cy="9" r="1.5" fill="currentColor" />
                  <path d="M3 8H21" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Project Management & Business Analysis Consulting</h3>
              <p className="service-tagline">
                &quot;Structured governance meets domain expertise.&quot;
              </p>
              <p>
                Our project managers and business analysts bring industry
                insight, documentation accuracy, and proactive coordination to
                every engagement. We ensure your digitalization initiatives are
                strategically planned, risk-mitigated, and deliver on project
                scope, time, and compliance expectations.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 7H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 3H14C15.1046 3 16 3.89543 16 5V7H8V5C8 3.89543 8.89543 3 10 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 11V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 13H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Master Data Design, Creation & Validation</h3>
              <p className="service-tagline">
                &quot;The backbone of every compliant system.&quot;
              </p>
              <p>
                AdeptNow delivers comprehensive services for master data design
                and validation across multiple GxP systems. We ensure
                consistency, accuracy, and audit-readiness – building a strong,
                validated foundation for your organization&apos;s digital
                ecosystem.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 21C2 17.6863 4.68629 15 8 15C9.03 15 10 15.21 10.84 15.59"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="17"
                    cy="17"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 7H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 11H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Project Coordination & Stakeholder Management</h3>
              <p className="service-tagline">
                &quot;Bridging communication across teams for seamless
                delivery.&quot;
              </p>
              <p>
                AdeptNow acts as a strategic coordination partner, ensuring
                effective collaboration between vendors, customers, and internal
                project teams. Our stakeholder management services simplify
                communication, reduce delays, and maintain alignment with
                quality and compliance objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment-section">
        <div className="container">
          <h2>
            <i className="fas fa-handshake"></i> Our Commitment
          </h2>
          <p className="commitment">
            At AdeptNow, we go beyond implementation — we build{" "}
            <strong>digital trust</strong>. Through transparency, precision, and
            domain-driven expertise, we empower pharmaceutical and life sciences
            organizations to embrace digital transformation with confidence and
            compliance.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="cta">
        <div className="container">
          <h2>
            <i className="fas fa-envelope"></i> Let's Connect
          </h2>
          <p>
            Let's connect and build the future of compliant digital
            transformation together.
          </p>
          <ContactForm />
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
