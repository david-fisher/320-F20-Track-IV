import { createStore } from 'redux'
import universalFetch from '../src/Components/Calls2'

// let TOKEN = "abcdefghijklmnopqrstuvwxyz";

// async function getScenariosFromServer() {
//   console.log("In getScenariosfromserver in store.js")
//   const headers = {
//       'Authorization': `Bearer ${TOKEN}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Accept-Encoding': 'gzip, deflate, br'
//   }

//   const response = universalFetch('/api/v1/dashboard', headers) 

//   console.log("THIS IS THE RESPONSE from in store.js " + response)
//   return response
// }

// *******************************************************************************************
// CAN I PUT THIS AXIOS CALL IN THE STORE? WHERE ELSE WOULD I PUT IT? IS THERE A REASON NOT TO?

const initialState = {

  // Would it make sense to put an axios call here that retrieves the states from the api/dashboard?
  // scenarios: getScenariosFromServer() || {"id": 1}

  scenarios: [{
    "id": 1,
    "name": 'title1',
    "due_date": '12-12-2020',
    "description": 'desc',
    "additional_data": '',
    "status": 'DRAFT',
    // "intro": '',
    // "task": '',
    // 'init_reflection:': '',
    // 'init_action': ''

  }]

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOAD_SCENARIOS':
      return action.payload
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
    case 'ADD_INTRO':
      return state = {
        ...state,
        scenarios: state.scenarios.concat(action.payload)
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
