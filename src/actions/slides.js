// @types
import { types } from "../types/types";

// @Url's
import { getSlidesUrl } from "../urls/urls";

export const getSlidesLoading = () => {
  return {
    type: types.getSlidesLoading,
  };
};

export const getSlides = (slides) => {
  return {
    type: types.getSlides,
    payload: slides,
  };
};

export const getSlidesError = (error) => {
  return {
    type: types.getSlidesError,
    payload: error,
  };
};

export const fetchSlides = () => {
  return async (dispatch) => {
    dispatch(getSlidesLoading());
    let response = await fetch(getSlidesUrl);
    let result = await response.json();
    result.map((data) => {
      dispatch(getSlides(data));
      return null;
    });
  };
};
