import numReducer from './num'
import optionReducer from './option'
import userReducer from './user'
import { combineReducers } from "redux";

const reducers = combineReducers({
    num: numReducer,
    option: optionReducer,
    user: userReducer
})

export default reducers