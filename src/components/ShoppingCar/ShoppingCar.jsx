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
    console.log(getLocalStorage.nombreZapato);

    const classes = useStyles();
    const { shoppingCar } = useSelector((state) => state.shoppingCar);

  return (
    <>
      <div class="inline-flex space-x-4 bg-yellow-300">
        <div class="flex-1 bg-red-300">
           <div className="bg-green-300 inline-block">
              <img className="w-80" src={`${server}${shoppingCar.foto === null || '' || undefined ? 'sin nombre' : getLocalStorage.foto} `} alt="" />
            </div>
        </div>
        <div class="flex-1 bg-blue-300">
           
              <p>{shoppingCar.nombreZapato === null || '' || undefined ? 'sin nombre' : getLocalStorage.nombreZapato}</p>
              <p>{shoppingCar.cantidad === null || '' || undefined ? 'sin nombre' : getLocalStorage.cantidad}</p>
              <p>{shoppingCar.total === null || '' || undefined ? 'sin nombre' : getLocalStorage.total}</p>
        
        </div>
        <div class="flex-1 bg-green-300">
          <Tooltip title="Agregar al carrito" aria-label="add">
                <Fab size="small" className={classes.fab}>
                  <i className="far fa-trash-alt text-white"></i>
                </Fab>
              </Tooltip>
        </div>
      </div>
      {/* <div className="grid grid-cols-3">
        <div className="p-4 bg-red-300 col-span-2">
          <div className="grid grid-cols-3">
            <div className="bg-green-300 inline-block">
              <img className="w-20 h-20" src={`${server}${shoppingCar.foto === null || '' || undefined ? 'sin nombre' : getLocalStorage.foto} `} alt="" />
            </div>
            <div className="bg-yellow-300">
              <p>{shoppingCar.nombreZapato === null || '' || undefined ? 'sin nombre' : getLocalStorage.nombreZapato}</p>
              <p>{shoppingCar.cantidad === null || '' || undefined ? 'sin nombre' : getLocalStorage.cantidad}</p>
              <p>{shoppingCar.total === null || '' || undefined ? 'sin nombre' : getLocalStorage.total}</p>
            </div>
            <div className="bg-purple-300 inline-block">
              <Tooltip title="Agregar al carrito" aria-label="add">
                <Fab size="small" className={classes.fab}>
                  <i className="far fa-trash-alt text-white"></i>
                </Fab>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="p-4 bg-blue-300">andres</div>
      </div> */}
    </>
  );
};

export default ShoppingCar;
