import { types } from "../types/types";

const initialState = {
  toastNotification: false,
};

export const toastNotificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.showToastNotification:
      return {
        ...state,
        toastNotification: true,
      };

    case types.hideToastNotification:
      return {
        ...state,
        toastNotification: false,
      };

    default:
      return state;
  }
};
