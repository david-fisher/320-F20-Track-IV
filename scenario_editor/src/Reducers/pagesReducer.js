const initialPages =
    []

const pagesReducer = (state = initialPages, action) => {


    switch (action.type) {

        // Currently allows only ONE of each page to be added. 
        // Need to find a way to update the page if it exists.
        case 'ADD_INTRODUCTION':
            console.log("Added to store: " + action.payload.name)
            let introIndex = state.findIndex(item => item.name == action.payload.name);
            // If intro doesn't exist, create it
            if (introIndex === -1) {
                return [...state, action.payload]
            }
            // Else, update it
            else {
                return [state[introIndex], action.payload]
            }
            return state
        case 'ADD_TASK_ASSIGNMENT':
            console.log("Added to store: " + action.payload.name)
            let taskIndex = state.findIndex(item => item.name == action.payload.name);
            if (taskIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[taskIndex], action.payload]
            }
            return state
        case 'ADD_CONCLUSION':
            console.log("Added to store: " + action.payload.name)
            let consequencesIndex = state.findIndex(item => item.name == action.payload.name);
            if (consequencesIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[consequencesIndex], action.payload]
            }
            return state
        case 'ADD_INITIAL_REFLECTION':
            console.log("Added to store: " + action.payload.name)
            let initialReflectionIndex = state.findIndex(item => item.name == action.payload.name);
            if (initialReflectionIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[initialReflectionIndex], action.payload]
            }
            return state
        case 'ADD_MIDDLE_REFLECTION':
            console.log("Added to store: " + action.payload.name)
            let middleReflectionIndex = state.findIndex(item => item.name == action.payload.name);
            if (middleReflectionIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[middleReflectionIndex], action.payload]
            }
            return state
        case 'ADD_FINAL_REFLECTION':
            console.log("Added to store: " + action.payload.name)
            let finalReflectionIndex = state.findIndex(item => item.name == action.payload.name);
            if (finalReflectionIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[finalReflectionIndex], action.payload]
            }
            return state
        case 'ADD_USER_AGREEMENT':
            console.log("Added to store: " + action.payload.name)
            let uaIndex = state.findIndex(item => item.name == action.payload.name);
            if (uaIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[uaIndex], action.payload]
            }
            return state
        case 'ADD_INITIAL_ACTION':
            console.log("Added to store: " + action.payload.name)
            let initialActionIndex = state.findIndex(item => item.name == action.payload.name);
            if (initialActionIndex === -1) {
                return [...state, action.payload]
            } else {
                return [state[initialActionIndex], action.payload]
            }
            return state
        default:
            return state
    }
}

export default pagesReducer