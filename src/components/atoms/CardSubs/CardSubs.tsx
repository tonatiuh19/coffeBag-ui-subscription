import React from "react";
import "./CardSubs.css";

const CardSubs = () => {
  return (
    <div className="card-subs-container">
      <h3>Barista</h3>
      <h3>$199</h3>
      <hr className="hr" />
      <div className="card-subs-package">
        <span>Envio gratis</span>
        <span>500 gr de Café</span>
        <span>Regalo especial</span>
      </div>
      <button type="button" className="btn btn-warning w-50">
        Suscribete
      </button>
    </div>
  );
};

export default CardSubs;
