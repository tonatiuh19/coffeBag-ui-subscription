import React, { useState } from "react";
import "./SizeStep.css";
import RadioImage from "../../atoms/RadioImage/RadioImage";
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { MdCoffeeMaker, MdOutlineCoffeeMaker } from "react-icons/md";
import { TbCoffee } from "react-icons/tb";

const SizeStep = () => {
  const [selected, setSelected] = useState("1");

  const radioChangeHandler = (value: any) => {
    setSelected(value);
  };

  return (
    <div className="body-container">
      <h2 className="pb-3">Cuanto tomas?</h2>
      <small>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </small>
      <div className="radios-row-container pt-3">
        <div className="double-radios">
          <RadioImage
            children={<GiCoffeePot />}
            changed={radioChangeHandler}
            id="1"
            isSelected={selected === "1"}
            classSelected={selected === "1"}
            value="1"
            label={["1 taza al dia", "1"]}
            secondLabel={false}
          />
          <RadioImage
            children={<MdCoffeeMaker />}
            changed={radioChangeHandler}
            id="2"
            isSelected={selected === "2"}
            classSelected={selected === "2"}
            value="2"
            label={["2 tazas al dia", "2"]}
            secondLabel={false}
          />
        </div>
        <div className="double-radios">
          <RadioImage
            children={<GiCoffeePot />}
            changed={radioChangeHandler}
            id="3"
            isSelected={selected === ""}
            classSelected={selected === "3"}
            value="3"
            label={["3 tazas al dia", "3"]}
            secondLabel={false}
          />
          <RadioImage
            children={<MdCoffeeMaker />}
            changed={radioChangeHandler}
            id="4"
            isSelected={selected === "4"}
            classSelected={selected === "4"}
            value="4"
            label={["Tengo una oficina", "4"]}
            secondLabel={false}
          />
        </div>
        <div className="double-radios-alone">
          <RadioImage
            children={<GiCoffeePot />}
            changed={radioChangeHandler}
            id="5"
            isSelected={selected === "5"}
            classSelected={selected === "5"}
            value="5"
            label={["Tengo una empresa", "5"]}
            secondLabel={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SizeStep;
