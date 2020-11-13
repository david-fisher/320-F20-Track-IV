import { createStore } from 'redux'

const initialState = {
  // posts: [{ id: 1, title: 'This is the first post' }, { id: 2, title: 'second post', intro: "ff" }],

  // // Testing out a potential scenario structure. Going to try not to over think it.
  // // Notes:
  // // I think this can create an initial one with empty values.
  // // Do we even need anything here? Maybe we can "add" values to the individual object?
  // // Lowkey might need to just preset the scenario data as empty at first. Then update from there.
  // scenarios: [{ id: 0, title: '', description: '' }],
  // scenario: [{ id: 0, title: '', description: '' }],

  // // This came with the tutorial I followed, idk what it is tho
  // loginModal: {
  //   open: false
  // }
  // posts: [{id: 1, title: 'This is the first post'}, {id: 2, title: 'second post', intro: "ff"}],

  scenarios: [{ id: 1, title: '', intro: '' }]

  // GET from databse, map return arr to id, title, intro, etc

  // loginModal: {
  //   open: false
  // }
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SCENARIO':
      return Object.assign({}, state, {
        scenarios: state.scenarios.concat(action.payload)
      })
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
