

function Formulario(props) {
    return(
       <div className="contenedorFormulario">
        <div className="container mt-5">
    <h2>{props.formularioTitulo}</h2>
    <form>
      <div className="form-group">
        <label htmlFor="nombre">{props.casillaUno}</label>
        <input type="text" className="form-control" id="nombre" placeholder={props.casillaUno} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" />
      </div>
      <button type="submit" className="btn btn-primary">{props.formularioBoton}</button>
    </form>
  </div>
       </div>
    );
}
export default Formulario;