import { combineReducers } from "redux";
import citiesReducers from "./citiesReducers";
import userReducer from "./userReducer"

const mainReducers = combineReducers({
    citiesReducers,
    userReducer
})
export default mainReducers