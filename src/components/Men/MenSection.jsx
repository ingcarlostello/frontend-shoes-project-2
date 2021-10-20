import React, { useEffect } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Actions
import { fetchMenShoes } from "../../actions/menShoes";

// @Components
import Card from "../Card/Card";

const MenSection = () => {
    const dispatch = useDispatch();

    const { menShoes } = useSelector((state) => state.menShoes);

    useEffect(() => {
      dispatch(fetchMenShoes());
    }, [dispatch]);

    return (
      <div>
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 my-8">
          {menShoes.map((data) => (
            <div className="flex justify-center">
              <Card
                precio={data.Precio}
                puntaje={data.Puntaje}
                nombreModelo={data.Nombre_Modelo}
                // foto={data.Foto.formats.medium.url}
                foto={data.Foto.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
};

export default MenSection;
