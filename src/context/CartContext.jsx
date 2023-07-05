import { useState, createContext } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

  
    const agregarAlCarrito = (item) => {
      setCart([...cart, item])
    }
  
    const eliminarArticulo = (id) => {
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
            totalSinIva
        }}>
            {children}
            
        </CartContext.Provider>
    )
}