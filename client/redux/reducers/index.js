import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import data from './data'
import basket from './basket'
import logs from './logs'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data,
    basket,
    logs
  })

export default createRootReducer
