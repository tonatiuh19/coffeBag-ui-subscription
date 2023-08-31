import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import WizardLayout from "./components/layout/WizardLayout/WizardLayout";
import { useWizard, Wizard } from "react-use-wizard";
import BodyStep from "./components/molecules/BodyStep/BodyStep";
import FlavorStep from "./components/molecules/FlavorStep/FlavorStep";
import SubscribeStep from "./components/molecules/SubscribeStep/SubscribeStep";
import ImageStep from "./components/atoms/ImageStep/ImageStep";
import SizeStep from "./components/molecules/SizeStep/SizeStep";
import useResponsive from "./shared/hooks/useResponsive/useResponsive";

const StepsHandler = forwardRef((props: any, ref) => {
  const {
    nextStep,
    previousStep,
    isLoading,
    activeStep,
    stepCount,
    isLastStep,
    isFirstStep,
  } = useWizard();
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState(false);
  const { width } = useResponsive();

  const handleStepper = (value: any) => {
    if (value === "prev") {
      setStep((step) => step - 1);
    } else if (value === "next") {
      setStep((step) => step + 1);
    }

    props.handleChange(step);
  };

  useImperativeHandle(ref, () => ({
    childFunction1() {
      previousStep();
      handleStepper("prev");
    },
  }));

  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    handleStepper("actual");
  }, [step]);

  useEffect(() => {
    if (width < 930) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [width]);

  if (isLastStep) {
    return null;
  } else {
    return (
      <div className="footer_buttons">
        <button
          className={mobile ? "button-back-slim" : "button-back-full"}
          onClick={() => {
            previousStep();
            handleStepper("prev");
          }}
          disabled={isLoading || isFirstStep}
        >
          Previous
        </button>
        <button
          className={mobile ? "button-next-slim" : "button-next-full"}
          onClick={() => {
            nextStep();
            handleStepper("next");
          }}
          disabled={isLoading || isLastStep}
        >
          Next
        </button>
      </div>
    );
  }
});

function App() {
  const [stepper, setStepper] = useState(1);
  const [mobile, setMobile] = useState(false);
  const { width } = useResponsive();
  const childRef = useRef<any>(null);

  const handleChange = (value: any) => {
    setStepper(value);
  };

  const handlePreviousStep = (value: any) => {
    childRef.current.childFunction1();
  };

  useEffect(() => {
    if (width < 930) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [width]);

  return (
    <MainLayout step={stepper} handlePreviousStep={handlePreviousStep}>
      <div className="wizard-container">
        {mobile && stepper !== 3 ? (
          <div className="image-item">
            <ImageStep step={stepper} />
          </div>
        ) : null}
        <div className="form-item">
          <WizardLayout>
            <Wizard
              footer={
                <StepsHandler handleChange={handleChange} ref={childRef} />
              }
            >
              <BodyStep />
              {/*<FlavorStep />*/}
              <SizeStep />
              <SubscribeStep />
            </Wizard>
          </WizardLayout>
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
