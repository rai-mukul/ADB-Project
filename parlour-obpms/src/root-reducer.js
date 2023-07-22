import { combineReducers } from 'redux'
import user from './userReducer'
import changeState from "./changeStateReducer"



const rootReducer = combineReducers({
      user,
     changeState
})

export default rootReducer;