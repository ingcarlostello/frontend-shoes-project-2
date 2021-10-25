import React, { useEffect } from "react";

// @React-Redux
import { useDispatch, useSelector } from "react-redux";

// @Url's
import { server } from "../../urls/urls";

// @helpers
import { currency } from "../../helpers/currency";
import { checkingLocalStorage } from "../../actions/shoppingCarActions";

const Cart3 = () => {
    const dispatch = useDispatch();  

    const { shoppingCar } = useSelector((state) => state.shoppingCar);

    useEffect(() => {
        const getShoesFromLocalStorage = () => {
            dispatch(checkingLocalStorage());
        };
        getShoesFromLocalStorage();
    }, [dispatch]);

    return (
      <>
        <div className="bg-gray-100">
          <div className="w-full h-96 bg-indigo-400 flex">
            <p className="text-6xl sm:text-8xl text-gray-100 m-auto">
              Carrito de Compras
            </p>
          </div>
          <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
              <div className="w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
                  <h2 className="font-semibold text-2xl">
                    {shoppingCar === null ? 0 : shoppingCar.length} Items
                  </h2>
                </div>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-bold text-gray-600 text-lg uppercase w-2/5">
                    Detalles de la compra
                  </h3>
                  <h3 className="font-bold text-center text-gray-600 text-lg uppercase w-1/5 text-center">
                    Precio unitario
                  </h3>
                  <h3 className="font-bold text-center text-gray-600 text-lg uppercase w-1/5 text-center">
                    Cantidad
                  </h3>
                  <h3 className="font-bold text-center text-gray-600 text-lg uppercase w-1/5 text-center">
                    precio total
                  </h3>
                </div>
                {shoppingCar === null ? (
                  <div>No hay nada en el carrito</div>
                ) : (
                  shoppingCar.map((zapato, i) => (
                    <div
                      key={i}
                      className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    >
                      <div className="flex w-2/5">
                        <div className="w-40">
                          <img
                            className="w-40 rounded-lg"
                            src={`${server}${
                              zapato.foto === null || "" || undefined
                                ? "sin nombre"
                                : zapato.foto
                            } `}
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {" "}
                            <p>
                              {zapato.nombreZapato === null || "" || undefined
                                ? "sin nombre"
                                : zapato.nombreZapato}
                            </p>
                          </span>
                          <span className="text-xs">
                            {" "}
                            <div className="ml-2 font-bold">
                              Talla:{" "}
                              {zapato.talla === null || "" || undefined
                                ? "sin nombre"
                                : zapato.talla}
                            </div>
                          </span>
                          <div className="font-semibold hover:text-red-500 text-gray-500 text-lg">
                            <i className="far fa-window-close"></i>
                          </div>
                        </div>
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        <p className="m-auto">
                          {zapato.precioUnitario === null || "" || undefined
                            ? "sin nombre"
                            : currency(zapato.precioUnitario)}
                        </p>
                      </span>
                      <div className="flex justify-center w-1/5">
                        <input
                          className="p-2 bg-white border border-gray-300 rounded-md shadow-sm w-16 pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          id="catidadZapatosCart"
                          name="cantidadZapatosCart"
                          readOnly
                          //   onChange={(e) => setCantidadZapatos(e.target.value)}
                          //   placeholder="cantidad"
                          type="number"
                          value={
                            zapato.cantidad === null || "" || undefined
                              ? "sin nombre"
                              : zapato.cantidad
                          }
                        />
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        <p className="m-auto">
                          {zapato.total === null || "" || undefined
                            ? "sin nombre"
                            : currency(zapato.total)}
                        </p>
                      </span>
                    </div>
                  ))
                )}

                <div className="flex font-semibold text-indigo-600 text-sm mt-10">
                  <svg
                    className="fill-current mr-2 text-indigo-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                  </svg>
                  Continue Shopping
                </div>
              </div>

              <div id="summary" className="w-1/4 px-8 py-10 bg-gray-200">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Resumen Compra
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items x {shoppingCar === null ? 0 : shoppingCar.length}
                  </span>
                  <span className="font-semibold text-sm">590$</span>
                </div>

                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total</span>
                    <span>$600</span>
                  </div>
                  <button className="shadow-lg rounded-lg bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Cart3;
