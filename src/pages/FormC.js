import React from "react";
import { useState, state } from "react";
import StepperC from "../components/stepper";
import { FormConocimiento } from "./FormPages/FormConocimiento";
import "../assets/css/FormC.css";
function FormC() {
    const [activate,SetActivate]=useState();

    const enviarActivate= ()=>{
        SetActivate('1');
    }
  return (
    <div className="container-fluid  mx-auto  container-form">
        <StepperC enviarActivate={1} />
        <div className="formularios">
            
            <FormConocimiento/>
        </div>
    </div>
  );
}

export default FormC;
