import { types } from "../types/types";

export const addItemToShoppingCar = (selectedShoe) => {
  return {
    type: types.addItemToCar,
    payload: selectedShoe,
  };
};
