import React from "react";
import mujer from "../../assets/mujer.jpg";
import hombre from "../../assets/hombre.jpg";

// @React Router Dom
import { NavLink } from "react-router-dom";

const Colecciones = () => {
  return (
    <div className="grid grid-cols-2 mt-4">
      <div className="relative p-4">
        <NavLink to="women-section">
          <img src={mujer} alt="mujer" />
          <div className="bg-red-500 w-full">
            <p className="text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              MUJER
            </p>
          </div>
          <div className="h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full hover:bg-pink-700 opacity-25 cursor-pointer"></div>
        </NavLink>
      </div>

      <div className="relative p-4">
        <NavLink to="men-section">
          <img src={hombre} alt="mujer" />
          <div className="bg-black w-full">
            <p className="text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              HOMBRE
            </p>
          </div>
          <div className="p-8 h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full hover:bg-blue-700 opacity-25 p-8 cursor-pointer"></div>
        </NavLink>
      </div>
    </div>
  );
};

export default Colecciones;
