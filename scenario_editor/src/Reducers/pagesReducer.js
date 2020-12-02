const initialPages =
    []

const pagesReducer = (state = initialPages, action) => {

    switch (action.type) {

        // Currently allows only ONE of each page to be added. 
        // Need to find a way to update the page if it exists.
        case 'ADD_INTRODUCTION':
            console.log(action.payload.type)
            let introIndex = state.findIndex(item => item.type == action.payload.type);
            if (introIndex === -1) {
                return [...state, action.payload]
            }
            return state
        case 'ADD_TASK_ASSIGNMENT':
            console.log(action.payload.type)
            let taskIndex = state.findIndex(item => item.type == action.payload.type);
            if (taskIndex === -1) {
                return [...state, action.payload]
            }
            return state
        default:
            return state
    }
}

export default pagesReducer