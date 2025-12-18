import "../styles/home.css";
import bgImage from "../assets/home-bg.png"; 
import iconNotebook from "../assets/icons/notebook.png";
import iconClothes from "../assets/icons/clothes.png";
import iconBooks from "../assets/icons/books.png";
import iconGames from "../assets/icons/games.png";
import iconCleaning from "../assets/icons/cleaning.png";
import iconRunning from "../assets/icons/running.png";

export default function Home() {

  // Función para hacer scroll suave
  const scrollToCalculator = () => {
    const section = document.getElementById("calculator");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home-section">
      <div
        className="home-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="home-content">
          <h1>
            Comprás en <span className="highlight">Estados Unidos</span>,
            nosotros lo traemos.
          </h1>
          <p>
            Comprás en cualquier tienda de Estados Unidos, nosotros lo recibimos,
            lo almacenamos por vos y lo enviamos a Argentina o lo guardamos
            hasta tu próximo viaje.
          </p>
          
          {/* AGREGAMOS EL EVENTO ONCLICK AQUÍ */}
          <button className="home-btn" onClick={scrollToCalculator}>
            Coordiná tu envío
          </button>
        </div>

        <div className="icons-row">
          <div className="icon-item">
            <img src={iconNotebook} alt="Notebook" />
            <p>Notebooks</p>
          </div>
          <div className="icon-item">
            <img src={iconClothes} alt="Indumentaria" />
            <p>Indumentaria</p>
          </div>
          <div className="icon-item">
            <img src={iconBooks} alt="Libros" />
            <p>Libros</p>
          </div>
          <div className="icon-item">
            <img src={iconGames} alt="Videojuegos" />
            <p>Videojuegos</p>
          </div>
          <div className="icon-item">
            <img src={iconCleaning} alt="Limpieza" />
            <p>Limpieza</p>
          </div>
          <div className="icon-item">
            <img src={iconRunning} alt="Running" />
            <p>Running</p>
          </div>
        </div>
      </div>
    </section>
  );
}