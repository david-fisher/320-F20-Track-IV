import { createStore } from 'redux'
import universalFetch from '../src/Components/Calls2'

const initialState = {

  // Would it make sense to put an axios call here that retrieves the states from the api/dashboard?
  // scenarios: getScenariosFromServer() || {"id": 1}

  scenario: [
    {
    "id": 0,
    "name": 'title1',
    "due_date": '12-12-2020',
    "description": 'desc',
    "additional_data": "",
    "status": 'DRAFT',
    pages: [{
      "type": 'Introduction',
      "order": 0,
      "body_text": "",
    }


    ]

  }]

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    // case 'LOAD_SCENARIOS':
    //   return action.payload
    case 'UPDATE_SCENARIO':
      return state = {
        ...state,
        scenario: action.payload
      }
    case 'SET_TOKEN':
      return state = {
        ...state,
        token: action.token
      }
    case 'ADD_INTRODUCTION':
      return state = {
        ...state,
        scenario: state.scenario.concat(action.payload)
        // scenarios: state.scenarios.concat(action.payload)
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
