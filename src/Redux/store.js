import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
const middleweares =[reduxThunk];

if(process.env.NODE_ENV === "development"){
    middleweares.push(logger)
}
const store= createStore(rootReducer, applyMiddleware(...middleweares));
export default store;