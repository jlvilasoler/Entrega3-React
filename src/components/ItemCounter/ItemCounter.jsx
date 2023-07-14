import "../ItemCounter/ItemCounter.scss"


const ItemCounter = ({max, cantidad, setCounter, handleAgregar, stock}) => {

    //Sumar al carrito
    const handleSumar = () => {
        if (cantidad < max)
        setCounter(cantidad + 1)
    }

    //Restar al carrito
    const handleRestar = () => {
        if (cantidad > 0) 
        setCounter(cantidad - 1)
    }


return (
    <div className="contador">
            <button onClick={handleRestar} className={cantidad===0 ? "btn btn-danger"  : "btn btn-primary"} disabled={cantidad === 0}>➖</button>

            <span className="mx-3">{cantidad}</span>

            <button onClick={handleSumar} className={cantidad===max ? "btn btn-danger" : "btn btn-primary"} disabled={cantidad === max}>➕</button>

            <br/>

        <button onClick={handleAgregar} className="btn-agregar-carrito" disabled={max <= 0}>Agregar a Carrito</button>
        

    </div>



)

}



export default ItemCounter