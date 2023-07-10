import { useContext, useState } from "react"
import "../Checkout/Checkout.scss"
import { Link } from "react-router-dom"
import { CartContext, useCartContex } from "../../context/CartContext"

const Checkout = () => {

        const { cart, totalCompra } = useCartContex()


        const [values, setValues] = useState({
            nombre: "",
            apellidos:"",
            direccion: "",
            departamento: "",
            ciudad: "",
            telefono: "",
            email: ""
        })

        const handleSubmit = (e) => {
            e.preventDefault()

            const order = {
                cliente: values,
                items: cart,
                total: totalCompra(),
                fecha: new Date()
            }
            console.log(order)
        }

        const handleInputChange = (e) => {
            console.log(e.target.name)
            setValues({
                ...values,
                [e.target.name]: e.target.value
            })
        }

    return (


        <div className="container my-5">

            <h1>CHECK OUT</h1>
            <hr />



            <form className="form" onSubmit={handleSubmit}>

                <input type="text" placeholder="Nombre Completo" onChange={handleInputChange} values={values.nombre} className="form-control my-2" name="nombre" />
                <input type="text" placeholder="Apellidos" values={values.apellidos} onChange={handleInputChange}className="form-control my-2" name="apellidos"/>
                <input type="text" placeholder="Direccion Completa" values={values.direccion} onChange={handleInputChange} className="form-control my-2" name="direccion"/>
                <input type="text" placeholder="Departamento" values={values.departamento} onChange={handleInputChange} className="form-control my-2" name="departamento"/>
                <input type="text" placeholder="Ciudad" values={values.ciudad} onChange={handleInputChange} className="form-control my-2" name="ciudad"/>
                <input type="text" placeholder="Telefono" values={values.telefono} onChange={handleInputChange} className="form-control my-2" name="telefono"/>
                <input type="email" placeholder="email" values={values.email} onChange={handleInputChange} className="form-control my-2" name="email"/>
                
                <button className="boton-checkout" type="submit">Finalizar Compra</button>
    

            </form>

        </div>

    )
}

export default Checkout