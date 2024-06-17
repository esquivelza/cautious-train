import React from "react";

function Tarjetas(props){
    return(
        <div className="contenedorTarjetas container mt-5">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src={props.materialesImg} className="card-img-top" alt="Producto 1" />
                    <div className="card-body">
                        <h5 className="card-title">{props.producto}</h5>
                        <p className="card-text">{props.productoDescripcion}</p>
                        <a href={props.linkProducto} className="btn btn-primary">{props.botom}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Tarjetas;