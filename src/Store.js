import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import CharacterListReducer from './reducers/CharacterListReducer';
import FilmReducer from './reducers/FilmReducer';
import CharacterReducer from './reducers/GetCharacterReducer';

const reducer = combineReducers({
    CharacterList: CharacterListReducer,
    Film: FilmReducer, 
    Character: CharacterReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;