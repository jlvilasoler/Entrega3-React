import "../ItemCounter/ItemCounter.scss"


const ItemCounter = ({max, cantidad, setCounter, handleAgregar}) => {

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
            <button onClick={handleRestar} className="btn btn-primary">➖</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="btn btn-primary">➕</button>

            <br/>

            <button onClick={handleAgregar} className="btn-agregar">Agregar a Carrito</button>


    </div>



)

}



export default ItemCounter