import React, { useEffect, useState } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Actions
import { addItemToShoppingCar } from "../../actions/shoppingCarActions";
import { showToastNotification } from "../../actions/toastNotificationsActions";

// @Url's
import { server } from "../../urls/urls";

// @Material UI
import Rating from "@mui/material/Rating";

// @helpers
import { currency } from "../../helpers/currency";


const ProductDetail = () => {
  const dispatch = useDispatch();

  // useSelectors
  const { shoeDetail } = useSelector((state) => state.productDetail);
  const { shoppingCar } = useSelector((state) => state.shoppingCar);
  const {toastNotification} = useSelector(state => state.toastNotification)

  // states
  const [cantidadZapatos, setCantidadZapatos] = useState(1);
  const [tallaZapatos, setTallaZapatos] = useState();

  const addShoeToCar = (infoShoe) => {
    dispatch(addItemToShoppingCar(infoShoe));
    dispatch(showToastNotification())
  };

  useEffect(() => {
    const saveInLocalStorage = (listaZapatos) => {
      if (!listaZapatos){
        return
      }else{
        localStorage.setItem("shoes", JSON.stringify(listaZapatos));
      }
    };
    saveInLocalStorage(shoppingCar);
  }, [shoppingCar]); 

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="p-20">
            <img
              src={`${server}${shoeDetail.foto}`}
              alt="zapato"
              className=""
            />
          </div>
        </div>

        <div>
          <div className="p-20">
            <div>
              <h1 className="text-5xl font-bold">{shoeDetail.nombre}</h1>
              <p className="text-3xl mt-4">{currency(shoeDetail.precio)}</p>
              <div className="mt-4 flex">
                <span>
                  <Rating
                    name="half-rating-read"
                    defaultValue={shoeDetail.puntaje}
                    precision={0.1}
                    readOnly
                  />
                </span>
                <span className="ml-2">{shoeDetail.puntaje}</span>
              </div>
              <p className="mt-8">{shoeDetail.descripcionZapato}</p>
              <div className="mt-12">
                {/* dropdown menu tallas zapatos */}
                <div className="inline-block">
                  <div>
                    <h1>Talla</h1>
                  </div>
                  <div>
                    <select
                      className="p-2 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setTallaZapatos(e.target.value)}
                    >
                      <option value="">--Seleccione--</option>
                      {shoeDetail.tallas.map((talla) => (
                        <option key={talla.id} value={talla.TallasDama}>
                          {talla.TallasDama}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* input cantidad zapatos */}
                <div className="inline-block ml-4">
                  <div>
                    <h1>Cantidad</h1>
                  </div>
                  <div>
                    <input
                      className="p-2 bg-white border border-gray-300 rounded-md shadow-sm w-24 pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      id="catidadZapatos"
                      name="cantidadZapatos"
                      onChange={(e) => setCantidadZapatos(e.target.value)}
                      placeholder="cantidad"
                      type="number"
                      value={cantidadZapatos}
                    />
                  </div>
                </div>
                <div className="flex-auto flex space-x-3 mt-16">
                  <button
                    className="w-1/2 p-2 flex items-center justify-center rounded-md bg-black text-white"
                    type="submit"
                    onClick={() =>
                      addShoeToCar({
                        foto: shoeDetail.foto,
                        nombreZapato: shoeDetail.nombre,
                        precioUnitario: shoeDetail.precio,
                        talla: tallaZapatos,
                        cantidad: cantidadZapatos,
                        total: cantidadZapatos * shoeDetail.precio,
                      })
                    }
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
