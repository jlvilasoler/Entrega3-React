import "../CardWidget/CartWidget.scss"
import { useContext } from "react"
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

    const {cart, cantidadProductos} = useContext(CartContext) 

    return (
        <div className="CartWidget">
        <Link to="/Cart" className={`CartWidget ${cart.length > 0 ? 'Cart-Widget-Active' : ''}`}><FaShoppingCart/>
        
        <span className="span-cart">{cantidadProductos()}</span> </Link>
        </div>
)
}


export default CartWidget