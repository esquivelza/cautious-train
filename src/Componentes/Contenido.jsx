import React from 'react';
import '../estilos/contenido.css'; // Asegúrate de que la ruta al archivo CSS sea correcta

const Contenido = (props) => { // Corregido: props debe ser el único argumento en la función
    return (
        <div className="contenedorContenido shadow p-3 mb-5 bg-body-tertiary rounded">
            <img
                className='contenidoImg shadow p-3 mb-5 rounded'
                src={props.src} 
                alt="Contenido" 
                style={{ maxWidth: '300px' }}
            />
            <div className="contenedorTexto">
                <p className='font-monospace fs-4'>{props.contenidoTituloTexto}</p>
                <p className='font-monospace fs-5'>{props.contenidoTexto}</p>
            </div>
        </div>
    );
};

export default Contenido;

