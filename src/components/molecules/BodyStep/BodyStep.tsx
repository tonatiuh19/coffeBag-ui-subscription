import React, { useState } from "react";
import "./BodyStep.css";
import RadioImage from "../../atoms/RadioImage/RadioImage";
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { MdCoffeeMaker, MdOutlineCoffeeMaker } from "react-icons/md";
import { TbCoffee } from "react-icons/tb";

const BodyStep = () => {
  const [selected, setSelected] = useState("3");

  const radioChangeHandler = (value: any) => {
    setSelected(value);
  };

  return (
    <div className="body-container">
      <h2 className="pb-3">Como quieres el cuerpo?</h2>
      <small>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </small>
      <ul className="list-group pt-3">
        <RadioImage
          children={<GiCoffeeBeans />}
          changed={radioChangeHandler}
          id="1"
          isSelected={selected === "1"}
          classSelected={selected === "1"}
          value="1"
          label={["Grano Completo", ""]}
          secondLabel={true}
        />
        <RadioImage
          children={<GiCoffeePot />}
          changed={radioChangeHandler}
          id="2"
          isSelected={selected === "2"}
          classSelected={selected === "2"}
          value="2"
          label={["Molido Grueso", "Prensa Francesa"]}
          secondLabel={true}
        />
        <RadioImage
          children={<MdCoffeeMaker />}
          changed={radioChangeHandler}
          id="3"
          isSelected={selected === "3"}
          classSelected={selected === "3"}
          value="3"
          label={["Molido Medio", "Cafetera Convencional"]}
          secondLabel={true}
        />
        <RadioImage
          children={<MdOutlineCoffeeMaker />}
          changed={radioChangeHandler}
          id="4"
          isSelected={selected === "4"}
          classSelected={selected === "4"}
          value="4"
          label={["Molido Fino", "Maquina de Espresso o Cafetera Italiana"]}
          secondLabel={true}
        />
        <RadioImage
          children={<TbCoffee />}
          changed={radioChangeHandler}
          id="5"
          isSelected={selected === "5"}
          classSelected={selected === "5"}
          value="5"
          label={["Molido Extra Fino", "Cafetera Turca o Cezve"]}
          secondLabel={true}
        />
      </ul>
    </div>
  );
};

export default BodyStep;
