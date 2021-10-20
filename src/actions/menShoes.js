// @types
import { types } from "../types/types";

// @Url's
import { getMenShoesUrl } from "../urls/urls";

export const getMenShoesLoading = () => {
  return {
    type: types.getMenShoesLoading,
  };
};

export const getMenShoes = (shoes) => {
  return {
    type: types.getMenShoes,
    payload: shoes,
  };
};

export const getMenShoesError = (error) => {
  return {
    type: types.getMenShoesError,
    payload: error,
  };
};

export const fetchMenShoes = () => {
  return async (dispatch) => {
    dispatch(getMenShoesLoading());
    let response = await fetch(getMenShoesUrl);
    let result = await response.json();
    dispatch(getMenShoes(result));
    return null;
  };
};
