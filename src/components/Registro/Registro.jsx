import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../MenuInicio/MenuInicio.scss';
import { AuthContext } from '../../context/AuthContext';


const Registro = () => {

    const { register } = useContext(AuthContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }

    return (
        <div className="row my-5">


            <div className="container-inicio">
                <div>
                    <h3 className="intro">REGISTRARME:</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={values.email} onChange={handleInputChange} type="text" placeholder="Ingrese E-mail" maxLength="25" id="email" className="form-control" name="email" />
                    </div>

                    <div className="form-group">
                        <input value={values.password} onChange={handleInputChange} type="password" placeholder="Ingrese Contraseña" maxLength="15" className="form-control" name="password" />

                    </div>

                    <div className="botones-form">
                        <button type="submit" className="boton-form-entrar">Registrarme</button>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Registro;
