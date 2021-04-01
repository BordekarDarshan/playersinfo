import { combineReducers, createStore, applyMiddleware } from "redux";
import { playerReducer } from "./FetchProfile/Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ playerData: playerReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
