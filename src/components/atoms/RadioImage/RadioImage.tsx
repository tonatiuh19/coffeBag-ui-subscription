import React, { useState } from "react";
import "./RadioImage.css";
import { RadioImageInterface } from "../../../interfaces/RadioImageInterface";

const RadioImage = (radio: RadioImageInterface) => {
  const {
    changed,
    id,
    isSelected,
    children,
    value,
    label,
    classSelected,
    secondLabel,
  } = radio;
  const [selected, setSelected] = useState(classSelected);
  return (
    <ul
      className={
        classSelected
          ? "radio-image-container-selected"
          : "radio-image-container-not-selected"
      }
    >
      <input
        id={id}
        onChange={(e) => changed(e.target.value)}
        value={value}
        type="radio"
        checked={isSelected}
        className="radio-input"
      />
      <label htmlFor={id} className="label-radio">
        <div className="radios-container">
          <div className="icon-item">{children}</div>
          <div className="info-item">
            {secondLabel ? <span>{label[1]}</span> : null}
            <span>{label[0]}</span>
          </div>
        </div>
      </label>
    </ul>
  );
};

export default RadioImage;
