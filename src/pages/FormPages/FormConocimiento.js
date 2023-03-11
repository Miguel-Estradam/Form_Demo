import React from "react";
import Form from "react-bootstrap/Form";
export const FormConocimiento = () => {
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
        <div className="seccion ">
          <legend className="mt-0 pt-0 h5 text-center">
            1.1. Datos Generales
          </legend>
          <div className="row align-items-start">
            <Form.Group className=" col-4 ">
              <Form.Label htmlFor="disabledTextInput">Razon Social</Form.Label>
              <Form.Control id="Razonsocial1" placeholder="Razon Social" />
            </Form.Group>
            <Form.Group className=" p-0 col-5 d-flex">
              <div className="col-4">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de Documento
                </Form.Label>
                <div>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mt-2 small ">
                      <Form.Check
                        inline
                        label="NIT"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="SE/SIN NIT"
                        name="group1"
                        type={type}
                        className="m-0 p0"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-7">
                <Form.Label htmlFor="disabledTextInput">Numero</Form.Label>
                <Form.Control id="documentoRazon" placeholder="1007524364" />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control id="documentoRazon" placeholder="" />
              </div>
            </Form.Group>

            <Form.Group className=" col-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Empresa
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mt-2 small ">
                    <Form.Check
                      inline
                      label="Publica"
                      name="group1"
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Privada"
                      name="group1"
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Mixta"
                      name="group1"
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
          </div>
          <div className="row align-items-start">
            <Form.Group className=" col-2">
              <Form.Label htmlFor="disabledTextInput">
                Fecha de constitucion
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="12/12/2022" />
            </Form.Group>
            <Form.Group className=" col-6 d-flex">
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">
                  ¿Empresa Constituida en otro País?
                </Form.Label>
                <div className="text-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mt-2 small ">
                      <Form.Check
                        inline
                        label="Si"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type={type}
                        className="m-0 p0"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Form.Group>
                <Form.Label htmlFor="disabledTextInput">¿Cuál?</Form.Label>
                <Form.Control id="RazonSocialE" placeholder="12/12/2022" />
              </Form.Group>
            </Form.Group>
          </div>
        </div>
      </Form>
    </div>
  );
};
