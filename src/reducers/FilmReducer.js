import {FILM_NAME_FAIL, FILM_NAME_LOADING, FILM_NAME_SUCCESS } from "../constants/FilmListConstants";

const DefaultState = {
  loading: false,
  data: [],
  errorMsg: ""
};

const FilmReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case FILM_NAME_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case FILM_NAME_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to find movie"
      };
    case FILM_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: action.payload
      };
    default:
      return state
  }
};

export default FilmReducer;