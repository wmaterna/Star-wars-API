import { CHARACTER_FAIL, CHARACTER_LOADING, CHARACTER_SUCCESS } from "../constants/CharacterConst";

const DefaultState = {
    loading: false,
    data: [],
    errorMsg: ""
  };
  
  const CharacterReducer = (state = DefaultState, action) => {
    switch (action.type) {
      case CHARACTER_LOADING:
        return {
          ...state,
          loading: true,
          errorMsg: ""
        };
      case CHARACTER_FAIL:
        return {
          ...state,
          loading: false,
          errorMsg: "Unable to find character"
        };
      case CHARACTER_SUCCESS:
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
  
  export default CharacterReducer;