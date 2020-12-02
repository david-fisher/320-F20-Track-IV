const initialPages =
    []

const pagesReducer = (state = initialPages, action) => {

    switch (action.type) {

        // Currently allows only ONE of each page to be added. 
        // Need to find a way to update the page if it exists.
        case 'ADD_INTRODUCTION':
            console.log(action.payload.name)
            let introIndex = state.findIndex(item => item.name == action.payload.name);
            if (introIndex === -1) {
                return [...state, action.payload]
            }
            return state
        case 'ADD_TASK_ASSIGNMENT':
            console.log(action.payload.name)
            let taskIndex = state.findIndex(item => item.name == action.payload.name);
            if (taskIndex === -1) {
                return [...state, action.payload]
            }
            return state
        case 'ADD_CONSEQUENCES':
            console.log(action.payload.name)
            let consequencesIndex = state.findIndex(item => item.name == action.payload.name);
            if (consequencesIndex === -1) {
                return [...state, action.payload]
            }
            return state
        default:
            return state
    }
}

export default pagesReducer