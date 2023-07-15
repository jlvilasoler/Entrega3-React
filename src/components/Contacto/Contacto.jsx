import "../Contacto/Contacto.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";

function SizesExample() {
    const [values, setValues] = useState({
        nombre: "",
        apellidos: "",
        ciudad: "",
        departamento: "",
        email: "",
        celular: "",
        mensaje: "",
    });

    useEffect(() => {
        window.scrollTo(1000, 0);
    }, []);

    const volverhome = () => {
        window.location.replace("/");
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            values.nombre === "" ||
            values.apellidos === "" ||
            values.ciudad === "" ||
            values.departamento === "" ||
            values.email === "" ||
            values.celular === "" ||
            values.mensaje === ""
        ) {
            alert("Para completar la operación, se deben completar todos los campos");
        } else {
            console.log(values);
            alert("Mensaje enviado con exito!");
            volverhome();
        }
    };

    return (
        <div className="container my-5">
            <h1 className="">CONTACTO</h1>
            <hr className="hr" />

            <form className="intro-form" onSubmit={handleSubmit}>
                <label className="label" htmlFor="nombre"></label>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Ingrese Nombre Completo"
                    maxLength="20"
                    autoComplete="off"
                    value={values.nombre}
                    onChange={handleInputChange}
                    className="form-control"
                />

                <label className="label" htmlFor="apellidos"></label>
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Ingrese Apellidos"
                    maxLength="20"
                    value={values.apellidos}
                    onChange={handleInputChange}
                    className="form-control"
                />

                <div className="form-group">
                    <hr className="hr" />
                </div>

                <label className="label" htmlFor="ciudad"></label>
                <select
                    name="ciudad"
                    placeholder="Ingrese Ciudad"
                    value={values.ciudad}
                    onChange={handleInputChange}
                    className="form-control"
                >
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

                <label className="label" htmlFor="departamento"></label>
                <select
                    name="departamento"
                    placeholder="Ingrese Departamento"
                    value={values.departamento}
                    onChange={handleInputChange}
                    className="form-control"
                >
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

                <div className="form-group">
                    <hr className="hr" />
                </div>

                <label className="label" htmlFor="email"></label>
                <input
                    type="email"
                    name="email"
                    placeholder="Ingrese Email"
                    maxLength="15"
                    value={values.email}
                    onChange={handleInputChange}
                    className="form-control"
                />

                <label className="label" htmlFor="celular"></label>
                <input
                    type="text"
                    name="celular"
                    placeholder="Ingrese Celular"
                    maxLength="15"
                    value={values.celular}
                    onChange={handleInputChange}
                    className="form-control"
                />

                <div className="form-group">
                    <hr className="hr" />
                </div>

                <label className="label" htmlFor="mensaje" ></label>
                <textarea
                    name="mensaje"
                    placeholder="Ingrese Mensaje"
                    maxLength="100"
                    value={values.mensaje}
                    onChange={handleInputChange}
                    className="form-control"
                    rows="8"
                ></textarea>

                <div className="container-total">
                    <button type="submit" className="boton-form-enviar">
                        Enviar
                    </button>
                    <button onClick={volverhome} className="boton-form-cancelar">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SizesExample;