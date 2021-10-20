import { jssPreset } from "@material-ui/styles";
import React, { useEffect, useState } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Actions
import { addItemToShoppingCar } from "../../actions/shoppingCarActions";

// @Url's
import { server } from "../../urls/urls";

import ShoppingCar from "../ShoppingCar/ShoppingCar";

const ProductDetail = () => {

   const dispatch = useDispatch();

  const { shoeDetail } = useSelector(state => state.productDetail)


  const [cantidadZapatos, setCantidadZapatos] = useState(1)
  const [tallaZapatos, setTallaZapatos] = useState()

  const addShoeToCar = (infoShoe) => {
    dispatch(addItemToShoppingCar(infoShoe))
    saveInLocalStorage(infoShoe)
  }


    const saveInLocalStorage = (infoShoe) => {
      localStorage.setItem('shoes', JSON.stringify(infoShoe))
    }    


  return (
    <>
      <div className="grid grid-cols-2">
        <div className="bg-green-400">
          <div className="p-20">
            <img src={`${server}${shoeDetail.foto}`} alt="zapato" className="" />
          </div>
        </div>

        <div className="bg-red-400">
          <div className="p-20">
            <div>
              <h1 className="text-5xl font-bold">{shoeDetail.nombre}</h1>
              <p className="text-3xl mt-4">$ {shoeDetail.precio}</p>
              <div className="mt-4">{shoeDetail.puntaje}</div>
              <p className="mt-8">
                {shoeDetail.descripcionZapato}
              </p>
              <div className="mt-4">
                <h1>Talla</h1>
                <select className="p-2" onChange={e => setTallaZapatos(e.target.value)}>
                  <option value="">--Seleccione--</option>
                  {shoeDetail.tallas.map(talla => (
                    <option key={talla.id} value={talla.TallasDama}>{talla.TallasDama}</option>
                  ))}
                </select>
                <input
                  className="p-2 ml-4 "
                  id="catidadZapatos"
                  name="cantidadZapatos"
                  onChange={e => setCantidadZapatos(e.target.value)}
                  placeholder="cantidad"
                  type="number"
                  value={cantidadZapatos}
                />
                <div class="flex-auto flex space-x-3 mt-4">
                  <button
                    className="w-1/2 p-2 flex items-center justify-center rounded-md bg-black text-white"
                    type="submit"
                    onClick={() => addShoeToCar({
                      foto: shoeDetail.foto,
                      nombreZapato: shoeDetail.nombre,
                      talla: tallaZapatos,
                      cantidad: cantidadZapatos,
                      total: cantidadZapatos * shoeDetail.precio,
                    })}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            <ShoppingCar />
    </>
  );
};

export default ProductDetail;
