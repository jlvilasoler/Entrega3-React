
import "./App.css";
import { CartProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import AppRouter from "./Router/AppRouter"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {



  return (

    <AuthContextProvider>

      <CartProvider>

                      <AppRouter/>

      </CartProvider>
      <ToastContainer />
    </AuthContextProvider>

  )
}

export default App


