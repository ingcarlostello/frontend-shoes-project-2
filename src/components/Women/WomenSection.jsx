import React, { useEffect } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Actions
import { fetchWomenShoes } from "../../actions/womenShoes";
import { infoShoe } from "../../actions/productDetail";

// @Components
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const WomenSection = () => {
  const dispatch = useDispatch();

  const { womenShoes, loading } = useSelector((state) => state.womenShoes);

  useEffect(() => {
    dispatch(fetchWomenShoes());
  }, [dispatch]);

  const shoeDetails = (info) => {
    dispatch(infoShoe(info));
  };

  return (
    <div>
      <div className="w-full h-96 bg-indigo-400 flex">
        <p class="text-6xl sm:text-8xl text-gray-100 m-auto">Para Mujer</p>
      </div>
      {loading ? (
        <div className="flex mt-8">
          <Loader />
        </div>
      ) : (
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-8">
          {womenShoes.map((data) => (
            <div
              key={data.id}
              className="flex justify-center"
              onClick={() =>
                shoeDetails({
                  id: data.id,
                  precio: data.Precio,
                  puntaje: data.Puntaje,
                  nombre: data.Nombre_Modelo,
                  foto: data.Foto.url,
                  descripcionZapato: data.Descripcion_Producto,
                  tallas: data.NumerosTallas,
                })
              }
            >
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
      )}
    </div>
  );
};

export default WomenSection;
