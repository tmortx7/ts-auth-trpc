import React, { useContext, useEffect } from "react";
import { FormContext } from "../../context/FormContext";

function Stepper() {
  const { activeStepIndex } = useContext(FormContext);
  useEffect(() => {
    const stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach((step, i) => {
      if (i <= activeStepIndex) {
        step.classList.add("step-primary");
      } else {
        step.classList.remove("step-primary");
      }
    });
  }, [activeStepIndex]);
  return (
    <div className="flex w-2/3 flex-row items-center justify-center px-32 py-16">
      <ul className="steps">
        <li className="stepper-item step "></li>
        <li className="stepper-item step  "></li>
        <li className="stepper-item step"></li>
      </ul>
    </div>
  );
}

export default Stepper;
