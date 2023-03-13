import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export const FormConocimientoP3 = () => {
  return (
    <div className="formConocimiento p-2 d-grid h-100 ">
      <h4 className="text-center">
        {" "}
        FORMULARIO DE CONOCIMIENTO ­ PERSONA JURÍDICA/ ESTRUCTURA SIN PERSONERÍA
        JURÍDICA{" "}
      </h4>
      <h5 className="text-center"> II. DECLARACIÓN DE ORIGEN DE FONDOS</h5>
      <Form className="Formulario">
        <div className="seccion">
          <legend className="mt-0 pt-0 h5 text-center"></legend>
          <Row>
            <Form.Group className=" col-12 col-sm-12 col-md-12 col-lg-12 ">
              <Form.Label htmlFor="disabledTextInput" className="">
                En nombre propio y en mi calidad de representante legal
                <input
                  className="input-nombre-legal"
                  type="text"
                  placeholder=""
                />
                , de manera voluntaria y expresando que todo lo aquí consignado
                es cierto, realizo la siguiente declaración de origen de fondos
                a la entidad, con el propósito de que se pueda dar cumplimiento
                a la normatividad legal vigente establecida por la
                SUPERINTENDENCIA FINANCIERA DE COLOMBIA, el Estatuto Orgánico
                del Sistema Financiero (Decreto 663 de 1993), Leyes 190 de 1995
                y 1474 de 2011, y demás normas legales concordantes con la
                apertura y manejo de operaciones financieras:
              </Form.Label>
            </Form.Group>
            <Form.Group className=" col-12 ">
              <Form.Label htmlFor="disabledTextInput" className=" col-12">
                1. Los recursos que entrego, deposito y/o administro provienen
                de las siguientes fuentes: (Detalle de la ocupación, oficio,
                profesión, actividad, negocio, etc.)
              </Form.Label>
              <Form.Control id="RazonSocialE" placeholder="" />
              <Form.Control id="RazonSocialE" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="col-12  m-2">
                2. Declaro que mis recursos no provienen de ninguna actividad
                ilícita
              </Form.Label>
              <Form.Label className="col-12 m-2">
                3. Declaro que no admitiré que terceros efectúen pagos en mi
                nombre ni depósitos en mis cuentas con fondos provenientes de
                actividades ilícitas contempladas en el Código Penal Colombiano
                o en cualquier norma que lo modifique o adicione, ni efectuaré
                transacciones destinadas a tales actividades o en favor de
                personas relacionadas con las mismas.
              </Form.Label>
              <Form.Label className="col-12 m-2">
                4. Declaro que el país de procedencia de los recursos es:
                <input
                  className="input-nombre-legal"
                  type="text"
                  placeholder=""
                />
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
