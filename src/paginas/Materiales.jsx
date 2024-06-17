import React from "react";
import Titulo from "../Componentes/Titulo.jsx";
import Contenido from "../Componentes/Contenido.jsx";
import Tarjetas from "../Componentes/Tarejetas.jsx";
import Modal from "../Componentes/Modal.jsx";
import Formulario from "../Componentes/Formulario";

function Materiales(){
    return(
        <div className="contenedorMateriales">
            <div className="materialesTitulo">
                <Titulo titulo="COMPRA CON NOSOTROS"/>
            </div>            
            <div className="contenedorTarjetas">
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
                <Tarjetas />
            </div>
            <div className="materialesTitulo2">
                <Titulo titulo="SOBRE NUESTROS MATERIALES"/>
            </div>
            <div className="contenedorModal">
                <Modal />
                <Modal />
                <Modal />
                <Modal />
                <Modal />
            </div>
            <div className="materialesTitulo3">
                <Titulo titulo="COMENTARIOS"/>
            </div>
            <div className="contenedorTexto">
                <Contenido contenidoTexto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo laborum qui doloribus voluptas magnam, distinctio labore illum accusantium, dignissimos, officia autem quis modi? Natus error nostrum blanditiis eaque vero?"/>
                <Contenido contenidoTexto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo laborum qui doloribus voluptas magnam, distinctio labore illum accusantium, dignissimos, officia autem quis modi? Natus error nostrum blanditiis eaque vero?"/>
                <Contenido contenidoTexto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo laborum qui doloribus voluptas magnam, distinctio labore illum accusantium, dignissimos, officia autem quis modi? Natus error nostrum blanditiis eaque vero?"/>
                <Contenido contenidoTexto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo laborum qui doloribus voluptas magnam, distinctio labore illum accusantium, dignissimos, officia autem quis modi? Natus error nostrum blanditiis eaque vero?"/>
                <Contenido contenidoTexto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illo laborum qui doloribus voluptas magnam, distinctio labore illum accusantium, dignissimos, officia autem quis modi? Natus error nostrum blanditiis eaque vero?"/>
            </div>
            <div className="formularoMAteriales">
                <Formulario />
            </div>
        </div>
    );
}
export default Materiales;