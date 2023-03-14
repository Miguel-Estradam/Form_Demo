import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { $ } from "react-jquery-plugin";
import { GeneratePDF } from "../PDF/GeneratePDF";

export const FormConocimientoP2 = ({ formulario, handleChange }) => {
  const [showPDF, setShowPDF] = useState(false);

  // const activarSociedad = () => {
  //   $(".sociedad1").removeClass("d-none").addClass("d-block");
  //   $(".sociedad2").removeClass("d-none").addClass("d-flex");
  // };
  // const desactivarSociedad = () => {
  //   $(".sociedad1").removeClass("d-block").addClass("d-none");
  //   $(".sociedad2").removeClass("d-flex").addClass("d-none");
  // };
  return (
    <div className="formConocimiento p-2 d-grid h-100 ">
      <h4 className="text-center">
        FORMULARIO DE CONOCIMIENTO ­ PERSONA JURÍDICA/ ESTRUCTURA SIN PERSONERÍA
        JURÍDICA{" "}
      </h4>
      <h5 className="text-center">
        I. INFORMACIÓN DE CONOCIMIENTO DEL CLIENTE
      </h5>
      <Form className="Formulario">
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.5. Socios /Accionistas
          </legend>
          <Row>
            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-8 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Alguno de los socios o accionistas directos e indirectos, son
                  personas Expuestas Políticamente, de acuerdo con las
                  siguientes consideraciones: (i) detente la calidad de PEP de
                  acuerdo con el Decreto 830 de 2021, sean PEP extranjeros
                  (ejerce funciones públicas destacadas en otro país), o cargos
                  directivos de Organizaciones Internacionales, las personas que
                  (ii) tengan una sociedad conyugal, de hecho o de derecho,
                  (iii) vínculo familiar hasta el segundo grado de
                  consanguinidad, segundo de afinidad y primero civil con una
                  persona PEP y (iv)sea asociado cercano o ejerza el control de
                  la persona jurídica, en los términos del artículo 261 del
                  Código del Comercio?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="  "
                      id="sociosEspuestosPoliticamente"
                      onChange={handleChange("sociosEspuestosPoliticamente")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        value="Si"
                        name="sociosEspuestosPoliticamente"
                        defaultChecked={
                          formulario.sociosEspuestosPoliticamente === "Si"
                        }
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        value="No"
                        name="sociosEspuestosPoliticamente"
                        defaultChecked={
                          formulario.sociosEspuestosPoliticamente === "No"
                        }
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-4 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Inscrito en el Registro Nacional de Valores y Emisores
                  (RNVE)? (Si está inscrito en el registro nacional de Valores y
                  Emisores no es necesario identificar a los beneficiarios
                  finales de dichas sociedades):
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="  "
                      id="inscritoRegistroNacional"
                      onChange={handleChange("inscritoRegistroNacional")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="inscritoRegistroNacional"
                        value={"Si"}
                        defaultChecked={
                          formulario.inscritoRegistroNacional === "Si"
                        }
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        value="No"
                        defaultChecked={
                          formulario.inscritoRegistroNacional === "Si"
                        }
                        name="socios1"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="col-12 text-center m-2">
                Relacione en el Anexo Persona Jurídica ­Composición Accionaria
                la (s) Persona Expuesta Políticamente, la identidad de los
                accionistas o asociados que tengan directa o indirectamente una
                participación igual o superior al 5% de su capital social,
                aporte o participación en la entidad. Así mismo, la
                identificación de los beneficiarios finales, que cumplan con la
                categorización de Pep´s de acuerdo con la pregunta anterior.
              </Form.Label>
            </Form.Group>
          </Row>
        </div>
        {/* <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.6. Operaciones Internacionales
          </legend>
          <Row>
            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-4 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Realiza Operaciones en moneda Extranjera?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="  ">
                      <Form.Check
                        inline
                        label="Si"
                        name="operaciones"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="operaciones"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div> */}
        {/* </div> */}
        {/* </Form.Group> */}
        {/* </Row> */}
        {/* </div> */}
      </Form>

      <GeneratePDF
        showPDF={showPDF}
        setShowPDF={setShowPDF}
        formulario={formulario}
      />
      <Button onClick={() => setShowPDF(true)}>Generar PDF</Button>
    </div>
  );
};
