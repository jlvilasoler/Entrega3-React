import "../Contacto/Contacto.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import React, { useRef } from 'react';

function SizesExample() {

    const clickear = () => {
        console.log("click")
    }

    useEffect(() => {
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])

    const volverhome = () => {
        window.location.replace("/")
    }

    return (
        <>

            <section class="fondo-body">


                <section class="contacto">
                    <div class="container-form">

                        <form class="intro-form" action="" method="POST">

                            <h3 class="contactanos"> CONTACTO: </h3>


                            <label className="label">NOMBRE COMPLETO:</label>
                            <input type="text" placeholder="Ingrese Nombre Completo" maxLength="15" id="nombre_completo" name="nombre_completo" class="form-control"></input>



                            <label className="label">APELLIDOS:</label>
                            <input type="text" placeholder="Ingrese Apellidos" maxLength="15" id="apellidos" name="apellidos" class="form-control"></input>



                            <div class="form-group">
                                <hr className="hr" />
                            </div>


                            <label className="label">CIUDAD:</label>
                            <select name="ciudad" class="form-control" id="">
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



                            <label className="label">DEPARTAMENTO:</label>
                            <select name="departamento" id="departamento" class="form-control">
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


                            <div class="form-group">
                                <hr className="hr" />
                            </div>


                            <label className="label">E-MAIL:</label>
                            <input type="text" placeholder="Ingrese E-mail" maxLength="15" id="email" name="email" class="form-control"></input>



                            <label className="label">CELULAR:</label>
                            <input type="text" placeholder="Ingrese Número de Celular" id="celular" name="celular" class="form-control"></input>


                            <div class="form-group">
                                <hr className="hr" />
                            </div>


                            <label className="label" for="mensaje">DEJA TU MENSAJE:</label>
                            <textarea name="mensaje" class="form-control" id="" cols="30" rows="10" placeholder="Deja tu mensaje"></textarea>

                        </form>

                    </div>

                        <div class="botones-contacto">
                            <button type="submit" className="boton-form-enviar"> Enviar </button>
                            <button onClick={volverhome} type="submit" className="boton-form-cancelar"> Cancelar </button>
                        </div>


                </section>
            </section>


        </>

    );
}

export default SizesExample;