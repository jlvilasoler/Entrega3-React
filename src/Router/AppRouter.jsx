
import Header from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Contacto from "../components/Contacto/Contacto";
import Registro from "../components/Registro/Registro";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

import MenuInicio from "../components/MenuInicio/MenuInicio";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Categorias from "../components/Categorias/Categorias"
import Nosotros from "../components/Nosotros/Nosotros"
import Cart from "../components/Cart/Cart"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
    const { user } = useContext(AuthContext)



    return (
        <BrowserRouter>

          {user.logged ? <>
            <Header />

            <Routes>
              <Route path="/categorias" element={<Categorias />} />
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/productos/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
              <Route path="/Contacto" element={<Contacto />} />
              <Route path="/MenuInicio" element={<MenuInicio />} />
              <Route path="/Nosotros" element={<Nosotros />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<Navigate to={"/"} />} />

            </Routes>
            <Footer />
          </>
            : <Routes>

              <Route path="/login" element={<MenuInicio />} />
              <Route path="/Registro" element={<Registro />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>


          }



        </BrowserRouter>
    )

}

export default AppRouter