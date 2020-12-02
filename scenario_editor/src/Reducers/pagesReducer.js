const initialPages =
    []

const pagesReducer = (state = initialPages, action) => {

    switch (action.type) {
        case 'ADD_INTRODUCTION':
            console.log(state)
            return state.concat(action.payload)
        case 'ADD_TASK_ASSIGNMENT':
            console.log(state)
            return state.concat(action.payload)
        default:
            return state
    }
}

export default pagesReducer