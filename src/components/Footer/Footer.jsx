import "/src/components/Footer/Footer.scss"
import { Link } from "react-router-dom"

const Footer = () => {

    return (


        <footer className="footer">
            
                    <ul><Link className="footer_botones" to="/">INICIO</Link></ul>
                    <ul><Link className="footer_botones" to="/categorias">CATEGORIAS</Link></ul>
                    <ul><Link className="footer_botones" to="/menuInicio">INGRESAR</Link></ul>
                    <ul><Link className="footer_botones" to="/Nosotros">NOSOTROS</Link></ul>
                    <ul><Link className="footer_botones" to="/Contacto">CONTACTO</Link></ul>
                    <p>Todos los derechos reservados. TIENDAONLINE.UY 2023 / Montevideo-Uruguay 🇺🇾</p>
        </footer>

    )
}

export default Footer