import axios from "axios";
import Axios from "axios";
import { CHARACTER_FAIL, CHARACTER_LOADING, CHARACTER_SUCCESS } from "../constants/CharacterConst";
import { CHARACTER_LIST_FAIL, CHARACTER_LIST_LOADING, CHARACTER_LIST_SUCCESS } from "../constants/CharacterListConstants";
import { FILM_NAME_FAIL, FILM_NAME_LOADING, FILM_NAME_SUCCESS } from "../constants/FilmListConstants";

const GetCharacterList = () => async (dispatch) => {
    try{
        dispatch({
            type: CHARACTER_LIST_LOADING
        });
        const res = await Axios.get("https://swapi.dev/api/people/");
        dispatch({
            type: CHARACTER_LIST_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: CHARACTER_LIST_FAIL,
        })
    }
}

const GetFilmName = (links) => async dispatch => {
  try {
    dispatch({
      type: FILM_NAME_LOADING
    });
    axios.all(links.map(l=> Axios.get(l))).then(axios.spread(function (...res){
      var films = res.map(function(x) {
        return x.data;
      });
      dispatch({
        type: FILM_NAME_SUCCESS,
        payload: films,
      });
    }))
  } catch(e){
      dispatch({
        type: FILM_NAME_FAIL
      })
  }
};

export const GetCharacter = (index) => async dispatch => {
  try {
    dispatch({
      type: CHARACTER_LOADING
    });

    const res = await axios.get(`https://swapi.dev/api/people/${index}/`);
    dispatch({
      type: CHARACTER_SUCCESS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: CHARACTER_FAIL,
    })
  }
};






export {GetCharacterList, GetFilmName};