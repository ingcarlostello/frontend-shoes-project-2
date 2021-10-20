import { types } from "../types/types";

const initialState = {
  shoppingCar: [],
};

export const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addItemToCar:
      return {
        ...state,
        shoppingCar: action.payload,
      };

    default:
      return state;
  }
};
