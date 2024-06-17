import React from 'react';
import '../estilos/inicio.css';
import Titulo from '../Componentes/Titulo';
import Contenido from '../Componentes/Contenido';
import Modal from '../Componentes/Modal';
import Formulario from '../Componentes/Formulario';
import Pie from '../Componentes/pie';


import imagen1 from '../imagenes/imagen1.jpg';
import imagen2 from '../imagenes/imagen2.jpg';
import imagen3 from '../imagenes/imagen3.jpg';
import imagen4 from '../imagenes/imagen4.jpg';
import imagen5 from '../imagenes/imagen5.jpg';
import imagen6 from '../imagenes/imagen6.jpg';

const Inicio = () => {
  return (
    <div className='contenedorInicio'> 
      <div className='contenedorTitulo'>
        <h2 className='Bold text shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <Titulo titulo="CONSTRUCTORA N.E.Z" />
        </h2>
      </div>
      <div className='inicioContenedor2'>
        <div className='titulo2 shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <Titulo titulo="BIENVENIDO :)" />
        </div>
        <div className='inicioModal'>  
          <Modal modalBoton='IMPORTANTE' modalTitulo='Titulo Importante' modalTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur obcaecati soluta harum ducimus debitis quisquam reiciendis iusto odio, neque voluptatem non accusantium itaque a est assumenda unde rerum excepturi.'/>
          <Modal modalBoton='RELEVANTE'  modalTitulo='Titulo Relevante' modalTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur obcaecati soluta harum ducimus debitis quisquam reiciendis iusto odio, neque voluptatem non accusantium itaque a est assumenda unde rerum excepturi.'/>
          <Modal modalBoton='INTRODUCCION' modalTitulo='Titulo Introduccion' modalTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur obcaecati soluta harum ducimus debitis quisquam reiciendis iusto odio, neque voluptatem non accusantium itaque a est assumenda unde rerum excepturi.' />
          <Modal modalBoton='SDJKLSDFJK'  modalTitulo='Titulo kasdfhñas' modalTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur obcaecati soluta harum ducimus debitis quisquam reiciendis iusto odio, neque voluptatem non accusantium itaque a est assumenda unde rerum excepturi.'/>
          <Modal modalBoton='CONCLUCION'  modalTitulo='Titulo Conclucion' modalTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur obcaecati soluta harum ducimus debitis quisquam reiciendis iusto odio, neque voluptatem non accusantium itaque a est assumenda unde rerum excepturi.'/>
        </div>
      </div>
      <div className='inicioContenido'>
        <Contenido contenidoTituloTexto='INFORMACION GENERAL' src={imagen1} contenidoTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates fugiat est et at cumque porro modi eligendi? Aperiam sunt consectetur vero asperiores sit quos perferendis perspiciatis aliquid repudiandae illo.' />
        <Contenido contenidoTituloTexto='INFORMACION GENERAL' src={imagen2} contenidoTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates fugiat est et at cumque porro modi eligendi? Aperiam sunt consectetur vero asperiores sit quos perferendis perspiciatis aliquid repudiandae illo.' />
        <Contenido contenidoTituloTexto='INFORMACION GENERAL' src={imagen3} contenidoTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates fugiat est et at cumque porro modi eligendi? Aperiam sunt consectetur vero asperiores sit quos perferendis perspiciatis aliquid repudiandae illo.' />
        <Contenido contenidoTituloTexto='INFORMACION GENERAL' src={imagen4} contenidoTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates fugiat est et at cumque porro modi eligendi? Aperiam sunt consectetur vero asperiores sit quos perferendis perspiciatis aliquid repudiandae illo.' />
        <Contenido contenidoTituloTexto='INFORMACION GENERAL' src={imagen5} contenidoTexto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates fugiat est et at cumque porro modi eligendi? Aperiam sunt consectetur vero asperiores sit quos perferendis perspiciatis aliquid repudiandae illo.' />
      </div>
      <div className='inicioFormulario'>
        <Formulario />
      </div>
      <Pie />
    </div>
  );
};

export default Inicio;

