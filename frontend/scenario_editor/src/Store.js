import { createStore, combineReducers } from 'redux'
import appReducer from '../src/Reducers/rootReducer'

const store = createStore(appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

