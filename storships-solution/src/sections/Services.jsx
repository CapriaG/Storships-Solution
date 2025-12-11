import "../styles/services.css";
import deliveryImg from "../assets/deliveryMan.png";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Imagen circular */}
        <div className="services-image">
          <img src={deliveryImg} alt="Servicio de entrega" />
        </div>

        {/* Texto */}
        <div className="services-text">
          <h2>Recibí tus productos favoritos en la puerta de tu casa</h2>
          <p>
            Comprá en tus tiendas online preferidas de Estados Unidos y dejá el
            resto en nuestras manos. Te ofrecemos recepción, almacenamiento y
            envío seguro hasta Argentina, o guardamos tus compras para que las
            retires cuando viajes.
          </p>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="services-divider"></div>
    </section>
  );
};

export default Services;