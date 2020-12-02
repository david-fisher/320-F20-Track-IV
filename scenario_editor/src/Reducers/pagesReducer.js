const initialPages =
    []

const pagesReducer = (state = initialPages, action) => {


       // Let page = State.filter(item => item.type === currentType);
    // If page is undefined
    // Doesn’t exist
    // Otherwise, update page
    switch (action.type) {
        case 'ADD_INTRODUCTION':
            console.log(state)
            let page = state.filter(item => item.type === 'Introduction');
            // if (page === null){
            //     state.concat(action.payload)
            // }else{
            //     // update page
            // }
            return state.concat(action.payload)
        case 'ADD_TASK_ASSIGNMENT':
            console.log(state)
            return state.concat(action.payload)
        default:
            return state
    }
}

export default pagesReducer