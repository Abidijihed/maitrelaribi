import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbar.css";
const Navbar = ({ handleLanguageChange, selectedLanguage }) => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dm1xlu8ce/image/upload/v1707488156/pe468qchnhzaye0az6sb.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight:
            window.location.href === "http://134.209.228.166/"
              ? "100vh"
              : "30vh",
        }}
      >
        <nav
          style={{
            backgroundColor: scrolling ? "#7ba59f" : "transparent",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <a href="/">
                <img
                  src={logo}
                  style={{ width: "80px", height: "60px" }}
                  alt="Logo"
                />
              </a>
              <p
                style={{
                  marginLeft: "20px",
                  marginTop: "15px",
                  color: "white",
                }}
              >
                <FaPhone style={{ color: "white" }} />{" "}
                {selectedLanguage === "ar" ? "الهاتف:" : "PHONE:"} +216 71 562
                938
              </p>
            </div>

            {isMobile ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Drawer Menu for Mobile */}
                <button
                  style={{
                    marginLeft: "10px",
                    backgroundColor: drawerOpen ? "#7ba5a1" : "#7ba59f",
                    color: "white",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={toggleDrawer}
                >
                  Menu
                </button>
                {drawerOpen && (
                  <div
                    style={{
                      backgroundColor: "#7ba5a1",
                      position: "fixed",
                      top: "60px",
                      left: 0,
                      width: "100%",
                      padding: "10px",
                      zIndex: 1000,
                    }}
                  >
                    <ul
                      style={{ listStyleType: "none", margin: 0, padding: 0 }}
                    >
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            Accueil
                          </span>
                        </Link>
                      </li>
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/contact">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            Contact
                          </span>
                        </Link>
                      </li>
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/Actualités">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            Actualités
                          </span>
                        </Link>
                      </li>
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/about">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            À propos
                          </span>
                        </Link>
                      </li>
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/services">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            Services
                          </span>
                        </Link>
                      </li>
                      <li style={{ margin: "0 10px", marginBottom: "10px" }}>
                        <Link to="/contact">
                          <span
                            className="hovernav"
                            style={{
                              color: "white",
                              fontFamily: "Arial, sans-serif",
                              transition: "color 0.3s",
                            }}
                          >
                            Contact
                          </span>
                        </Link>
                      </li>
                    </ul>
                    <div style={{ marginLeft: "10px" }}>
                      <select
                        id="language"
                        style={{
                          marginLeft: "5px",
                          border: "none",
                          backgroundColor: "#e6cba1",
                        }}
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                      >
                        <option value="fr">Français</option>
                        <option value="ar">عربى</option>
                        <option value="en">English</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                {/* Desktop Menu */}
                <ul
                  style={{
                    listStyleType: "none",
                    margin: 30,
                    padding: 0,
                    display: "flex",
                  }}
                >
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "الرئيسية"
                          : selectedLanguage === "fr"
                          ? "ACCUEIL"
                          : "HOME"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/honoraire" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "سياسة الرسوم"
                          : selectedLanguage === "fr"
                          ? "POLITIQUE D'HONORAIRES"
                          : "FEE POLICY"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/Actualités" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "أخبار"
                          : selectedLanguage === "fr"
                          ? "ACTUALITES"
                          : "NEWS"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/about" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "من نحن؟"
                          : selectedLanguage === "fr"
                          ? "À PROPOS"
                          : "ABOUT US"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/services" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "الخدمات"
                          : selectedLanguage === "fr"
                          ? "SERVICES"
                          : "SERVICES"}
                      </span>
                    </Link>
                  </li>
                  <li style={{ margin: "0 10px" }}>
                    <Link to="/contact" className="navbar-link">
                      <span
                        className="hovernav"
                        style={{
                          color: "white",
                          fontFamily: "Arial, sans-serif",
                          transition: "color 0.3s",
                        }}
                      >
                        {selectedLanguage === "ar"
                          ? "اتصل"
                          : selectedLanguage === "fr"
                          ? "CONTACT"
                          : "CONTACT"}
                      </span>
                    </Link>
                  </li>
                </ul>

                {/* Language Selector */}
                <div style={{ marginLeft: "10px" }}>
                  <select
                    id="language"
                    style={{
                      marginLeft: "5px",
                      border: "none",
                      backgroundColor: "#e6cba1",
                    }}
                    value={selectedLanguage}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                  >
                    <option value="fr">Français</option>
                    <option value="ar">عربى</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
