
import "./App.css";

import { CartProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";

import AppRouter from "./Router/AppRouter"




function App() {



  return (

    <AuthContextProvider>

      <CartProvider>

                      <AppRouter/>

      </CartProvider>
    </AuthContextProvider>
  )
}

export default App


