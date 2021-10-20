import { types } from "../types/types";

const initialState = {
  shoeDetail: [],
};

export const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productDetail:
      return {
        ...state,
        shoeDetail: action.payload,
      };

    default:
      return state;
  }
};
