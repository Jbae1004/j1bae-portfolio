import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/image/logo.png";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  const iconContainerStyle = {
    width: "42px", // fixed circle size
    height: "42px",
    borderRadius: "50%",
    border: "1px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "6px",
    backgroundColor: "rgba(217, 217, 217, 0.1)", // optional bg
  };
  const iconImageStyle = {
    width: "16px",
    height: "16px",
  };

  return (
    <Navbar className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Portfolio Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div style={{ display: "flex" }}>
              <a href="#" style={iconContainerStyle}>
                <img src={navIcon1} alt="icon1" style={iconImageStyle} />
              </a>
              <a href="#" style={iconContainerStyle}>
                <img src={navIcon2} alt="icon2" style={iconImageStyle} />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("contact")}>
              <span>Contact</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
