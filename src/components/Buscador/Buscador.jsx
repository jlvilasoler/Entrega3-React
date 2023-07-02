import "../Buscador/Buscador.scss"
import { useRef } from "react"
import { useSearchParams } from "react-router-dom"


const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === "") {
            setSearchParams({})
            return
        }

        setSearchParams({
            search: value
        })
    }

    const handleReset = (e) => {
        setSearchParams({})
    }

    return (




        <form className="search" onSubmit={handleSubmit}>
    


                <input 
                ref={ref}
                className="form-control"
                type="text"
                />
                
                <button onClick={handleReset} type="reset" className="boton-borrar"> X </button>
                <button type="submit" className="boton-buscar">🔍</button>
                
        </form>

    )

}

export default Buscador