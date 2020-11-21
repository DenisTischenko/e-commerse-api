import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import data from './data'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data,
    basket
  })

export default createRootReducer
