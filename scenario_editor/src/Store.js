import { createStore } from 'redux'

const initialState = {

// THIS DOESNT SHOW UP ON DASHBOARD.
  scenarios: [{"id": 1, "name": 'title1', "due_date":'12-12-2020', "description": 'desc', "additional_data": '', "status": 'DRAFT'}]

  // draft: draftScenarios || [{"id": 1, "name": 'title1', "due_date":'12-12-2020', "description": 'desc', "additional_data": '', "status": 'DRAFT'}],
  // open: openScenarios || [{"id": 2, "name": 'title2', "due_date":'12-12-2020', "description": 'desc', "additional_data": 'does this show', "status": 'OPEN'}],
  // closed: closedScenarios || [{"id": 3, "name": 'title3', "due_date":'12-12-2020', "description": 'desc', "additional_data": '', "status": 'CLOSED'}]

  // Perform an axios call here?

}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SCENARIO':
      return {
        ...state, scenarios: state.scenarios.concat(action.payload)
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
