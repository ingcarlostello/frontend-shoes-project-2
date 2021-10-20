// @types
import { types } from "../types/types";

// @Url's
import { getWomenShoesUrl } from "../urls/urls";



export const getWomenShoesLoading = () => {
  return {
    type: types.getWomenShoesLoading,
  };
};

export const getWomenShoes = (shoes) => {
  return {
    type: types.getWomenShoes,
    payload: shoes,
  };
};

export const getWomenShoesError = (error) => {
  return {
    type: types.getWomenShoesError,
    payload: error,
  };
};

export const fetchWomenShoes = () => {
  return async (dispatch) => {
    dispatch(getWomenShoesLoading());
    let response = await fetch(getWomenShoesUrl);
    let result = await response.json();
    dispatch(getWomenShoes(result));
    return null;
  };
};