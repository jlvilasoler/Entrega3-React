import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../MenuInicio/MenuInicio.scss';
import { AuthContext } from '../../context/AuthContext';


const MenuInicio = () => {


    const {login, googleLogin} = useContext(AuthContext)
 
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const volverinicio = () => {
        window.location.replace("/Menuinicio");
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        login(values)
        if (login=true)
        volverinicio();
    };

    return (
        <div className="row my-5">


            <div className="container-inicio">
                <div>
                    <h3 className="intro">INGRESAR:</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={values.email} onChange={handleInputChange} type="text" placeholder="Ingrese E-mail" maxLength="25" id="email" className="form-control" name="email" />
                    </div>

                    <div className="form-group">
                        <input value={values.password} onChange={handleInputChange} type="password" placeholder="Ingrese Contraseña" maxLength="15" className="form-control" name="password" />
                        <h6 className="olvido">¿Olvidaste tu contraseña?</h6>
                    </div>

                    <div className="botones-form">
                        <button type="submit" className="boton-form-entrar">Iniciar sesión</button>
                        <button className="boton-form-entrar-google" onClick={googleLogin}><img src={"/assets/google.png"} className='imagen-google' ></img> Iniciar sesión con Google</button>
                    </div>
                </form>

                

            </div>

            <div className="aviso_registro">
                <Link className="registrar" to="/Registro">¿Soy nuevo? Regístrame</Link>
            </div>
        </div>
    );
};

export default MenuInicio;
