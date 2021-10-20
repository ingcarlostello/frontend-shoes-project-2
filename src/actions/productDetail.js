// @types
import { types } from "../types/types";

export const infoShoe = (shoe) => {
  return {
    type: types.productDetail,
    payload: shoe,
  };
};
