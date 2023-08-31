import React from "react";
import "./Header.css";
import Stepper from "../../atoms/Stepper/Stepper";
import Logo from "../../../utils/images/logo.png";
import { IoMdArrowBack, IoMdClose } from "react-icons/io";

const Header = ({ step, handlePreviousStep }: any) => {
  return (
    <div className="main-header">
      <div className="container-header">
        <div className="back">
          {step !== 1 ? (
            <button className="button" onClick={() => handlePreviousStep(step)}>
              <IoMdArrowBack size={30} />
            </button>
          ) : (
            <button className="button button-first">
              <IoMdArrowBack size={30} color="#FFFFFF" />
            </button>
          )}
        </div>
        <div className="step-container">
          <img src={Logo} className="logo prevent-select" />
          <small className="step-text">{step} / 3</small>
        </div>
        <div className="close">
          <button className="button">
            <IoMdClose size={30} />
          </button>
        </div>
      </div>
      <Stepper step={step} />
    </div>
  );
};

export default Header;
