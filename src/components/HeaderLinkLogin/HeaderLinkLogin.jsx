import "../HeaderLinkLogin/HeaderLinkLogin.scss"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { FaUserAlt } from "react-icons/fa";

const HeaderLinkLogin = () => {

    const {cantidadProductos} = useContext(CartContext) 

    const [counter, setCounter] = useState(0);

    return (
        <div>
        <div className="HeaderLinkLogin">
            
                    <Link className="header_link_login" to="/MenuInicio"><FaUserAlt /></Link>
        
        </div>
        </div>
)
}


export default HeaderLinkLogin