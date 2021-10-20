import { types } from "../types/types";

const initialState = {
  loading: false,
  womenShoes: [],
  error: null,
};

export const womenShoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getWomenShoesLoading:
      return {
        ...state,
        loading: true,
      };

    case types.getWomenShoes:
      return {
        ...state,
        loading: false,
        womenShoes: action.payload,
      };

    case types.getWomenShoesError:
      return {
        ...state,
        loading: false,
        payload: action.payload.error,
      };

    default:
      return state;
  }
};
