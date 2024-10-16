import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBarMenu({ items }) {
  return (
    <Navbar bg="light" expand="lg" className="mb-5">
      <Container cla>
        <Navbar.Brand>Frameworki frontendowe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map((item) => (
              <Nav.Link href={item.url} key={item.id} className="px-4">
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
