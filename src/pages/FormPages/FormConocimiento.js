import React from "react";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
export const FormConocimiento = () => {

  const onChange2 = (e) => {
    const file = e.target.files[0]
}
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
          <Row className="row align-items-start">
            <Form.Group className="  col-sm-12 col-md-10 col-lg-6 ">
              <Form.Label htmlFor="disabledTextInput">Razon Social</Form.Label>
              <Form.Control id="Razonsocial1" placeholder="Razon Social" />
            </Form.Group>
            <Form.Group className="  col-sm-12 col-md-8 col-lg-6 d-flex">
              <div className="col-sm-4 col-5">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de Documento
                </Form.Label>
                <div>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className=" small ">
                      <Form.Check
                        inline
                        label="NIT"
                        name="documento1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="SE/SIN NIT"
                        name="documento1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">Numero</Form.Label>
                <Form.Control id="documentoRazon" placeholder="1007524364" />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control id="documentoRazon" placeholder="" />
              </div>
            </Form.Group>

            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Empresa
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" small ">
                    <Form.Check
                      inline
                      label="Publica"
                      name="Empresa1"
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Privada"
                      name="Empresa1"
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
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>

            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Fecha de constitucion
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="12/12/2022" />
            </Form.Group>
            <Form.Group className=" col-sm-12 col-md-8 col-lg-6 d-flex">
              <div className=" col-sm-6 col-6">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Empresa Constituida en otro País?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="  ">
                      <Form.Check
                        inline
                        label="Si"
                        name="empresa1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="empresa1"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Form.Group className="col-6 col-sm-6 ml">
                <Form.Label htmlFor="disabledTextInput">¿Cuál?</Form.Label>
                <Form.Control id="RazonSocialE" placeholder="Colombia" />
              </Form.Group>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Sociedad/Entidad
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Actividad Económica principal
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="12/12/2022" />
            </Form.Group>

            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Group className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Es estructura sin personería Jurídica?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className=" small ">
                      <Form.Check
                        inline
                        label="Si"
                        name="estructura1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="estructura1"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </Form.Group>
            </Form.Group>
            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Código CIIU</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="12/12/2022" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-8 col-lg-8 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Está obligado a implementar un Sistema de Autocontrol y
                  Gestión del Riesgo Integral LA/FT/FPADM(1)?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className=" small ">
                      <Form.Check
                        inline
                        label="Si"
                        name="SiNoObligacion1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="SiNoObligacion1"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-4 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Obligado a tributar en otro País?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className=" small ">
                      <Form.Check
                        inline
                        label="Si"
                        name="SiNoObligacion2"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="SiNoObligacion2"
                        type={type}
                        className="m-0 p0"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Pais 1</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Pais 2</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">TIN 1</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">TIN 2</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>

            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-12 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿La sociedad cuenta con un controlante Persona Natural o
                  Persona Jurídica según los artículos 26 y 27 de la ley 222 de
                  1995 (Sociedad será subordinada o controlada cuando su poder
                  de decisión se encuentre sometido a la voluntad de otra u
                  otras personas que serán su matriz o controlante)?:
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="  ">
                      <Form.Check
                        inline
                        label="Si"
                        name="empresa2"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="empresa2"
                        type={type}
                        className=""
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-6 col-lg-6 ">
              <Form.Label htmlFor="disabledTextInput">
                Nombre/Razón Social:
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className="  col-sm-12 col-md-6 col-lg-6 d-flex">
              <div className="col-sm-4 col-5">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de Documento
                </Form.Label>
                <div>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className=" small ">
                      <Form.Check
                        inline
                        label="NIT"
                        name="documento2"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="SE/SIN NIT"
                        name="documento2"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">Numero</Form.Label>
                <Form.Control id="documentoRazon" placeholder="1007524364" />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control id="documentoRazon" placeholder="" />
              </div>
            </Form.Group>
          </Row>
        </div>
        <div className="seccion ">
          <legend className="mt-0 pt-0 h5 text-center">
            1.2. Datos de Localización
          </legend>
          <Row>
            <Form.Group className=" col-12 col-sm-12 col-md-8 col-lg-6 ">
              <Form.Label htmlFor="disabledTextInput">
                Dirección Oficina Principal o Sede:
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Ciudad:</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Pais:</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Teléfono:</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">E-mail:</Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
          </Row>
        </div>
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.3. Datos Tributarios
          </legend>

          <Row>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-4 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Autoretención:
              </Form.Label>
              <div className="d-block">
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" small ">
                    <Form.Check
                      inline
                      label="Autorretenedor por Rendimientos Financieros"
                      name="Empresa1"
                      type={type}
                      className="col-12"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Privada"
                      name="Autorretenedor por otros Conceptos"
                      type={type}
                      className="col-12"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Mixta"
                      name="Otros conceptos"
                      type={type}
                      className="col-12"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-6 ">
              <Form.Label htmlFor="disabledTextInput">
                Catalogación Fiscal
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" small ">
                    <Form.Check
                      inline
                      label="Gran Contribuyente"
                      name="Empresa1"
                      type={type}
                      className="col-6"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Sujeto"
                      name="Empresa1"
                      type={type}
                      className="col-5"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="No Sujeto"
                      name="Empresa1"
                      type={type}
                      className="col-6"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Régimen Simple"
                      name="Empresa1"
                      type={type}
                      className="col-5"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Régimen Especial"
                      name="Empresa1"
                      type={type}
                      className="col-6"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-2 ">
              <Form.Label htmlFor="disabledTextInput">
                Responsable de IVA:
              </Form.Label>
              <div className="justify-content-center">
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" small ">
                    <Form.Check
                      inline
                      label="No"
                      name="Responsable1"
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Si"
                      name="Responsable2"
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-12">
              <Form.Label className="col-12">
                Nota: Para las siguientes condiciones tributarias se debe
                adjuntar resolución o soporte que lo acredite
              </Form.Label>

              <div>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className=" small ">
                    <Form.Check
                      inline
                      label="Autorretenedor por Rendimientos Financieros"
                      name="Responsable1"
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Autorretenedor por otros Conceptos"
                      name="Responsable2"
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="No Sujeto"
                      name="Responsable2"
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
              <Form.Control
                type="file"
                name="images"
                onChange={onChange2}
              />
            </Form.Group>
          </Row>
        </div>
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.4. Representante Legal
          </legend>
          <Row></Row>
        </div>
      </Form>
    </div>
  );
};
