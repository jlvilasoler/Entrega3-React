import React, { useContext, useState } from 'react';
import '../Registro/Registro.scss'
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registro = () => {

    const navigate = useNavigate();

    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: "",
        password: "",
        password2: "",
        nombre: "",
        apellidos: "",
        documento: "",
        direccion: "",
        departamento: "",
        ciudad: "",
        telefono: "",
        celular: ""
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const [registroExitoso, setRegistroExitoso] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)


        if (
            values.email === "" ||
            values.password === "" ||
            values.password2 === "" ||
            values.nombre === "" ||
            values.apellidos === "" ||
            values.documento === "" ||
            values.direccion === "" ||
            values.departamento === "" ||
            values.ciudad === "" ||
            values.telefono === "" ||
            values.celular === ""
            ) {
                toast.warn('Para completar el registro, se deben completar todos los campos', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                return;
              } else {
                alert("Su cuenta fue creada con éxito!");
                setRegistroExitoso(true);
                navigate('/MenuInicio');  

            }
        };

    return (


        <div className="container my-5">

            <h1>REGISTRO</h1>
            <hr />

            <h3 className="informacion">Información Personal:</h3>

            <form className="form" onSubmit={handleSubmit}>

                <input values={values.email} onChange={handleInputChange} type="text" placeholder="Ingrese E-mail" maxLength="25" id="email" className="form-control my-2" name="email" />
                <input values={values.password} onChange={handleInputChange} type="password" placeholder="Ingrese Contraseña" maxLength="15" className="form-control my-2" name="password" />
                <input values={values.password2} onChange={handleInputChange} type="password" placeholder="Repita Contraseña" maxLength="15" className="form-control my-2" name="password2" />

                <div className="form-group">
                    <hr className="hr" />
                </div>


                <input type="text" placeholder="Ingrese Nombre Completo" onChange={handleInputChange} values={values.nombre} className="form-control my-2" name="nombre" />
                <input type="text" placeholder="Ingrese Apellidos" values={values.apellidos} onChange={handleInputChange} className="form-control my-2" name="apellidos" />
                <input type="text" placeholder="Ingrese Documento" values={values.documento} onChange={handleInputChange} className="form-control my-2" name="documento" />

                <div className="form-group">
                    <hr className="hr" />
                </div>


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

                <div className="form-group">
                    <hr className="hr" />
                </div>

                <input type="text" placeholder="Ingrese Número de Teléfono" values={values.telefono} onChange={handleInputChange} className="form-control my-2" name="telefono" />
                <input type="text" placeholder="Ingrese Número de Celular" values={values.celular} onChange={handleInputChange} className="form-control my-2" name="celular" />




                <div className="botones-reg">
                    <button type="submit" className="boton-registro">Registrarme</button>
                </div>


            </form>

        </div>

    )
}





export default Registro;
