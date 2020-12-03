const initialStakeholders = {
    "id": 0,
    "name": '',
    "conversation": "",
    "description": '',
    "designation": "",
}

const stakeholdersReducer = (state = initialStakeholders, action) => {

    switch (action.type) {

        // Might work?
        case 'UPDATE_STAKEHOLDERS':
            console.log(action.payload.type)
            return action.payload

        default:
            return state
    }
}

export default stakeholdersReducer