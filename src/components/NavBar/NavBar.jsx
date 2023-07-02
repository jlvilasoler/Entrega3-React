import "/src/components/NavBar/NavBar.scss"
import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"
import Buscador from "../Buscador/Buscador"
import CounterNav from "../CounterNav/CounterNav"

const Header = () => {

    return (

        
        <header className="header">
            <div className="buscador">
                        <Buscador/>
            </div>   

            <div className="header_container">

                <Link className="header_logo" to="/">tiendaonline.uy</Link>

                <nav className="header_nav">

                    <Link className="header_link" to="/productos/perfumeria">PERFUMERIA</Link>
                    <Link className="header_link" to="/productos/bebidas">BEBIDAS</Link>
                    <Link className="header_link" to="/productos/limpieza">LIMPIEZA</Link>
                    <Link className="header_link" to="/productos/almacen">ALMACEN</Link>
                    
                    
                    <div className="header_nav_derecha">
                    <Link className="header_link_home" to="/">🏠</Link>
                    <Link className="header_link_login" to="/MenuInicio">👤</Link>
                    </div>
                    
                </nav>
                <CardWidget/>
                
            </div>

                <div className="contador-gasto-total">
                <CounterNav/>
                </div>
        </header>
    )

}

export default Header