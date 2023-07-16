import { useState, createContext, useContext } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext()

export const useCartContex = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const eliminarArticulo = (id) => {
      toast.success('Producto eliminado del carrito!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type: "warning",
        });
      setCart( cart.filter((producto) => producto.id != id ))
    }

    const isInCart = (id) => {
      return cart.some((producto) => producto.id === id)
    }

    const totalCompra = () => {
      return cart.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toFixed(2)
    }

    const totalIva = () => {
      return cart.reduce((acc, producto) => (acc + producto.precio * producto.cantidad)*(0.22/1.22), 0).toFixed(2)
    }

    const totalSinIva = () => {
      return cart.reduce((acc, producto) => (acc + producto.precio * producto.cantidad)/(1.22), 0).toFixed(2)
    }

    const cantidadProductos = () => {
      return cart.reduce((acc, producto) => acc + producto.cantidad, 0)
    }

    const vaciarCarrito = () => {
      setCart([])
    }

    const vaciarCarritoAlert = () => {
      toast.warn('Productos eliminados del carrito!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      setCart([])
    }



    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            totalCompra,
            cantidadProductos,
            vaciarCarrito,
            eliminarArticulo,
            totalIva,
            totalSinIva,
            vaciarCarritoAlert
        }}>
            {children}
            
        </CartContext.Provider>
    )
}