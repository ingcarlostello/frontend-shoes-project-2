import { types } from "../types/types";

const initialState = {
  loading: false,
  ratingStar: [],
  error: null,
};

export const starRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getStarRatingsLoading:
      return {
        ...state,
        loading: true,
      };

    case types.getStarRating:
      return {
        ...state,
        loading: false,
        ratingStar: action.payload,
      };

    default:
      return state;
  }
};
