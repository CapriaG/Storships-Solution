import "../styles/floatingButton.css";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="https://wa.me/19549825016" // 👈 cambiar por tu número con código país
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn"
    >
      <FaWhatsapp size={45} />
    </a>
  );
};

export default FloatingButton;
