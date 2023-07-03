import React from "react";
import "/src/components/ItemCard/ItemCard.scss"
import { Link } from "react-router-dom";

const ItemCard = ({ id, foto , articulo , descripcion , marca , precio, stock}) => {

  return (
    <div className="col-2 m-4">
      <div>
        <Link to={`/detail/${id}`}><img src={foto} alt={articulo} /></Link>
      </div>


      <h2>{articulo}</h2>
      <h3>{descripcion}</h3>
      <p>{marca}</p>
      <p className="precio">${precio.toFixed(2)}</p>
      
      {
      stock <=100 && <h6 style={{fontWeight: 200 , color: "red", paddingBottom: "15px"}}>Quedan solo {stock} unidades</h6>
      }

      <Link className="boton-ver" to={`/detail/${id}`}>Ver más</Link>

      </div>
  );
};

export default ItemCard;
