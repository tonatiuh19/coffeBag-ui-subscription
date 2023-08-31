import React from "react";
import "./MainLayout.css";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import { NodeLayoutInterface } from "../../../interfaces/NodeLayoutInterface";

const MainLayout = ({
  children,
  step,
  handlePreviousStep,
}: NodeLayoutInterface) => {
  return (
    <div className="full-content">
      <Header step={step} handlePreviousStep={handlePreviousStep} />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
