import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/components/ItemListContainer/ItemListContainer.scss"
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from 'react';
import { getData } from "../Helpers/GetData"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'; 




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  
  const search = searchParams.get("search")

  const { categoryId } = useParams()


  useEffect(() => {
      setLoading(true)    

      getData()
      .then((respuesta) => {
      if (!categoryId) {
        setProductos(respuesta)
      } else {
        setProductos(respuesta.filter((producto) => producto.category === categoryId))
      } 
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  const listado = search
              ? productos.filter((producto) => producto.articulo.includes(search))
              : productos


    return (
    <div className="container">
      
      {
        loading? <h3 className='cargando'>Cargando...</h3> : <ItemList items={listado}/>
      }

    </div>
  );
};

export default ItemListContainer;