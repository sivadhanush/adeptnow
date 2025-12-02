"use client";

import { useState, ChangeEvent, CSSProperties } from "react";

interface FormData {
  fullName: string;
  organization: string;
  designation: string;
  phoneNumber: string;
  emailId?: string;
  serviceType: string;
}

interface Styles {
  [key: string]: CSSProperties;
}

export default function ContactForm() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    organization: "",
    designation: "",
    phoneNumber: "",
    emailId: "",
    serviceType: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const {
      fullName,
      organization,
      designation,
      phoneNumber,
      emailId,
      serviceType,
    } = formData;
    if (
      !fullName ||
      !organization ||
      !designation ||
      !phoneNumber ||
      !emailId ||
      !serviceType
    ) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handleWhatsApp = (): void => {
    if (!validateForm()) return;

    const message = `*Contact Request from AdeptNow Website*

*Full Name:* ${formData.fullName}
*Organization:* ${formData.organization}
*Designation:* ${formData.designation}
*Phone Number:* ${formData.phoneNumber}
*Email ID:* ${formData.emailId}
*Type of Service Required:* ${formData.serviceType}

I would like to discuss this service further.`;

    // Replace with your WhatsApp business number
    const whatsappUrl = `https://wa.me/+919676096632?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmail = (): void => {
    if (!validateForm()) return;

    const subject = "Service Inquiry from AdeptNow Website";
    const body = `Contact Request from AdeptNow Website

Full Name: ${formData.fullName}
Organization: ${formData.organization}
Designation: ${formData.designation}
Phone Number: ${formData.phoneNumber}
Email ID: ${formData.emailId}
Type of Service Required: ${formData.serviceType}

I would like to discuss this service further.`;

    const mailtoUrl = `mailto:contact@adeptnow.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div style={styles.container}>
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          style={styles.mainButton}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-3px) scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0) scale(1)")
          }
        >
          <span style={styles.buttonIcon}>📩</span>
          Get in Touch
        </button>
      ) : (
        <div style={styles.formContainer}>
          <button
            onClick={() => setShowForm(false)}
            style={styles.closeButton}
            aria-label="Close form"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f1f3f5";
              e.currentTarget.style.color = "#003d7a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#64748b";
            }}
          >
            ×
          </button>

          <h3 style={styles.formTitle}>Contact Us</h3>
          <p style={styles.formSubtitle}>
            Fill in your details and choose how to connect
          </p>

          <div style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Organization *</label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                placeholder="Enter your organization"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Designation *</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Enter your designation"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email ID *</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                placeholder="Enter your email"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Type of Service Required *</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                style={styles.select}
                required
              >
                <option value="">Select a service</option>
                <option value="GxP Software Implementation">
                  GxP Software Implementation
                </option>
                <option value="Project Management & Business Analysis">
                  Project Management & Business Analysis
                </option>
                <option value="Master Data Design & Validation">
                  Master Data Design & Validation
                </option>
                <option value="Project Coordination & Stakeholder Management">
                  Project Coordination & Stakeholder Management
                </option>
                <option value="Other Services">Other Services</option>
              </select>
            </div>

            <div style={styles.buttonGroup}>
              <button
                onClick={handleEmail}
                style={{ ...styles.actionButton, ...styles.emailButton }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <span style={styles.buttonIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                  </svg>
                </span>
                Email
              </button>
              <button
                onClick={handleWhatsApp}
                style={{ ...styles.actionButton, ...styles.whatsappButton }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                {/* <span style={styles.buttonIcon}>📱</span> */}
                {/* WhatsApp */}
                <img
                  alt="WhatsApp Main Logo"
                  src="https://static.whatsapp.net/rsrc.php/yA/r/hbGnlm1gXME.svg"
                  width={100}
                ></img>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles: Styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
    padding: "2rem 0.5rem",
  },
  mainButton: {
    background: "white",
    color: "#003d7a",
    border: "none",
    padding: "1.2rem 3rem",
    borderRadius: "50px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  formContainer: {
    background: "white",
    borderRadius: "20px",
    padding: "1.5rem",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    position: "relative",
    animation: "slideIn 0.3s ease",
  },
  closeButton: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "transparent",
    border: "none",
    fontSize: "2rem",
    color: "#64748b",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  formTitle: {
    fontSize: "2rem",
    color: "#003d7a",
    marginBottom: "0.5rem",
    fontWeight: "700",
    textAlign: "center",
  },
  formSubtitle: {
    fontSize: "1rem",
    color: "#64748b",
    marginBottom: "2rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#1a1a1a",
    textAlign: "left",
  },
  input: {
    padding: "0.9rem 1.2rem",
    fontSize: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
  },
  select: {
    padding: "0.9rem 1.2rem",
    fontSize: "1rem",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    outline: "none",
    transition: "all 0.3s ease",
    fontFamily: "inherit",
    cursor: "pointer",
    backgroundColor: "white",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    flexWrap: "wrap",
  },
  actionButton: {
    flex: "1",
    minWidth: "200px",
    padding: "1rem 1.5rem",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  },
  whatsappButton: {
    background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
    color: "white",
    boxShadow: "0 8px 20px rgba(37, 211, 102, 0.3)",
  },
  emailButton: {
    background: "linear-gradient(135deg, #005eb8 0%, #0095ff 100%)",
    color: "white",
    boxShadow: "0 8px 20px rgba(0, 94, 184, 0.3)",
  },
  buttonIcon: {
    fontSize: "1.3rem",
  },
};
