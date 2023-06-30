import { useContext } from "react";
import "../Cart/Cart.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../../context/CartContext";
import {FaTrashAlt} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"

function Cart() {

    const { cart, totalCompra, cantidadProductos, vaciarCarrito, eliminarArticulo } = useContext(CartContext)


    if (cart.length === 0) {
        return (
  
            <main>
                <header className="micarrito">
                <div>MIS COMPRAS</div>
                <div className="cart"><FaShoppingCart/> </div>
                
           
                </header>

                <div className="contenido">
                    <h1 className="mensaje-carrito-vacio"> El carrito está vacio... </h1>
                    <Link to={"/"} className="boton-ir-a-comprar"> Ir a comprar </Link>

                </div>

                <footer>
                    
                </footer>


                <div className="derecha">

                <h5 className="derecha-titulo">
                    RESUMEN TOTAL:
                </h5>
          

                <h5  className="derecha-detalle">
                    Cantidad Articulos: {cantidadProductos()}
                </h5>

                <h5  className="derecha-detalle">
                    Total Facturado: ${totalCompra()} 
                </h5>
            </div>
            </main>
        )
    }

    return (
        <>


            <main>
                <header className="micarrito">
                <div>MIS COMPRAS</div>
                <div className="cart"><FaShoppingCart/> </div>
                
           
                </header>



                <div className="contenido">
                    {
                        cart.map((producto) => (
                            <div key={producto.id}>

                                <div className="art">

                                    <div className="imagen">
                                    <p className="id">Id: {producto.id}</p>
                                        <img className="imagen" src={producto.foto} alt={producto.articulo} />
                                        <h5> {producto.articulo} </h5>
                                        <h5> {producto.descripcion} </h5>
                                        <h5> {producto.marca} </h5>
                                        
                                    </div>
                                    <button onClick={() => eliminarArticulo(producto.id)} className="boton-vaciar-carrito-art"><FaTrashAlt/></button>
                                </div>

                                

                                <div className="info-prod">
                                <p>Precio: $:{producto.precio}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p className="info-precio-total">Total: ${(producto.cantidad)*(producto.precio)}</p>
                                </div>
                                <hr />

                            </div>
                        ))
                    }
                    
                    <button onClick={vaciarCarrito} className="boton-vaciar-carrito"> Vaciar Carrito <FaTrashAlt/></button>

                </div>



                <footer>
                    
                </footer>


                <div className="derecha">

                <h5 className="derecha-titulo">
                    RESUMEN TOTAL:
                </h5>
          

                <h5  className="derecha-detalle">
                    Cantidad Articulos: {cantidadProductos()}
                </h5>

                <h5  className="derecha-detalle">
                    Total Facturado: ${totalCompra()} 
                </h5>
       
                

            </div>
            
            </main>




        </>

    );
}

export default Cart;