import React, { useState } from "react";

// @React-Redux
import { useSelector } from "react-redux";

// @Url's
import { server } from "../../urls/urls";

// @Material UI
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

// @Styles.js
import { useStyles } from "./styles";




const ShoppingCar = () => {

    const [getLocalStorage, setGetLocalStorage] = useState(JSON.parse(localStorage.getItem('shoes')) || [])
    console.log(getLocalStorage);

    const classes = useStyles();
    const { shoppingCar } = useSelector((state) => state.shoppingCar);

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="p-4 bg-red-300 col-span-2">
          <div className="grid grid-cols-3">
            <div className="p-4 bg-green-300">
              <img src={`${server}${shoppingCar.foto}`} alt="" />
            </div>
            <div className="p-4 bg-yellow-300">
              <p>{shoppingCar.nombreZapato}</p>
              <p>{shoppingCar.cantidad}</p>
              <p>{shoppingCar.total}</p>
            </div>
            <div className="p-4 bg-purple-300">
              <Tooltip title="Agregar al carrito" aria-label="add">
                <Fab size="small" className={classes.fab}>
                  <i className="far fa-trash-alt text-white"></i>
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="p-4 bg-blue-300">andres</div>
      </div>
    </>
  );
};

export default ShoppingCar;
