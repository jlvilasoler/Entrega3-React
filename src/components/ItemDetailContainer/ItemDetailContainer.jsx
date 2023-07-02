import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { getData } from "../Helpers/GetData"
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import '../ItemDetailContainer/ItemDetailContainer.scss';


const ItemDetailContainer = () => {

  const [ item, setItem ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const { itemId } = useParams()
    console.log(item)
    console.log(itemId)

  

  useEffect(() => {
      setLoading(true)    

      getData()
      .then((resultado) => {
        setItem(resultado.find((item) => item.id === Number(itemId)))
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
}, [itemId])


    return (
        <div className="container-producto">
        {
        loading? <h3 className='container-cargando'>Cargando...</h3> : <ItemDetail {...item}/>
        }
        </div>
  );
};

export default ItemDetailContainer;