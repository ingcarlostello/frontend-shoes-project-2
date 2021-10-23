import React, { useEffect } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Url's
import { server } from "../../urls/urls";

// @Material UI
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

// @Styles.js
import { useStyles } from "./styles";

// @helpers
import { currency } from "../../helpers/currency";
import { checkingLocalStorage } from "../../actions/shoppingCarActions";


const ShoppingCar = () => {

  const dispatch = useDispatch()

  const classes = useStyles();
  
  const { shoppingCar } = useSelector((state) => state.shoppingCar);

  useEffect(() => {
    const getShoesFromLocalStorage = () => {
      dispatch(checkingLocalStorage());
    };
    getShoesFromLocalStorage();
  }, [dispatch]);  

  return (
    <>
      <div className="px-20">
        {/* <-------Titulos Tabla-------> */}
        <div className="mt-20 grid grid-cols-5 border border-gray-400">
          <div className="flex border border-gray-400">
            <p className="m-auto">Nombre Producto</p>
          </div>
          <div className="flex border border-gray-400">
            <p className="m-auto">Precio Unitario</p>
          </div>
          <div className="flex border border-gray-400">
            <p className="m-auto">Cantidad</p>
          </div>
          <div className="flex border border-gray-400">
            <p className="m-auto">Total</p>
          </div>
          <div className="flex border border-gray-400"></div>
        </div>
        {/* <-------Titulos Tabla-------> */}

        <div className="grid grid-cols-5">
          {shoppingCar === null ? (<div>No hay nada en el carrito</div>) : shoppingCar.map((zapato) => (
            <>
              <div className="flex justify-around border border-gray-400">
                <div className="py-4">
                  <img
                    className="w-28"
                    src={`${server}${
                      zapato.foto === null || "" || undefined
                        ? "sin nombre"
                        : zapato.foto
                    } `}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <p>
                    {zapato.nombreZapato === null || "" || undefined
                      ? "sin nombre"
                      : zapato.nombreZapato}
                  </p>

                  <div className="ml-2 font-bold">
                    Talla:{" "}
                    {zapato.talla === null || "" || undefined
                      ? "sin nombre"
                      : zapato.talla}
                  </div>
                </div>
              </div>

              <div className="flex border border-gray-400">
                <p className="m-auto">
                  {zapato.precioUnitario === null || "" || undefined
                    ? "sin nombre"
                    : currency(zapato.precioUnitario)}
                </p>
              </div>

              <div className="flex border border-gray-400">
                <p className="m-auto">
                  {zapato.cantidad === null || "" || undefined
                    ? "sin nombre"
                    : zapato.cantidad}
                </p>
              </div>

              <div className="flex border border-gray-400">
                <p className="m-auto">
                  {zapato.total === null || "" || undefined
                    ? "sin nombre"
                    : currency(zapato.total)}
                </p>
              </div>

              <div className="flex border border-gray-400">
                <div className="m-auto">
                  <Tooltip title="Sacar del carrito" aria-label="add">
                    <Fab size="small" className={classes.fab}>
                      <i className="far fa-trash-alt text-white"></i>
                    </Fab>
                  </Tooltip>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCar;
