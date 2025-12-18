import { useState } from "react";
import "../styles/calculator.css";
import bgMap from "../assets/bg-map.png";

const Calculator = () => {
  // --- TUS DATOS ---
  // Formato: Código país (1) + Area Code (954) + Número (9825016)
  const PHONE_NUMBER = "19549825016"; 

  // --- ESTADOS ---
  const [shippingProductValue, setShippingProductValue] = useState("");
  const [location, setLocation] = useState("caba");
  const [shippingResult, setShippingResult] = useState(null);

  const [storageProductValue, setStorageProductValue] = useState("");
  const [days, setDays] = useState("");
  const [productSize, setProductSize] = useState("small");
  const [storageResult, setStorageResult] = useState(null);

  // --- CONSTANTES Y TASAS ---
  const TAX_RATE = 0.2174;
  const RATES = {
    shipping: { caba: 8, gba: 10 },
    storage: { small: 0.74, medium: 1.48, large: 2.22 },
  };

  // --- HANDLERS (Cálculos) ---
  const handleShippingCalc = (e) => {
    e.preventDefault();
    const value = parseFloat(shippingProductValue) || 0;
    const deliveryCost = RATES.shipping[location];
    const tax = value * TAX_RATE;
    const total = tax + deliveryCost;

    setShippingResult({
      tax: tax.toFixed(2),
      delivery: deliveryCost.toFixed(2),
      total: total.toFixed(2),
    });
  };

  const handleStorageCalc = (e) => {
    e.preventDefault();
    const value = parseFloat(storageProductValue) || 0;
    const numDays = parseInt(days) || 0;
    const tax = value * TAX_RATE;
    const storageCost = RATES.storage[productSize] * numDays;
    const total = tax + storageCost;

    setStorageResult({
      tax: tax.toFixed(2),
      storage: storageCost.toFixed(2),
      total: total.toFixed(2),
    });
  };

  // --- GENERADORES DE MENSAJES WHATSAPP ---
  
  // Mensaje para Envío
  const getShippingLink = () => {
    const text = `Hola! Coticé un envío en la web. \nProducto valor: U$D${shippingProductValue} \nDestino: ${location.toUpperCase()} \nTotal estimado: U$D${shippingResult.total}. \n¿Cómo prosigo?`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Mensaje para Almacenamiento
  const getStorageLink = () => {
    const text = `Hola! Coticé almacenamiento en la web. \nProducto valor: U$D${storageProductValue} \nTamaño: ${productSize} \nDías: ${days} \nTotal estimado: U$D${storageResult.total}. \n¿Cómo prosigo?`;
    return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    /* --- CAMBIO AQUÍ: Agregamos id="calculator" para que el botón funcione --- */
    <section 
      id="calculator" 
      className="calculator-section" 
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      <div className="calculator-container">
        
        {/* --- CALCULADORA 1: ENVÍO --- */}
        <div className="calculator-box">
          <h2>QUIERO QUE ENVIEN MI PRODUCTO A ARGENTINA</h2>
          <form className="calc-form" onSubmit={handleShippingCalc}>
            <label>¿Cuánto cuesta tu producto? (en USD)</label>
            <div className="input-group">
              <span className="currency-symbol">$</span>
              <input type="number" min="0" step="0.01" placeholder="0.00" value={shippingProductValue} onChange={(e) => setShippingProductValue(e.target.value)} required />
            </div>
            <label>¿Dónde te lo entregamos?</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="caba">CABA</option>
              <option value="gba">GBA</option>
            </select>
            <button type="submit">Calcular Envío</button>
          </form>

          {shippingResult && (
            <div className="result-box">
              <p>Servicio: <span>USD {shippingResult.tax}</span></p>
              <p>Envío a {location.toUpperCase()}: <span>USD {shippingResult.delivery}</span></p>
              <hr />
              <h3>Total a Pagar: USD {shippingResult.total}</h3>
              
              {/* BOTÓN WHATSAPP */}
              <a href={getShippingLink()} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Contactar por WhatsApp
              </a>
            </div>
          )}
        </div>

        {/* --- CALCULADORA 2: ALMACENAMIENTO --- */}
        <div className="calculator-box">
          <h2>QUIERO GUARDAR MI PRODUCTO EN ESTADOS UNIDOS</h2>
          <form className="calc-form" onSubmit={handleStorageCalc}>
            <label>¿Cuánto cuesta tu producto? (en USD)</label>
            <div className="input-group">
              <span className="currency-symbol">$</span>
              <input type="number" min="0" step="0.01" placeholder="0.00" value={storageProductValue} onChange={(e) => setStorageProductValue(e.target.value)} required />
            </div>
            <label>¿Cuántos días lo vamos a guardar?</label>
            <input type="number" min="1" placeholder="Ej: 5 días" value={days} onChange={(e) => setDays(e.target.value)} required />
            <label>Seleccioná el tamaño del paquete</label>
            <select value={productSize} onChange={(e) => setProductSize(e.target.value)}>
              <option value="small">Chico (Celular, Zapatillas)</option>
              <option value="medium">Mediano (Notebook, Consola)</option>
              <option value="large">Grande (Valija, TV)</option>
            </select>
            <button type="submit">Calcular Almacenamiento</button>
          </form>

          {storageResult && (
            <div className="result-box">
              <p>Servicio: <span>USD {storageResult.tax}</span></p>
              <p>Almacenamiento ({days} días): <span>USD {storageResult.storage}</span></p>
              <hr />
              <h3>Total a Pagar: USD {storageResult.total}</h3>

              {/* BOTÓN WHATSAPP */}
              <a href={getStorageLink()} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Contactar por WhatsApp
              </a>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Calculator;