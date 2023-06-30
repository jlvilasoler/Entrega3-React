import "../CardWidget/CardWidget.scss"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import { CartContext } from "../../context/CartContext";


const CardWidget = () => {

    const {cantidadProductos} = useContext(CartContext) 

    const [counter, setCounter] = useState(0);

    return (
        <div className="CardWidget">
        <Link className="CardWidget_icono" to="/Cart"><FaShoppingCart/>
        
        <span className="span-cart">{cantidadProductos()}</span> </Link>
        </div>
)
}


export default CardWidget