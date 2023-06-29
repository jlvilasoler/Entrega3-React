import { useContext, useState } from "react";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.scss"
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, foto, articulo, descripcion, marca, precio, category, seccion, stock }) => {
    
    const {agregarAlCarrito, isInCart} = useContext(CartContext)
console.log(isInCart(id))

    const [cantidad, setCounter] = useState(1)

    const navigate = useNavigate();


    const handleAgregar = () => {
        const item = { id, foto, articulo, descripcion, marca, precio, category, seccion, stock, cantidad }
        
        agregarAlCarrito(item)
    }

    const handleVolver = () => {
        navigate("/")
    }


    return (
        <div className="container-consola">

            <h1 className="marca-consola">{marca}</h1>

            <hr />
            <img className="imagen-consola" src={foto} alt={articulo} />

            <h2 className="articulo-consola">{articulo}</h2>
            <h3 className="descripcion-consola">{descripcion}</h3>
            <hr />


            <p className="precio-consola">$ {precio}</p>
            <hr />

            <div className="consola-categoria">
                <p className="categoria-consola">Categoria: {category}</p>
                <p className="categoria-consola">Sección: {seccion}</p>
            </div>



{
    isInCart(id)
    ? <Link className="boton-seguir-comprando" to="/Cart">Ver Carrito</Link>
    :                 <ItemCounter
                    max={stock}
                    cantidad={cantidad}
                    setCounter={setCounter}
                    handleAgregar={handleAgregar}
                />
}



                <hr />

            <button onClick={handleVolver} className="boton-volver">Seguir Comprando</button>
        </div>





    )
}

export default ItemDetail;