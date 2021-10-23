import { types } from "../types/types";

const initialState = {
  shoppingCar: [],
  // dataFromLocalStorage: ''
};

export const carritoReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.addItemToCar:
      console.log(state.shoppingCar);
      return {
        ...state,
        shoppingCar: state.shoppingCar === null ? [action.payload] :  [...state.shoppingCar, action.payload],
        // shoppingCar: [...action.payload],
      };

    case types.getDataFromLocalStorage:
      return {
        ...state,
        shoppingCar: action.payload,
      };

    default:
      return state;
  }
};
