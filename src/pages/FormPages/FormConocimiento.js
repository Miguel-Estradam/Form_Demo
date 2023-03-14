import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { $ } from "react-jquery-plugin";
import InputGroup from "react-bootstrap/InputGroup";
export const FormConocimiento = ({ formulario, handleChange }) => {
  const onChange2 = (e) => {
    const file = e.target.files[0];
  };

  setTimeout(() => {
    if (formulario.obligadoATributar === "Si") {
      $(".Tin1").addClass("activate");
    } else {
      $(".Tin1").removeClass("activate");
    }
    if (formulario.controlantePersona === "Si") {
      $(".sociedad1").removeClass("d-none").addClass("d-block");
      $(".sociedad2").removeClass("d-none").addClass("d-flex");
    } else {
      $(".sociedad1").removeClass("d-block").addClass("d-none");
      $(".sociedad2").removeClass("d-flex").addClass("d-none");
    }
  }, 100);

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
              <Form.Control
                id="Razonsocial1"
                placeholder="Razon Social"
                defaultValue={formulario.razonSocial1}
                onChange={handleChange("razonSocial1")}
                required
              />
            </Form.Group>
            <Form.Group className="  col-sm-12 col-md-8 col-lg-6 d-flex justify-content-end">
              <div className="col-sm-4 col-5">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de Documento
                </Form.Label>
                <Form.Group>
                  <Form.Select
                    id="tipoIRazonSocial1"
                    aria-label="Default select example "
                    defaultValue={formulario.tipoIRazonsocial1}
                    onChange={handleChange("tipoIRazonsocial1")}
                  >
                    <option value="NIT">NIT</option>
                    <option value="SE/Sin NIT">SE/Sin NIT</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">Numero:</Form.Label>
                <Form.Control
                  id="identificacionRazonSocial1"
                  placeholder="1007524364"
                  type="number"
                  required
                  defaultValue={formulario.identificacionRazonSocial1}
                  onChange={handleChange("identificacionRazonSocial1")}
                />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control
                  id="dvRazonsocial1"
                  placeholder=""
                  defaultValue={formulario.dvRazonsocial1}
                  onChange={handleChange("dvRazonsocial1")}
                />
              </div>
            </Form.Group>

            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Empresa
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    id="TipoEmpresa"
                    className=" small "
                    //Checked={formulario.TipoEmpresa}
                    onChange={handleChange("TipoEmpresa")}
                  >
                    <Form.Check
                      inline
                      label="Publica"
                      name="Empresa"
                      type={type}
                      value={"Publica"}
                      className=""
                      defaultChecked={
                        formulario.TipoEmpresa === "Publica" ? true : false
                      }
                      id={`Publica`}
                    />
                    <Form.Check
                      inline
                      label="Privada"
                      name="Empresa"
                      type={type}
                      className=""
                      defaultChecked={
                        formulario.TipoEmpresa === "Privada" ? true : false
                      }
                      value={"Privada"}
                      id={`Privada`}
                    />
                    <Form.Check
                      inline
                      label="Mixta"
                      name="Empresa"
                      type={type}
                      className=""
                      value={"Mixta"}
                      defaultChecked={
                        formulario.TipoEmpresa === "Mixta" ? true : false
                      }
                      id={`Mixta`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>

            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Fecha de constitucion
              </Form.Label>
              <Form.Control
                type="date"
                id="fechaConstitucion"
                placeholder="12/12/2022"
                defaultValue={formulario.fechaConstitucion}
                onChange={handleChange("fechaConstitucion")}
                aria-required
              />
            </Form.Group>
            <Form.Group className=" col-sm-12 col-md-8 col-lg-6 d-flex">
              <div className=" col-sm-6 col-6">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Empresa Constituida en otro País?
                </Form.Label>
                <div
                  className="text-center justify-content-center"
                  aria-required
                >
                  {["radio"].map((type) => (
                    <div
                      id="empresaConstitucion"
                      key={`empresaConstitucion}`}
                      className="  "
                      onChange={handleChange("empresaConstitucion")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="empresaConstitucion"
                        type={type}
                        value={"Si"}
                        defaultChecked={
                          formulario.empresaConstitucion === "Si" ? true : false
                        }
                        id={`empresaContitucionSi`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="empresaConstitucion"
                        type={type}
                        value={"No"}
                        className=""
                        defaultChecked={
                          formulario.empresaConstitucion === "No" ? true : false
                        }
                        id={`empresaContitucionNo`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <Form.Group className="col-6 col-sm-6 ml">
                <Form.Label htmlFor="disabledTextInput">¿Cuál?</Form.Label>
                <Form.Control
                  id="cualEmpresa"
                  placeholder=""
                  defaultValue={formulario.cualEmpresa}
                  onChange={handleChange("cualEmpresa")}
                />
              </Form.Group>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Sociedad/Entidad
              </Form.Label>
              <Form.Control
                id="tipoSociedadEntidad"
                placeholder=""
                defaultValue={formulario.tipoSociedadEntidad}
                onChange={handleChange("tipoSociedadEntidad")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">
                Actividad Económica principal
              </Form.Label>
              <Form.Control
                id="actividadEconomica1"
                placeholder=""
                defaultValue={formulario.actividadEconomica1}
                onChange={handleChange("actividadEconomica1")}
              />
            </Form.Group>

            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Group className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Es estructura sin personería Jurídica?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div
                      id="estructuraSinPersoneria"
                      key={`estructuraSinPersoneria`}
                      className=" small "
                      onChange={handleChange("estructuraSinPersoneria")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="estructura1"
                        type={type}
                        value={"Si"}
                        defaultChecked={
                          formulario.estructuraSinPersoneria === "Si"
                            ? true
                            : false
                        }
                        id={`estructuraSinPersoneriaSi`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="estructura1"
                        type={type}
                        value={"No"}
                        defaultChecked={
                          formulario.estructuraSinPersoneria === "No"
                            ? true
                            : false
                        }
                        className=""
                        id={`estructuraSinPersoneriaNo`}
                      />
                    </div>
                  ))}
                </div>
              </Form.Group>
            </Form.Group>
            <Form.Group className=" col-6 col-sm-6 col-md-4 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Código CIIU</Form.Label>
              <Form.Control
                id="codigoCIIU"
                placeholder=""
                defaultValue={formulario.codigoCIIU}
                onChange={handleChange("codigoCIIU")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-8 col-lg-8 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿Está obligado a implementar un Sistema de Autocontrol y
                  Gestión del Riesgo Integral LA/FT/FPADM(1)?
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className=" small "
                      id="obligadoAImplementar"
                      onChange={handleChange("obligadoAImplementar")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="SiNoObligacion1"
                        type={type}
                        value={"Si"}
                        defaultChecked={
                          formulario.obligadoAImplementar === "Si"
                        }
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="SiNoObligacion1"
                        type={type}
                        className=""
                        value={"No"}
                        defaultChecked={
                          formulario.obligadoAImplementar === "No"
                        }
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
                    <div
                      key={`inline-${type}`}
                      className=" small "
                      id="obligadoATributar"
                      onChange={handleChange("obligadoATributar")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="SiNoObligacion2"
                        type={type}
                        value={"Si"}
                        defaultChecked={formulario.obligadoATributar === "Si"}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="SiNoObligacion2"
                        type={type}
                        value={"No"}
                        defaultChecked={formulario.obligadoATributar === "No"}
                        className="m-0 p0"
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3  d-none Tin1">
              <Form.Label htmlFor="disabledTextInput">Pais 1</Form.Label>
              <Form.Control
                id="tributarPais1"
                placeholder=""
                defaultValue={formulario.tributarPais1}
                onChange={handleChange("tributarPais1")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3  d-none Tin1">
              <Form.Label htmlFor="disabledTextInput">Pais 2</Form.Label>
              <Form.Control
                id="tributarPais2"
                placeholder=""
                defaultValue={formulario.tributarPais2}
                onChange={handleChange("tributarPais2")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3  d-none Tin1">
              <Form.Label htmlFor="disabledTextInput">TIN 1</Form.Label>
              <Form.Control
                id="tributarTin1"
                placeholder=""
                defaultValue={formulario.tributarTin1}
                onChange={handleChange("tributarTin1")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3  d-none Tin1">
              <Form.Label htmlFor="disabledTextInput">TIN 2</Form.Label>
              <Form.Control
                id="tributarTin2"
                placeholder=""
                defaultValue={formulario.tributarTin2}
                onChange={handleChange("tributarTin2")}
              />
            </Form.Group>

            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-12 my-3 ">
              <div className=" col-sm-12 col-12">
                <Form.Label htmlFor="disabledTextInput" className="text-center">
                  ¿La sociedad cuenta con un controlante Persona Natural o
                  Persona Jurídica según los artículos 26 y 27 de la ley 222 de
                  1995 ?:
                  <br />
                  <strong>
                    (Sociedad será subordinada o controlada cuando su poder de
                    decisión se encuentre sometido a la voluntad de otra u otras
                    personas que serán su matriz o controlante)
                  </strong>
                </Form.Label>
                <div className="text-center justify-content-center">
                  {["radio"].map((type) => (
                    <div
                      key={`inline-${type}`}
                      className="  "
                      id="controlantePersona"
                      onChange={handleChange("controlantePersona")}
                    >
                      <Form.Check
                        inline
                        label="Si"
                        name="controlantePersona"
                        type={type}
                        value={"Si"}
                        defaultChecked={formulario.controlantePersona === "Si"}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="No"
                        name="controlantePersona"
                        type={type}
                        className=""
                        value={"No"}
                        defaultChecked={formulario.controlantePersona === "No"}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-12 col-md-5 col-lg-6 d-none sociedad1 mb-2  ">
              <Form.Label htmlFor="disabledTextInput" id="">
                Nombre/Razón Social:
              </Form.Label>
              <Form.Control
                id="nombreRazonSocial"
                placeholder=""
                defaultValue={formulario.nombreRazonSocial}
                onChange={handleChange("nombreRazonSocial")}
              />
            </Form.Group>
            <Form.Group className="  col-sm-12 col-md-8 col-lg-6 d-flex d-none sociedad2 justify-content-end">
              <div className="col-sm-4 col-5 ">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de Documento
                </Form.Label>
                <Form.Group>
                  <Form.Select
                    id="tipoIRazonSocial2"
                    aria-label="Default select example "
                    defaultValue={formulario.tipoIRazonsocial2}
                    onChange={handleChange("tipoIRazonsocial2")}
                  >
                    <option value="NIT">NIT</option>
                    <option value="SE/Sin NIT">SE/Sin NIT</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">Numero:</Form.Label>
                <Form.Control
                  id="identificacionRazonSocial2"
                  placeholder="1007524364"
                  type="number"
                  required
                  defaultValue={formulario.identificacionRazonSocial2}
                  onChange={handleChange("identificacionRazonSocial2")}
                />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control
                  id="dvRazonsocial2"
                  placeholder=""
                  defaultValue={formulario.dvRazonsocial2}
                  onChange={handleChange("dvRazonsocial2")}
                />
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-6 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                ¿Cuál es el horizonte previsto en la relación comercial?:
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="horizontePrevisto"
                    onChange={handleChange("horizontePrevisto")}
                  >
                    <Form.Check
                      inline
                      label="Menos de un año"
                      name="horizontePrevisto"
                      value="horizontePrevisto"
                      defaultChecked={
                        formulario.horizontePrevisto === "Menos de un año"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Entre 1 y 3 años"
                      value="Entre 1 y 3 años"
                      name="horizontePrevisto"
                      type={type}
                      defaultChecked={
                        formulario.horizontePrevisto === "Entre 1 y 3 años"
                      }
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Mayor a 3 años"
                      name="horizontePrevisto"
                      value="horizontePrevisto"
                      type={type}
                      defaultChecked={
                        formulario.horizontePrevisto === "horizontePrevisto"
                      }
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-6 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                ¿Medio a través de los cuales pretende depositar/recibir los
                recursos?:
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="medioDeDeposito"
                    onChange={handleChange("medioDeDeposito")}
                  >
                    <Form.Check
                      inline
                      label="Transferencias Internacionales"
                      value="Transferencias Internacionales"
                      name="medioDeDeposito"
                      defaultChecked={
                        formulario.medioDeDeposito ===
                        "Transferencias Internacionales"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-6 m-0"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Transferencias Nacionales"
                      value="Transferencias Nacionales"
                      name="medioDeDeposito"
                      defaultChecked={
                        formulario.medioDeDeposito ===
                        "Transferencias Nacionales"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-5 m-0"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Cheque"
                      value="Cheque"
                      name="medioDeDeposito"
                      defaultChecked={formulario.medioDeDeposito === "Cheque"}
                      type={type}
                      className="col-12 col-md-6 col-lg-6 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Efectivo"
                      value="Efectivo"
                      name="medioDeDeposito"
                      defaultChecked={formulario.medioDeDeposito === "Efectivo"}
                      type={type}
                      className="col-12 col-md-5 col-lg-5 m-0"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-12 col-lg-12">
              <Form.Label htmlFor="disabledTextInput">
                ¿Cuál es el propósito de la relación comercial?:
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" m-0 small "
                    id="propositoRelacion"
                    onChange={handleChange("propositoRelacion")}
                  >
                    <Form.Check
                      inline
                      label="Traslado de inmuebles para la administración"
                      value="Traslado de inmuebles para la administración"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion ===
                        "Traslado de inmuebles para la administración"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Administrar cuentas de terceros"
                      value="Administrar cuentas de terceros"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion ===
                        "Administrar cuentas de terceros"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-4 m-0"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Compra de unidad Inmobiliaria"
                      value="Compra de unidad Inmobiliaria"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion ===
                        "Compra de unidad Inmobiliaria"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Banca de Inversión"
                      value="Banca de Inversión"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Banca de Inversión"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Administrar recursos propios"
                      value="Administrar recursos propios"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion ===
                        "Administrar recursos propios"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Diversificación de portafolio"
                      value="Diversificación de portafolio"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion ===
                        "Diversificación de portafolio"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Dispersión de pagos"
                      value="Dispersión de pagos"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Dispersión de pagos"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Venta de TIDIS"
                      value="Venta de TIDIS"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Venta de TIDIS"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Venta de Acciones"
                      value="Venta de Acciones"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Venta de Acciones"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Negocios Fiduciarios"
                      value="Negocios Fiduciarios"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Negocios Fiduciarios"
                      }
                      type={type}
                      className="col-12 col-md-5 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Arrendatario PEI"
                      value="Arrendatario PEI"
                      name="propositoRelacion"
                      defaultChecked={
                        formulario.propositoRelacion === "Arrendatario PEI"
                      }
                      type={type}
                      className="col-12 col-md-6 col-lg-4 m-0"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
          </Row>
        </div>
        <div className="seccion ">
          <legend className="mt-0 pt-0 h5 text-center">
            1.2. Datos de Localización
          </legend>
          <Row>
            <Form.Group className=" col-12 col-sm-12 col-md-8 col-lg-6 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                Dirección Oficina Principal o Sede:
              </Form.Label>
              <Form.Control
                id="datosDireccion"
                placeholder=""
                defaultValue={formulario.datosDireccion}
                onChange={handleChange("datosDireccion")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">Ciudad:</Form.Label>
              <Form.Control
                id="datosCiudad"
                placeholder=""
                defaultValue={formulario.datosCiudad}
                onChange={handleChange("datosCiudad")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">Pais:</Form.Label>
              <Form.Control
                id="datosPais"
                placeholder=""
                defaultValue={formulario.datosPais}
                onChange={handleChange("datosPais")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">Teléfono:</Form.Label>
              <Form.Control
                id="datosTelefono"
                placeholder=""
                type="number"
                defaultValue={formulario.datosTelefono}
                onChange={handleChange("datosTelefono")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">E-mail:</Form.Label>
              <Form.Control
                id="datosCorreo"
                placeholder=""
                type="email"
                defaultValue={formulario.datosCorreo}
                onChange={handleChange("datosCorreo")}
              />
            </Form.Group>
          </Row>
        </div>
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.3. Datos Tributarios
          </legend>

          <Row>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-4 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                Tipo de Autoretención:
              </Form.Label>
              <div className="d-block">
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="tipoAutoretencion"
                    onChange={handleChange("tipoAutoretencion")}
                  >
                    <Form.Check
                      inline
                      label="Autorretenedor por Rendimientos Financieros"
                      value="Autorretenedor por Rendimientos Financieros"
                      name="tipoAutoretencion"
                      defaultChecked={
                        formulario.tipoAutoretencion ===
                        "Autorretenedor por Rendimientos Financieros"
                      }
                      type={type}
                      className="col-12"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Autorretenedor por otros Conceptos"
                      value="Autorretenedor por otros Conceptos"
                      name="tipoAutoretencion"
                      defaultChecked={
                        formulario.tipoAutoretencion ===
                        "Autorretenedor por otros Conceptos"
                      }
                      type={type}
                      className="col-12"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="Otros conceptos"
                      value="Otros conceptos"
                      name="tipoAutoretencion"
                      defaultChecked={
                        formulario.tipoAutoretencion === "Otros conceptos"
                      }
                      type={type}
                      className="col-12"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-6 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                Catalogación Fiscal
              </Form.Label>
              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="catalogoFiscal"
                    onChange={handleChange("catalogoFiscal")}
                  >
                    <Form.Check
                      inline
                      label="Gran Contribuyente"
                      value="Gran Contribuyente"
                      name="catalogoFiscal"
                      defaultChecked={
                        formulario.catalogoFiscal === "Gran Contribuyente"
                      }
                      type={type}
                      className="col-6"
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Sujeto"
                      value="Sujeto"
                      name="catalogoFiscal"
                      defaultChecked={formulario.catalogoFiscal === "Sujeto"}
                      type={type}
                      className="col-5"
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="No Sujeto"
                      value="No Sujeto"
                      name="catalogoFiscal"
                      defaultChecked={formulario.catalogoFiscal === "No Sujeto"}
                      type={type}
                      className="col-6"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Régimen Simple"
                      value="Régimen Simple"
                      name="catalogoFiscal"
                      defaultChecked={
                        formulario.catalogoFiscal === "Régimen Simple"
                      }
                      type={type}
                      className="col-5"
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      label="Régimen Especial"
                      value="Régimen Especial"
                      name="catalogoFiscal"
                      defaultChecked={
                        formulario.catalogoFiscal === "Régimen Especial"
                      }
                      type={type}
                      className="col-6"
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </div>
            </Form.Group>
            <Form.Group className="col-6  col-sm-6  col-md-4 col-lg-2 mb-2 ">
              <Form.Label htmlFor="disabledTextInput">
                Responsable de IVA:
              </Form.Label>
              <div className="justify-content-center">
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="resposableIva"
                    onChange={handleChange("resposableIva")}
                  >
                    <Form.Check
                      inline
                      label="Si"
                      value="Si"
                      name="resposableIva"
                      defaultChecked={formulario.resposableIva === "Si"}
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="No"
                      value="No"
                      name="resposableIva"
                      defaultChecked={formulario.resposableIva === "No"}
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
                <strong>
                  Nota: Para las siguientes condiciones tributarias se debe
                  adjuntar resolución o soporte que lo acredite
                </strong>
              </Form.Label>

              <div>
                {["radio"].map((type) => (
                  <div
                    key={`inline-${type}`}
                    className=" small "
                    id="condicionesTributarias"
                    onChange={handleChange("condicionesTributarias")}
                  >
                    <Form.Check
                      inline
                      label="Autorretenedor por Rendimientos Financieros"
                      value="Autorretenedor por Rendimientos Financieros"
                      name="condicionesTributarias"
                      defaultChecked={
                        formulario.condicionesTributarias ===
                        "Autorretenedor por Rendimientos Financieros"
                      }
                      type={type}
                      className=""
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Autorretenedor por otros Conceptos"
                      value="Autorretenedor por otros Conceptos"
                      name="condicionesTributarias"
                      defaultChecked={
                        formulario.condicionesTributarias ===
                        "Autorretenedor por otros Conceptos"
                      }
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      label="No Sujeto"
                      value="No Sujeto"
                      name="condicionesTributarias"
                      defaultChecked={
                        formulario.condicionesTributarias === "No Sujeto"
                      }
                      type={type}
                      className=""
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>
              <Form.Control type="file" name="images" onChange={onChange2} />
            </Form.Group>
          </Row>
        </div>
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center">
            1.4. Representante Legal
          </legend>
          <Row>
            <Form.Group className=" col-sm-12 col-md-5 col-lg-6">
              <Form.Label htmlFor="disabledTextInput">
                Nombre/Razón Social:
              </Form.Label>
              <Form.Control
                placeholder=""
                id="razonSocial3RepresentanteLegal"
                defaultValue={formulario.razonSocial3RepresentanteLegal}
                onChange={handleChange("razonSocial3RepresentanteLegal")}
              />
            </Form.Group>
            <Form.Group className="  col-sm-12 col-md-7 col-lg-6 d-flex ">
              <div className="col-sm-5 col-5">
                <Form.Label htmlFor="disabledTextInput">
                  Tipo de documento
                </Form.Label>
                <Form.Group>
                  <Form.Select
                    aria-label="Default select example "
                    id="tipoIRazonsocial3RepresentanteLegal"
                    defaultValue={
                      formulario.tipoIRazonsocial3RepresentanteLegal
                    }
                    onChange={handleChange(
                      "tipoIRazonsocial3RepresentanteLegal"
                    )}
                  >
                    <option value="C.C">C.C</option>
                    <option value="C.D">C.D</option>
                    <option value="C.E">C.E</option>
                    <option value="P.P">P.P</option>
                    <option value="NIT">NIT</option>
                    <option value="P.P">SE/Sin NIT</option>
                  </Form.Select>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Label htmlFor="disabledTextInput">Numero</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1007524364"
                  id="identificacionRazonSocial3RepresentanteLegal"
                  defaultValue={
                    formulario.identificacionRazonSocial3RepresentanteLegal
                  }
                  onChange={handleChange(
                    "identificacionRazonSocial3RepresentanteLegal"
                  )}
                />
              </div>
              <div className="col-1 ">
                <Form.Label htmlFor="disabledTextInput">D.V</Form.Label>
                <Form.Control
                  id="dvRazonsocial3RepresentanteLegal"
                  type="number"
                  placeholder=""
                  defaultValue={formulario.dvRazonsocial3RepresentanteLegal}
                  onChange={handleChange("dvRazonsocial3RepresentanteLegal")}
                />
              </div>
            </Form.Group>
            <Form.Group className=" col-12 col-sm-12 col-md-6 col-lg-6 ">
              <Form.Label htmlFor="disabledTextInput">
                Dirección: <strong>( donde ejerce sus funciones )</strong>
              </Form.Label>
              <Form.Control
                id="direccionEjerceCargo"
                placeholder=""
                defaultValue={formulario.direccionEjerceCargo}
                onChange={handleChange("direccionEjerceCargo")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-3 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Cargo:</Form.Label>
              <Form.Control
                id="CargoEjercido"
                placeholder=""
                defaultValue={formulario.CargoEjercido}
                onChange={handleChange("CargoEjercido")}
              />
            </Form.Group>
            <Form.Group className=" col-12 col-sm-6 col-md-3 col-lg-3 ">
              <Form.Label htmlFor="disabledTextInput">Telefono</Form.Label>
              <Form.Control
                type="number"
                id="telefonoCargo"
                placeholder=""
                defaultValue={formulario.telefonoCargo}
                onChange={handleChange("telefonoCargo")}
              />
            </Form.Group>
          </Row>
        </div>
      </Form>
    </div>
  );
};
