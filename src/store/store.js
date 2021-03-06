import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// @Reducers
import { carritoReducer } from "../reducers/carritoReducer";
import { menShoesReducer } from "../reducers/menSectionReducer";
import { productDetailReducer } from "../reducers/productDetailReducer";
import { slidesReducer } from "../reducers/slidesReducer";
import { starRatingReducer } from "../reducers/StarRatingReducer";
import { toastNotificationReducer } from "../reducers/toastNotificationReducer";
import { womenShoesReducer } from "../reducers/womenSectionReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  menShoes: menShoesReducer,
  productDetail: productDetailReducer,
  slides: slidesReducer,
  womenShoes: womenShoesReducer,
  shoppingCar: carritoReducer,
  toastNotification: toastNotificationReducer,
  stars: starRatingReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
