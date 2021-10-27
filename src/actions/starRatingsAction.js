// @types
import { types } from "../types/types";

// @Url's
import { getStarRatinUrl } from "../urls/urls";

export const fetchStars = () => {
  return async (dispatch) => {
    let response = await fetch(getStarRatinUrl);
    let result = await response.json();

    // dispatch(getStarRatings(result))
    let stars = result.map((star) => {
      // console.log(star.zapatos_mujer.id);
      let score = {
        estrellas: star.cantidadEstrellas,
        idZapato: star.zapatos_mujer.id,
      };
      return score;
    });
    console.log(stars);
  };
};

export const getStarRatings = (stars) => {
  return {
    type: types.getStarRating,
    payload: stars,
  };
};
