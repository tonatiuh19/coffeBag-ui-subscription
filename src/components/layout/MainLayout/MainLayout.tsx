import React from "react";
import "./MainLayout.css";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import { NodeLayoutInterface } from "../../../interfaces/NodeLayoutInterface";

const MainLayout = ({ children }: NodeLayoutInterface) => {
  return (
    <div className="full-content">
      <Header />
      <main className="d-flex align-items-center justify-content-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
