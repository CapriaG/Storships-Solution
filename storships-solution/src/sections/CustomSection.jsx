import "../styles/custom.css";
import sectionImg from "../assets/customMan.png";

const CustomSection = () => {
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
          <button className="custom-btn">Hablá con un asesor</button>
        </div>

        <div className="custom-image">
          <img src={sectionImg} alt="Asesor comprando producto" />
        </div>
      </div>
    </section>
  );
};

export default CustomSection;