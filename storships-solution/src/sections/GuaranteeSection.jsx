import "../styles/guarantee.css";
import guaranteeImg from "../assets/guarantee.png";

const GuaranteeSection = () => {
  return (
    <section className="guarantee-section">
      <div className="guarantee-container">
        {/* Imagen */}
        <div className="guarantee-image">
          <img src={guaranteeImg} alt="Garantía de entrega" />
        </div>

        {/* Texto */}
        <div className="guarantee-text">
          <h2>Garantía de entrega</h2>
          <p>
            Sabemos que tu tiempo es valioso, por eso trabajamos con los mejores aliados 
            logísticos para asegurar que recibas tu pedido cuando lo necesites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
