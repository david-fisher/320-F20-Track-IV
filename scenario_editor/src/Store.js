import { createStore } from 'redux'
import universalFetch from '../src/Components/Calls2'

let TOKEN = "abcdefghijklmnopqrstuvwxyz";

async function getScenariosFromServer() {
  console.log("In getScenariosfromserver in store.js")
  const headers = {
      'Authorization': `Bearer ${TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br'
  }

  const response = universalFetch('/api/v1/dashboard', headers) 

  console.log("THIS IS THE RESPONSE from in store.js " + response)
  return response
}


const initialState = {
  
  // Would it make sense to put an axios call here that retrieves the states from the api/dashboard?
  scenarios: getScenariosFromServer() || {"id": 1}

  // scenarios: [{ "id": 1, "name": 'title1', "due_date": '12-12-2020', "description": 'desc', "additional_data": '', "status": 'DRAFT' }]

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SCENARIO':
      return state = {
        ...state,
        scenarios: state.scenarios.concat(action.payload)
      }
    case 'SET_TOKEN':
      return state = {
        ...state,
        token: action.token
      }
    default:
      return state

  }

  return state
}

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
