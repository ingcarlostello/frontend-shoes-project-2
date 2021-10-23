import { types } from "../types/types";

export const addItemToShoppingCar = (selectedShoe) => {
  return {
    type: types.addItemToCar,
    payload: selectedShoe,
  };
};

export const dataFromLocalStorage = (localStorageData) => {
  return {
    type: types.localStorageValidate,
    payload: localStorageData,
  };
};

export const checkingLocalStorage = () => {
  let dataStorage = JSON.parse(localStorage.getItem("shoes"));
  return {
    type: types.getDataFromLocalStorage,
    payload: dataStorage,
  };
};
