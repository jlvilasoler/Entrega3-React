import { useContext } from "react";
import "../Cart/Cart.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../CardWidget/CardWidget"
import "../ItemDetail/ItemDetail"
import "../ItemCounter/ItemCounter"


function Cart() {



    const { cart, totalCompra, cantidadProductos, vaciarCarrito, eliminarArticulo } = useContext(CartContext)

    if (cart.length === 0) {
        return (

            <main>
                <header className="micarrito">
                    <div>MIS COMPRAS</div>
                    <div className="cart"><FaShoppingCart /> </div>


                </header>

                <div className="contenido">
                    <h4 className="mensaje-carrito-vacio"> Por el momento no hay articulos en el carrito... </h4>
                    <Link to={"/"} className="boton-ir-a-comprar"> Ir a comprar </Link>

                </div>

                <footer>

                </footer>


                <div className="derecha">

                    <h5 className="derecha-titulo">
                        RESUMEN TOTAL:
                    </h5>


                    <h5 className="derecha-detalle">
                        Cantidad Articulos: {cantidadProductos()}
                    </h5>

                    <h5 className="derecha-detalle">
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
                    <div className="cart"><FaShoppingCart /> </div>


                </header>



                <div className="contenido">
                    {
                        cart.map((producto) => (
                            <div key={producto.id}>

                                <div className="art">

                                    <div className="imagen-container">

                                        <div className="container-boton-eliminar-art">
                                            <button onClick={() => eliminarArticulo(producto.id)} className="boton-vaciar-carrito-art"><FaTrashAlt /></button>
                                        </div>

                                        <p className="id">Id: {producto.id}</p>
                                        <img className="imagen" src={producto.foto} alt={producto.articulo} />
                                        <h5 className="producto"> {producto.articulo} </h5>
                                        <h5 className="marca"> {producto.marca} </h5>
                                        <h5 className="desc"> {producto.descripcion} </h5>


                                    </div>

                                </div>

                                <br />

                                {/*<div className="contador-cart">
                                    <button className="btn btn-primary" onClick={sumarProducto}> ➕ </button>
                                    <span className="display">{producto.cantidad}</span>
                                    <button className="btn btn-primary" onClick={restarProducto}> ➖ </button>
                                    </div>*/}

                                <br />

                                <div className="info-prod">
                                    <p>Cantidad: {producto.cantidad}</p>
                                    <p>Precio: ${producto.precio.toFixed(2)}</p>
                                    <p className="info-precio-total">Total: ${((producto.cantidad) * (producto.precio)).toFixed(2)}</p>
                                </div>
                                <hr />

                            </div>
                        ))
                    }
                    <div className="botones-carrito">
                        <button onClick={vaciarCarrito} className="boton-vaciar-carrito"> Vaciar Carrito <FaTrashAlt /></button>
                        <Link to={"/"} className="boton-seguir-comprando">Seguir Comprando</Link>
                    </div>
                </div>



                <footer>

                </footer>


                <div className="derecha">
                    <h5 className="derecha-titulo">
                        RESUMEN TOTAL:
                    </h5>




                    <h5 className="derecha-detalle">
                        Cantidad Articulos: {cantidadProductos()}
                    </h5>

                    <h5 className="derecha-detalle">
                        Total Facturado: ${totalCompra()}
                    </h5>


                </div>


            </main>




        </>

    );
}

export default Cart;