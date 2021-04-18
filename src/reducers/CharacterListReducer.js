import { CHARACTER_LIST_FAIL, CHARACTER_LIST_LOADING, CHARACTER_LIST_SUCCESS } from "../constants/CharacterListConstants";

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
  };
  
  const CharacterListReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case CHARACTER_LIST_LOADING:
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case CHARACTER_LIST_FAIL:
        return {
          ...state,
          loading: false,
          errorMsg: "Unable to get Star Wars movies"
        };
      case CHARACTER_LIST_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload.results,
          errorMsg: "",
        };
      default:
        return state
    }
  };
  
  export default CharacterListReducer