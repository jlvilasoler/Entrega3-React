import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup,onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";

export const  AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if(user) {
                setUser({
                    logged: true,
                    email: user.email
                })
            }else{
                setUser({
                    logged: false,
                    email: null
                })
            }
        })
    }, [])

const logOut = () => {
    signOut(auth)
}

    const [user, setUser] = useState({
        logged: false,
        email: null
    })

    console.log(user)


        //LOGIN E INICIO DE SESION
    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
                    .catch( e => console.log( e ))
    }

    
    //REGISTRO Y PRIMER INICIO DE SESION
    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
                    .catch( e => console.log( e ))
    }


    //REGISTRO CON GOOGLE
    const googleLogin = () => {
        signInWithPopup(auth, provider)    
    }

    
    return (
    <AuthContext.Provider value = {{googleLogin, user, login, register, logOut}}>
            {children}
    </AuthContext.Provider>
    )
}