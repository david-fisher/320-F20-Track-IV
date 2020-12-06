const initialToken = "";

const tokenReducer = (state = initialToken, action) => {

    switch (action.type) {
        case 'ADD_TOKEN':
            console.log(state)
            return action.payload.token
        default:
            return state
    }
}
    export default tokenReducer;