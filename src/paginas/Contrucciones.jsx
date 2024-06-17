import React from "react";
import Titulo from "../Componentes/Titulo";
import Contenido from "../Componentes/Contenido";
import Tarjetas from "../Componentes/Tarejetas";
import Modal from "../Componentes/Modal";
import Formulario from "../Componentes/Formulario";

function Contruciones(){
    return(
        <div className="contendorConstrucciones">
            <div className="construccionesTitulo">
                <Titulo />
            </div>
            <div className="construccionesTexto">
                <Contenido />
            </div>
            <div className="construcionesTarjetas">
                <Tarjetas />
            </div>
            <div className="construccionesModal">
                <Modal />
            </div>
            <div className="construccionesFormulario">
                <Formulario />
            </div>
        </div>
    );
}

export default Contruciones;