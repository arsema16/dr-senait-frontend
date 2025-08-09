import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showPhones, setShowPhones] = useState(false);

  const phoneBoxRef = useRef();

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Close phone box if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (phoneBoxRef.current && !phoneBoxRef.current.contains(e.target)) {
        setShowPhones(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkStyle = {
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "uppercase",
    cursor: "pointer",
    color: "#000",
    whiteSpace: "nowrap",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "white",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "0.5rem 0",
    zIndex: 1000,
    minWidth: "200px",
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        style={{
          width: "100%",
          padding: "1rem 2rem",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          position: "fixed",
          top: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontFamily: "goldman, sans-serif",
          fontWeight:'bold',
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Left Nav Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <div style={navLinkStyle} onClick={() => navigate("/")}>Home</div>
            <div style={navLinkStyle} onClick={() => navigate("/services")}>Our Service</div>

            {/* About Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setHoveredMenu("about")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div style={{ ...navLinkStyle, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                About Us <span style={{ fontSize: "0.8rem" }}><i class="ri-arrow-drop-down-line" style={{fontSize:'1.5rem'}}></i></span>
              </div>
              {hoveredMenu === "about" && (
                <div style={dropdownStyle}>
                  {[
                    { label: "About Doctor Senait", path: "/about-doctor" },
                    { label: "Our Team", path: "/team" },
                    { label: "Testimonials", path: "/testimonials" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{ padding: "0.6rem 1.2rem", cursor: "pointer", fontWeight: 500, color: "#333" }}
                      onClick={() => navigate(item.path)}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0fdfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Centered Logo */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          <img
            src="/images/logo-blak.png"
            alt=" Dental"
            style={{ height: isMobile ? "50px" : "60px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>

        {/* Right Links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            {/* Pages Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setHoveredMenu("pages")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <div style={{ ...navLinkStyle, display: "flex", alignItems: "center", gap: "0.3rem" }}>
                Pages <span style={{ fontSize: "0.8rem" }}><i class="ri-arrow-drop-down-line" style={{fontSize:'1.5rem'}}></i></span>
              </div>
              {hoveredMenu === "pages" && (
                <div style={dropdownStyle}>
                  {[
                    { label: "FAQs", path: "/faq" },
                    { label: "Gallery", path: "/gallery" },
                    { label: "Blog/News", path: "/blog" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{ padding: "0.6rem 1.2rem", cursor: "pointer", fontWeight: 500, color: "#333" }}
                      onClick={() => navigate(item.path)}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0fdfa")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={navLinkStyle} onClick={() => navigate("/contact")}>Contact</div>

            <div
              onClick={() => navigate("/Appointment")}
              style={{
                backgroundColor: '#0c0d0dff',
                color: "#fff",
                fontSize: "0.65rem",
                padding: "0.4rem 0.9rem",
                borderRadius: "999px",
                fontWeight: "700",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Book
            </div>

            {/* Phone Icon Dropdown */}
            <div ref={phoneBoxRef} style={{ position: "relative" }}>
              <img src="/images/noun-phone.png" alt="phone" 
    style={{ height: "3rem",  color:'green',cursor: "pointer", justifySelf: "end" }}
    onClick={() => setShowPhones(!showPhones)} />
              {/* Phone Dropdown */}
             {showPhones && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(4px)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "2.5rem 2rem",
        width: "90%",
        maxWidth: "550px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        position: "relative",
        animation: "popIn 0.3s ease",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      {/* Close Button */}
      <div
        onClick={() => setShowPhones(false)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "1.8rem",
          color: "#00a79d",
          cursor: "pointer",
          transform: "scale(1)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        &times;
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem" ,                     fontFamily: '"Federo", sans-serif',
}}>
        <strong style={{ fontSize: "1rem", textTransform: "uppercase", color: "#0e3e47" }}>
          LOCATIONS AND BOOKING
        </strong>
        <p style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "0.4rem", marginBottom: "0.6rem" }}>
          WE'RE HERE TO HELP
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555" }}>
          Reach out to our dedicated staff who will be happy to assist you with booking your next appointment.
        </p>
      </div>

      {/* Contact Blocks */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          {
            phone: "+251 941 838383",
            email: "todrsenait@gmail.com",
            img: "/images/phone icon.png",
          },
          {
            phone: "+251 947 838383",
            email: "info@drsenait.com",
            img: "/images/phone icon.png",
          },
        ].map((contact, idx) => (
          <div
            key={idx}
            style={{
              width: "45%",
              minWidth: "180px",
              textAlign: "center",
              cursor: "pointer",
              padding: "1rem 0.5rem",
              borderRadius: "12px",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <a href={`tel:${contact.phone}`} style={{ textDecoration: "none", color: "#333" }}>
              <img src={contact.img} alt="phone" style={{ width: "50px", marginBottom: "0.6rem" }} />
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", marginBottom: "0.3rem" }}>
                ({contact.phone.slice(0, 4)}) {contact.phone.slice(4, 7)} {contact.phone.slice(7)}
              </p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              style={{
                display: "block",
                fontSize: "0.85rem",
                color: '#007779',
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

            </div>
          </div>
        )}

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
            <IoMenu
              style={{ fontSize: "1.8rem", cursor: "pointer", color: "#000" }}
              onClick={() => setMenuOpen(true)}
            />

            {/* Mobile Phone Dropdown */}
            <div style={{ position: "relative" }} ref={phoneBoxRef}>
              <img src="/images/noun-phone.png" alt="phone" 
    style={{ height: "3rem",  color:'green',cursor: "pointer", justifySelf: "end" }}
    onClick={() => setShowPhones(!showPhones)} />
             {showPhones && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.4)",
      backdropFilter: "blur(4px)",
      zIndex: 9999,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "1rem" : "0", // add some padding on mobile
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: isMobile ? "1.5rem 1rem" : "2.5rem 2rem",
        width: isMobile ? "100%" : "90%",
        maxWidth: isMobile ? "100%" : "550px",
        height: isMobile ? "90%" : "auto",
        overflowY: isMobile ? "auto" : "visible",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        position: "relative",
        animation: "popIn 0.3s ease",
        fontFamily: "'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Close Button */}
      <div
        onClick={() => setShowPhones(false)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "1.8rem",
          color: "#00a79d",
          cursor: "pointer",
          transform: "scale(1)",
          transition: "transform 0.2s ease",
          zIndex: 10001,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        &times;
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "1.5rem", flexShrink: 0 ,                    fontFamily: '"Federo", sans-serif',
}}>
        <strong style={{ fontSize: "1rem", textTransform: "uppercase", color: "#0e3e47" }}>
          LOCATIONS AND BOOKING
        </strong>
        <p style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "0.4rem", marginBottom: "0.6rem" }}>
          WE'RE HERE TO HELP
        </p>
        <p style={{ fontSize: "0.95rem", color: "#555", maxWidth: isMobile ? "100%" : "400px", margin: "0 auto" }}>
          Reach out to our dedicated staff who will be happy to assist you with booking your next appointment.
        </p>
      </div>

      {/* Contact Blocks */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          overflowY: isMobile ? "auto" : "visible",
        }}
      >
        {[
          {
            phone: "+251 941 838383",
            email: "todrsenait@gmail.com",
            img: "/images/phone icon.png",
          },
          {
            phone: "+251 947 838383",
            email: "info@drsenait.com",
            img: "/images/phone icon.png",
          },
        ].map((contact, idx) => (
          <div
            key={idx}
            style={{
              width: isMobile ? "100%" : "45%",
              minWidth: "180px",
              textAlign: "center",
              cursor: "pointer",
              padding: "1rem 0.5rem",
              borderRadius: "12px",
              transition: "background 0.3s",
              backgroundColor: "#fff",
              boxShadow: isMobile ? "0 0 10px rgba(0,0,0,0.1)" : "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <a href={`tel:${contact.phone}`} style={{ textDecoration: "none", color: "#333" }}>
              <img src={contact.img} alt="phone" style={{ width: "50px", marginBottom: "0.6rem" }} />
              <p style={{ fontSize: "0.95rem", fontWeight: "bold", marginBottom: "0.3rem" }}>
                ({contact.phone.slice(0, 4)}) {contact.phone.slice(4, 7)} {contact.phone.slice(7)}
              </p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              style={{
                display: "block",
                fontSize: "0.85rem",
                color: '#007779',
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
)}


            </div>
          </div>
        )}
      </nav>

      {/* ✅ Mobile Overlay Menu Content */}
      {isMobile && (menuOpen || isClosing) && (
        <div
          style={{
            ...overlayBaseStyle,
            opacity: menuOpen && !isClosing ? 1 : 0,
            transform: menuOpen && !isClosing ? "translateY(0)" : "translateY(-20px)",
            pointerEvents: menuOpen && !isClosing ? "auto" : "none",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Close button, Logo center & Phone icon right */}
<div
  style={{
    position: "absolute",
    top: "1rem",
    left: 0,
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    padding: "0 1.5rem",
  }}
>
  {/* Close (left) */}
  <IoClose
    style={{ fontSize: "2rem", color: "#fff", cursor: "pointer", justifySelf: "start" }}
    onClick={() => {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    }}
  />

  {/* Logo (center) */}
  <img
    src="/images/logo-white.png"
    alt="Logo"
    style={{ height: "50px", cursor: "pointer", justifySelf: "center" }}
    onClick={() => {
      navigate("/");
      setMenuOpen(false);
    }}
  />

  {/* Phone icon (right) */}
  
  <i
    className="ri-phone-line"
    style={{ fontSize: "1.8rem", color: '#007779', cursor: "pointer", justifySelf: "end" }}
    onClick={() => setShowPhones(!showPhones)}
  />
</div>


          {/* Links */}
          <div
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.7rem",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textTransform: "uppercase",
              fontFamily: "goldman, sans-serif",
          fontWeight:'bold',
            }}
          >
            {/* Standard Links */}
            {[
              { label: "Home", path: "/" },
              { label: "Our Service", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((item, idx) => (
              <div key={idx} style={{ cursor: "pointer" }} onClick={() => { navigate(item.path); setMenuOpen(false); }}>
                {item.label}
              </div>
            ))}

            {/* Dropdown About */}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              About Us {aboutDropdownOpen ? (<i className="ri-arrow-drop-up-line" style={{fontSize:'1.5rem'}}></i>
) : (
  <i className="ri-arrow-drop-down-line" style={{fontSize:'1.5rem'}}></i>)}
            </div>
            {aboutDropdownOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div onClick={() => { navigate("/about-doctor"); setMenuOpen(false); }}>About Doctor Senait</div>
                <div onClick={() => { navigate("/team"); setMenuOpen(false); }}>Our Team</div>
                <div onClick={() => { navigate("/testimonials"); setMenuOpen(false); }}>Testimonials</div>
              </div>
            )}

            {/* Dropdown Pages */}
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
            >
Pages {pagesDropdownOpen ? (
  <i className="ri-arrow-drop-up-line" style={{fontSize:'1.5rem'}}></i>
) : (
  <i className="ri-arrow-drop-down-line" style={{fontSize:'1.5rem'}}></i>
)}
            </div>
            {pagesDropdownOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div onClick={() => { navigate("/faq"); setMenuOpen(false); }}>FAQs</div>
                <div onClick={() => { navigate("/gallery"); setMenuOpen(false); }}>Gallery</div>
                <div onClick={() => { navigate("/blog"); setMenuOpen(false); }}>Blog/News</div>
              </div>
            )}

            {/* Book */}
            <div
              style={{ background: '#007779', color: "#fff", borderRadius: "20px", padding: "0.5rem 1.2rem", cursor: "pointer" }}
              onClick={() => { navigate("/Appointment"); setMenuOpen(false); }}
            >
              Book
            </div>
          </div>

{/* Social Media Icons */}
<div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem" }}>
  <i
    className="fab fa-facebook-f"
    style={{ fontSize: "1.4rem", color: "#fff", cursor: "pointer" }}
    onClick={() => window.open("https://facebook.com", "_blank")}
  ></i>
  <i
    className="fab fa-instagram"
    style={{ fontSize: "1.4rem", color: "#fff", cursor: "pointer" }}
    onClick={() => window.open("https://instagram.com", "_blank")}
  ></i>
  <i
    className="fab fa-x"
    style={{ fontSize: "1.4rem", color: "#fff", cursor: "pointer" }}
    onClick={() => window.open("https://twitter.com", "_blank")}
  ></i>
</div>

        </div>

      )}
    </>
  );
};

<style>
  {`
    @keyframes popIn {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `}
</style>

const overlayBaseStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/phong.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  zIndex: 10000,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "4rem",
  paddingBottom: "2rem",
  gap: "2rem",
  color: "#fff",
};


export default Navbar;
