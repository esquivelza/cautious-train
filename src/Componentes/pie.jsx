
function Pie(){
    return (    
    <footer className="bg-dark text-white mt-5 w-100 p-3">
        <div className="container py-4">
            <div className="row">
                <div className="col-md-4">
                    <h5>Informacion</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio.</p>
                </div>
                <div className="col-md-4">
                    <h5>Contacto</h5>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-white">Email: info@ejemplo.com</a></li>
                        <li><a href="#" className="text-white">Teléfono: +123 456 7890</a></li>
                        <li>
                            <a href="#" className="text-white me-2"><i class="fab fa-facebook"></i></a>
                            <a href="#" className="text-white me-2"><i class="fab fa-twitter"></i></a>
                            <a href="#" className="text-white"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-secondary text-center w-100 p-3">
            <p className="mb-0">&copy; 2024 Ejemplo. Todos los derechos reservados.</p>
        </div>
    </footer>
    );
}

export default Pie;