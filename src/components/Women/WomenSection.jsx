import React, { useEffect } from 'react';

// @React-Redux
import { useDispatch, useSelector } from 'react-redux';

// @Actions
import { fetchWomenShoes } from '../../actions/womenShoes';
import { infoShoe } from '../../actions/productDetail';

// @Components
import Card from '../Card/Card';

const WomenSection = () => {

  const dispatch = useDispatch();

  const {womenShoes} = useSelector(state => state.womenShoes)

  useEffect(() => {
    dispatch(fetchWomenShoes());
  }, [dispatch]);

  const shoeDetails = (info) => {
    dispatch(infoShoe(info))
  }

  return (
    <div>
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 my-8">
        {womenShoes.map((data) => (
          <div key={data.id} className="flex justify-center"  onClick={() => shoeDetails({
            id: data.id,
            precio: data.Precio,
            puntaje: data.Puntaje,
            nombre: data.Nombre_Modelo,
            foto: data.Foto.url,
            descripcionZapato: data.Descripcion_Producto,
            tallas: data.NumerosTallas
          })}> 
            <Card
              idShoe={data.id}
              precio={data.Precio}
              puntaje={data.Puntaje}
              nombreModelo={data.Nombre_Modelo}
              foto={data.Foto.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenSection;