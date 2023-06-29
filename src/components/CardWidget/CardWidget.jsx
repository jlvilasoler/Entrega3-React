import "../CardWidget/CardWidget.scss"
import { useState } from "react"
import { Link } from "react-router-dom";
const CardWidget = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="CardWidget">
        <Link className="CardWidget_icono" href="/Cart"> 🛒{counter} </Link>
        </div>
)
}


export default CardWidget