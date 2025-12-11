import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-2">
      <Container>
        <p>© {new Date().getFullYear()} Storships Solution. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;
