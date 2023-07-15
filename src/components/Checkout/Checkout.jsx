import React, { useState, useMemo } from "react"
import "../Checkout/Checkout.scss"
import { useCartContex } from "../../context/CartContext"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const Checkout = () => {

    useEffect(() => {
        window.scrollTo(1000, 0);
      }, []);

  const [orderId, setOrderId] = useState(null)
  const { cart, totalCompra, vaciarCarrito } = useCartContex()
  const fecha = useMemo(() => new Date().toLocaleString(), [])
  const [values, setValues] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    departamento: "",
    ciudad: "",
    telefono: "",
    celular: "",
    email: "",
    mediopago: "",
    tarjetanumero: "",
    tarjetanombre: "",
    tarjetacodigo: "",
    tarjetavencimiento: ""
  })

  const crearOrden = async (values) => {
    const orden = {
      cliente: values,
      items: cart,
      total: totalCompra(),
      fecha: new Date()
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")

    const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
    const productos = await getDocs(q)

    const outOfStock= []

    productos.docs.forEach((doc) => {
      const item = cart.find((prod) => prod.id === doc.id)
      const stock = doc.data().stock

      if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad
        })
      } else {
        outOfStock.push(item)
      }
    })

    if (outOfStock.length === 0) {
      batch.commit()
        .then(() => {
          addDoc(ordersRef, orden) 
            .then((doc) => {
              setOrderId(doc.id)
              vaciarCarrito()
            })
            .catch(error => console.log(error))
        })
    } else {
      alert("Hay algún producto seleccionado sin stock")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      values.nombre === "" ||
      values.apellidos === "" ||
      values.direccion === "" ||
      values.departamento === "" ||
      values.ciudad === "" ||
      values.telefono === "" ||
      values.celular === "" ||
      values.email === "" ||
      values.mediopago === "" ||
      values.tarjetanumero === "" ||
      values.tarjetanombre === "" ||
      values.tarjetacodigo === "" ||
      values.tarjetavencimiento === ""
    ) {
      alert("Para completar la operación, se deben completar todos los campos");
      return;
    } else {
      crearOrden(values)
    }
  }

  if (orderId) {
    return (
      <div className="container-check">
        <h1 className="titulo">¡Compra exitosa!</h1>
        <h4>
                            Pedido confirmado: {fecha}
                        </h4>

        <p>Tu ticket de compra es el: <strong>{orderId}</strong></p>
        <hr />
        <p>En un maximo de 24 horas recibiras los productos en tu casa.</p>
        



        <p>Por consultas comunicarse al 0800 - 1010 o al email: info@tiendaonline.uy</p>
      
        <p className="firma">El equipo de Tiendaonline.uy</p>

        <div className="botones-carrito">
                        <Link to={"/"} className="boton-seguir-comprando">Volver al Inicio</Link>
                    </div>
      </div>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/" />
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
      <div>
      <h1>CHECK OUT</h1>
      </div>
      <hr />

      <h3 className="info-envio">Información de envío:</h3>

      <form className="form" onSubmit={handleSubmit}>

<input type="text" placeholder="Ingrese Nombre Completo" onChange={handleInputChange} values={values.nombre} className="form-control my-2" name="nombre" />
<input type="text" placeholder="Ingrese Apellidos" values={values.apellidos} onChange={handleInputChange} className="form-control my-2" name="apellidos" />
<input type="text" placeholder="Ingrese Direccion Completa" values={values.direccion} onChange={handleInputChange} className="form-control my-2" name="direccion" />

<select type="text" placeholder="Departamento" values={values.departamento} onChange={handleInputChange} className="form-control my-2" name="departamento">
    <option value="Ingrese">Ingrese Departamento</option>
    <option value="Artigas">Artigas</option>
    <option value="Rocha">Rocha</option>
    <option value="Montevideo">Montevideo</option>
    <option value="Canelones">Canelones</option>
    <option value="Maldonado">Maldonado</option>
    <option value="Florida">Florida</option>
    <option value="Paysandu">Paysandu</option>
    <option value="Rivera">Rivera</option>
    <option value="Tacuarembo">Tacuarembo</option>
    <option value="Cerro Largo">Cerro Largo</option>
    <option value="Salto">Salto</option>
    <option value="Lavalleja">Lavalleja</option>
    <option value="San Jose">San Jose</option>
    <option value="Soriano">Soriano</option>
    <option value="Colonia">Colonia</option>
    <option value="Rio Negro">Rio Negro</option>
    <option value="Flores">Flores</option>
    <option value="Durazno">Durazno</option>
    <option value="Treinta y Tres">Treinta y Tres</option>
</select>

<select type="text" placeholder="Ciudad" values={values.ciudad} onChange={handleInputChange} className="form-control my-2" name="ciudad" >
    <option value="Ingrese">Ingrese Ciudad/Localidad</option>
    <option value="artigas">Artigas - Artigas</option>
    <option value="bella union">Bella Unión - Artigas</option>
    <option value="18 de mayo">18 de Mayo - Canelones</option>
    <option value="Montevideo">Montevideo - Montevideo</option>
    <option value="Las Piedras">Las Piedras - Canelones</option>
    <option value="Ciudad de la Costa">Ciudad de la Costa - Canelones</option>
    <option value="Barros Blancos">Barros Blancos - Canelones</option>
    <option value="Pando">Pando - Canelones</option>
    <option value="Salinas">Salinas - Canelones</option>
    <option value="La Paz">La Paz - Canelones</option>
    <option value="Canelones">Canelones - Canelones</option>
    <option value="Santa Lucia">Santa Lucia - Canelones</option>
    <option value="Progreso">Progreso - Canelones</option>
    <option value="Paso Carrasco">Paso Carrasco - Canelones</option>
    <option value="Joaquin Suarez">Joaquín Suárez - Canelones</option>
    <option value="General Liber Seregni">General Liber Seregni - Canelones</option>
    <option value="Toledo">Toledo - Canelones</option>
    <option value="Parque del Plata">Parque del Plata - Canelones</option>
    <option value="Atlántida">Atlantida - Canelones</option>
    <option value="San Ramon">San Ramón- Canelones</option>
    <option value="Sauce">Sauce - Canelones</option>
    <option value="Tala">Tala - Canelones</option>
    <option value="Melo">Melo - Cerro Largo</option>
    <option value="Rio Branco">Rio Branco - Cerro Largo</option>
    <option value="Colonia del Sacramento">Colonia del Sacramento - Colonia</option>
    <option value="Carmelo">Carmelo - Colonia</option>
    <option value="Nueva Helvecia">Nueva Helvecia - Colonia</option>
    <option value="Juan Lacaze">Juan Lacaze - Colonia</option>
    <option value="Nueva Palmira">Nueva Palmira - Colonia</option>
    <option value="Tarariras">Tarariras - Colonia</option>
    <option value="Durazno">Durazno - Durazno</option>
    <option value="Sarandi del Yi">Sarandi del Yi - Durazno</option>
    <option value="Trinidad">Trinidad - Flores</option>
    <option value="Florida">Florida - Florida</option>
    <option value="Sarandi Grande">Sarandí Grande - Florida</option>
    <option value="Minas">Minas - Lavalleja</option>
    <option value="Jose Pedro Varela">José Pedro Varela - Lavalleja</option>
    <option value="Maldonado">Maldonado - Maldonado</option>
    <option value="San Carlos">San Carlos - Maldonado</option>
    <option value="Punta del Este">Punta del Este - Maldonado</option>
    <option value="Piriapolis">Piriapolis- Maldonado</option>
    <option value="Pan de Azucar">Pan de Azúcar - Maldonado</option>
    <option value="Paysandu">Paysandú - Paysandú</option>
    <option value="Guichon">Guichón - Paysandú</option>
    <option value="Rio Negro">Young - Rio Negro</option>
    <option value="Fray Bentos">Fray Bentos - Rio Negro</option>
    <option value="Rivera">Rivera - Rivera</option>
    <option value="Tranqueras">Tranqueras - Rivera</option>
    <option value="Vichadero">Vichadero - Rivera</option>
    <option value="Minas de Corrales">Minas de Corrales - Rivera</option>
    <option value="Rocha">Rocha - Rocha</option>
    <option value="Chuy">Chuy - Rocha</option>
    <option value="Lascano">Lascano - Rocha</option>
    <option value="Castillos">Castillos - Rocha</option>
    <option value="La Paloma">La Paloma - Rocha</option>
    <option value="Tacuarembo">Tacuarembó - Tacuarembó</option>
    <option value="Paso de los Toros">Paso de los Toros - Tacuarembó</option>
    <option value="Salto">Salto - Salto</option>
    <option value="San Jose de Mayo">San Jose de Mayo - San José</option>
    <option value="Ciudad del Plata">Ciudad de Plata - San José</option>
    <option value="Libertad">Libertad - San José</option>
    <option value="Mercedes">Mercedes - Soriano</option>
    <option value="Cardona">Cardona - Soriano</option>
    <option value="Dolores">Dolores - Soriano</option>
    <option value="Treinta y Tres">Treinta y Tres - Treinta y Tres</option>
</select>

<input type="text" placeholder="Ingrese Número de Teléfono" values={values.telefono} onChange={handleInputChange} className="form-control my-2" name="telefono" />
<input type="text" placeholder="Ingrese Número de Celular" values={values.celular} onChange={handleInputChange} className="form-control my-2" name="celular" />
<input type="email" placeholder="Ingrese Email" values={values.email} onChange={handleInputChange} className="form-control my-2" name="email" />



<hr />

<h3 className="mediodepago">Ingrese Medio de Pago:</h3>

<select type="text" placeholder="Tipo de Medio de Pago" values={values.mediopago} onChange={handleInputChange} className="form-control my-2" name="mediopago">
    <option value="Ingrese">Ingrese tipo de medio de pago</option>
    <option value="debito">Tarjeta de Debito</option>
    <option value="credito">Tarjeta de Credito</option>
</select>

<input type="text" placeholder="Ingrese Número de 15 digitos" values={values.tarjetanumero} onChange={handleInputChange} className="form-control my-2" name="tarjetanumero" maxLength="15"/>
<input type="text" placeholder="Ingrese Nombre Completo" values={values.tarjetanombre} onChange={handleInputChange} className="form-control my-2" name="tarjetanombre" />
<input type="text" placeholder="Ingrese Código de tres digitos" values={values.tarjetacodigo} onChange={handleInputChange} className="form-control my-2" name="tarjetacodigo" maxLength="3"/>
<input type="date" placeholder="Ingrese fecha de vencimiento al dorso" values={values.tarjetavencimiento} onChange={handleInputChange} className="form-control my-2" name="tarjetavencimiento" />

<hr />
<button className="boton-checkout" type="submit">Finalizar Compra</button>


</form>

</div>

)
}

export default Checkout