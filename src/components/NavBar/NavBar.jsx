import "/src/components/NavBar/NavBar.scss"
import CartWidget from "../CardWidget/CartWidget"
import { Link } from "react-router-dom"

import CounterNav from "../CounterNav/CounterNav"
import { FaHome } from "react-icons/fa";
import HeaderLinkLogin from "../HeaderLinkLogin/HeaderLinkLogin"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    return (


        <header className="header">

            <div className="buscador">

            </div>

            <div className="header_container">

                <Link className="header_logo" to="/">tiendaonline.uy</Link>

                <nav className="header_nav">
                    <Link className="header_link" to="/productos/perfumeria">PERFUMERIA</Link>
                    <Link className="header_link" to="/productos/bebidas">BEBIDAS</Link>
                    <Link className="header_link" to="/productos/limpieza">LIMPIEZA</Link>
                    <Link className="header_link" to="/productos/almacen">ALMACEN</Link>


                    <div className="header_nav_derecha">
                    <Link className="header_link_home" to="/"><FaHome /></Link>
                    </div>


                </nav>
                <HeaderLinkLogin />
                <CartWidget />

            </div>
            <div className="contador-gasto-total">
                <CounterNav />
            </div>


            {user.logged ? (
                <div className="panel-usuario">
                    <button className="btn btn-danger" onClick={logOut}>Logout</button>
                    <p className="panel-mail">{user.email}</p>
                </div>
            ) : null}





            {/*
{user.logged ? (
            <div className="barra-buscador">
                <Buscador />
            </div>
            ) : null}
*/}
        </header>
    )

}

export default Header