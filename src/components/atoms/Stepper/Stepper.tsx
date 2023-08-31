import React from "react";
import "./Stepper.css";
import ProgressBar from "@ramonak/react-progress-bar";

const Stepper = ({ step }: any) => {
  return (
    <ProgressBar
      completed={step}
      className="wrapper"
      borderRadius="0"
      height="8px"
      isLabelVisible={false}
      bgColor="#617ba2"
      maxCompleted={3}
      transitionDuration={"0.5s"}
    />
  );
};

export default Stepper;
