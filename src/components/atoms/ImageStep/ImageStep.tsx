import React from "react";
import "./ImageStep.css";
import Suscribete_1 from "../../../utils/images/suscribete_1.jpeg";
import Suscribete_2 from "../../../utils/images/suscribete_2.jpeg";
import Suscribete_3 from "../../../utils/images/suscribete_3.jpeg";

const ImageStep = ({ step }: any) => {
  if (step === 1) {
    return <img src={Suscribete_1} className="image-step" />;
  } else if (step === 2) {
    return <img src={Suscribete_2} className="image-step" />;
  } else {
    return <img src={Suscribete_3} className="image-step" />;
  }
};

export default ImageStep;
