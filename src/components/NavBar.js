import { Navbar, Container } from "react-bootstrap";

export const Navbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img scr={''} alt="Logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle> 
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="#about">Link</Nav.Link>
            <Nav.Link href="#skills">Link</Nav.Link>
            <Nav.Link href="#contact">Link</Nav.Link>
          </Nav>
            <span className="navbar-text">
                <div claassName="social-icon">

                </div>
            </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}