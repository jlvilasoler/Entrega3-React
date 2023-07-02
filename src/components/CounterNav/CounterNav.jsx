
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext";


const CounterNav = () => {

    const {totalCompra} = useContext(CartContext) 

    const [counter] = useState(0);

    return (
        <div className="CounterNav">
        <span className="span-counterNav">Tu compra: $ {totalCompra()}</span>
        </div>
)
}


export default CounterNav