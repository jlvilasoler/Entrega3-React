import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/components/ItemListContainer/ItemListContainer.scss"
import ItemList from "../ItemList/ItemList";
import Buscador from "../Buscador/Buscador"
import { useState, useEffect } from 'react';
//import { getData } from "../Helpers/GetData"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/config"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(productos)

  const [searchParams] = useSearchParams()
  
  const search = searchParams.get("search")

  const { categoryId } = useParams()


  useEffect(() => {
      setLoading(true)    

      const productosRef = collection(db, "productos")
      const q = categoryId
                          ? query(productosRef, where("category", "==", categoryId))
                          : productosRef
      getDocs(q)
        .then((respuesta) => {
                const items =  respuesta.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(items)
              })
        .catch (e => console.log(e))
        .finally(() => setLoading(false))
        
        
      // getData()
      //.then((respuesta) => {
      //if (!categoryId) {
        //  setProductos(respuesta)
        //else {
          //setProductos(respuesta.filter((producto) => producto.category === categoryId))
          //)
      //.catch((error) => console.log(error))
      //.finally(() => setLoading(false))
      //
      }, [categoryId]) 

  const listado = search
              ? productos.filter((producto) => producto.articulo.includes(search))
              : productos
              


    return (



    <div className="container">
      
      <div className="barra-buscador">
                <Buscador />
            </div>


      {
        loading? <h3 className='cargando'>Cargando...</h3> : <ItemList items={listado}/>
      }

    </div>
  );
};

export default ItemListContainer;