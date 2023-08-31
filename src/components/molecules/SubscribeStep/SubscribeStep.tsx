import React from "react";
import "./SubscribeStep.css";
import CardSubs from "../../atoms/CardSubs/CardSubs";

const SubscribeStep = () => {
  return (
    <div className="subs-container">
      <h2 className="pb-3">Este es tu paquete</h2>
      <div className="packages-container">
        <div className="card-container">
          <CardSubs />
        </div>
      </div>
    </div>
  );
};

export default SubscribeStep;
