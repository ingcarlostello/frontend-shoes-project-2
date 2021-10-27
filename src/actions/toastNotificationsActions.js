// @types
import { types } from "../types/types";

export const showToastNotification = () => {
  return {
    type: types.showToastNotification,
  };
};

export const hideToastNotification = () => {
  return {
    type: types.hideToastNotification,
  };
};
