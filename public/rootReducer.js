import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './Login/LoginReducers'

const rootReducer = combineReducers({
  routing,
  login
})

export default rootReducer