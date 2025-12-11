import "../styles/questions.css";
import logoIcon from "../assets/logo-icon.png";

const Questions = () => {
  const faqs = [
    {
      question: "¿Qué es Storships y cómo funciona?",
      answer:
        "Storships te brinda una dirección en Estados Unidos para que puedas comprar en cualquier tienda online. Nosotros recibimos tus productos, los almacenamos de forma segura y te damos dos opciones: te los enviamos a Argentina o los guardamos hasta que viajes y los retires allá.",
    },
    {
      question: "¿Cuánto cuesta el servicio?",
      answer:
        "El costo depende del volumen del paquete y del tipo de servicio que elijas (envío a Argentina o almacenamiento hasta tu viaje). Podés escribirnos por WhatsApp y te armamos un presupuesto personalizado sin compromiso.",
    },
    {
      question: "¿Puedo retirar mis compras en EEUU?",
      answer:
        "Claro. Si tenés programado un viaje, podemos almacenar tus productos hasta que llegues a EE.UU. y los retires en persona.",
    },
    {
      question: "¿Puedo comprar en cualquier tienda de Estados Unidos?",
      answer:
        "Sí. Podés comprar en cualquier tienda online que haga envíos dentro de Estados Unidos. Simplemente usás la dirección que te brindamos en el checkout de la tienda.",
    },
    {
      question: "¿Cuánto tiempo pueden almacenar mis productos?",
      answer:
        "Podemos guardar tus compras por un tiempo determinado sin costo, y si necesitás más tiempo, ofrecemos planes de almacenamiento flexible. Consultanos por WhatsApp para coordinarlo.",
    },
  ];

  return (
    <section className="questions-section">
      <h2 className="questions-title">Preguntas Frecuentes</h2>
      <div className="questions-container">
        {faqs.map((faq, index) => (
          <div key={index} className="question-card">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <img src={logoIcon} alt="Logo" className="question-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
