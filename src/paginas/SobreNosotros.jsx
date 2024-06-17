import Contenido from "../Componentes/Contenido";
import Formulario from "../Componentes/Formulario";
import Modal from "../Componentes/Modal";
import Titulo from "../Componentes/Titulo";

function Nostros (){
    return(
        <div className="contenedorNosotros">
            <div className="nosotrosTitulo">
                <Titulo />
            </div>
            <div className="nostrosTexto">
                <Contenido />
            </div>
            <div className="nosotrosModal">
                <Modal />
            </div>
            <div className="nosotrosFormulario">
                <Formulario />
            </div>
        </div>
    );
}

export default Nostros;