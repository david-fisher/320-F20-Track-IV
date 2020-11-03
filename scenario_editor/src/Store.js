import { createStore } from 'redux'

const initialState = {
  posts: [{id: 1, title: 'This is the first post'}, {id: 2, title: 'second post', intro: "ff"}],
  loginModal: {
    open: false
  }
}

const reducer = (state = initialState, action) => {
  
  if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    })
  }

  return state
}

const store = createStore(reducer)

export default store