import React from 'react';
import Logo from '../assets/img/logo.png';

import { Stepper, Step } from "react-form-stepper";
function StepperC(activate) {
    console.log(activate.enviarActivate)
  return (
    <Stepper
    activeStep={activate.enviarActivate}
    styleConfig={{
      activeBgColor: "#002060",
      activeTextColor: "#fff",
      inactiveBgColor: "#fff",
      inactiveTextColor: "#002060",
      completedBgColor: "#21C9C5",
      completedTextColor: "#fff",
      size: "2em",
    }}
    className={"stepper"}
    stepClassName={"stepper__step"}
  >
    <Step className="step" label="Conocimiento del Cliente" />
    <Step className="step" label="2" />
    <Step className="step" label="3" />
    <Step className="step" label="4" />
  </Stepper>
  );
}

export default StepperC;