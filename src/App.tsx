import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import WizardLayout from "./components/layout/WizardLayout/WizardLayout";
import { useWizard, Wizard } from "react-use-wizard";

const Step = ({ number }: any) => {
  const { handleStep } = useWizard();

  handleStep(() => {
    alert(`Going to step ${number}`);
  });

  return <p>Step {number}</p>;
};

const StepsHandler = () => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep,
  } = useWizard();

  return (
    <code>
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>Has previous step: {!isFirstStep ? "✅" : "⛔"}</p>
        <br />
        <p>Has next step: {!isLastStep ? "✅" : "⛔"} </p>
        <br />
        <p>
          Active step: {activeStep + 1} <br />
        </p>
        <br />
        <p>
          Total steps: {stepCount} <br />
        </p>
      </div>
      <div>
        <button
          onClick={() => previousStep()}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </button>
        <button onClick={() => nextStep()} disabled={isLoading || isLastStep}>
          Next
        </button>
      </div>
    </code>
  );
};

function App() {
  return (
    <MainLayout>
      <WizardLayout>
        <Wizard footer={<StepsHandler />}>
          <Step number={1} />
          <Step number={2} />
          <Step number={3} />
        </Wizard>
      </WizardLayout>
    </MainLayout>
  );
}

export default App;
