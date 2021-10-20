import { types } from "../types/types";

const initialState = {
    loading: false,
    slides: [],
    error: null
}

export const slidesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.getSlidesLoading:
            return {
                ...state,
                loading:true
            }

        case types.getSlides:
            return {
                ...state,
                loading:false,
                payload: action.payload.slider
            }

        case types.getSlidesError:
            return {
                ...state,
                loading: false,
                payload: action.payload.error
            }
    
        default:
            return state;
    }
}