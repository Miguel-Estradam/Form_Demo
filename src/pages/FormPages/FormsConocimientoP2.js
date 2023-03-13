import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export const FormConocimientoP2 = () => {
  return (
    <div className="formConocimiento p-2 d-grid h-100 ">
      <h4 className="text-center">
        {" "}
        FORMULARIO DE CONOCIMIENTO ­ PERSONA JURÍDICA/ ESTRUCTURA SIN PERSONERÍA
        JURÍDICA{" "}
      </h4>
      <h5 className="text-center">
        {" "}
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
                    <div key={`inline-${type}`} className="  ">
                      <Form.Check
                        inline
                        label="Si"
                        name="socios1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
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
                    <div key={`inline-${type}`} className="  ">
                      <Form.Check
                        inline
                        label="Si"
                        name="socios1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
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
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.6. Operaciones Internacionales
          </legend>
          </div>
      </Form>
    </div>
  );
};
