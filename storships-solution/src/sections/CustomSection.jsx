import "../styles/custom.css";
import sectionImg from "../assets/customMan.png";

const CustomSection = () => {
  // Número formateado (sin +, sin paréntesis, sin espacios)
  const PHONE_NUMBER = "19549825016";

  // Mensaje para el asesor
  const message = "Hola! Vi que pueden ir a comprar a tiendas físicas por mí. Quisiera asesoramiento sobre este servicio.";

  // Link dinámico
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="custom-section">
      <div className="custom-content">
        <div className="custom-text">
          <h2>
            ¿No querés comprar online? <br />
            <span>Nosotros lo compramos por vos.</span>
          </h2>
          <p>
            Hacemos la compra de forma presencial en tiendas físicas de Estados Unidos,
            y te enviamos el producto a Argentina o lo almacenamos hasta que viajes
            y lo retires personalmente.
          </p>
          
          {/* Botón convertido en Link de WhatsApp */}
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="custom-btn"
          >
            Hablá con un asesor
          </a>
        </div>

        <div className="custom-image">
          <img src={sectionImg} alt="Asesor comprando producto" />
        </div>
      </div>
    </section>
  );
};

export default CustomSection;