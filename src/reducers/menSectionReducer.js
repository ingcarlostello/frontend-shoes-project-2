import { types } from "../types/types";

const initialState = {
  loading: false,
  menShoes: [],
  error: null,
};

export const menShoesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getMenShoesLoading:
      return {
        ...state,
        loading: true,
      };

    case types.getMenShoes:
      // console.log(action);
      return {
        ...state,
        loading: false,
        menShoes: action.payload,
      };

    case types.getMenShoesError:
      return {
        ...state,
        loading: false,
        payload: action.payload.error,
      };

    default:
      return state;
  }
};
