import "../CardWidget/CardWidget.scss"
import { useState } from "react"
const CardWidget = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div className="CardWidget">
        <a className="CardWidget_icono" href="/Cart"> 🛒{counter} </a>
        </div>
)
}


export default CardWidget