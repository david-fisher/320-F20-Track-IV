const initialScenario = {
    "id": 0,
    "name": '',
    "due_date": '12-12-2020',
    "description": '',
    "additional_data": "",
    "status": 'DRAFT',
}

// "id": 0,
// "name": '',
// "due_date": '12-12-2020',
// "description": '',
// "additional_data": "",
// "status": 'DRAFT',

const scenarioReducer = (state = initialScenario, action) => {

    switch (action.type) {

        // Might work?
        case 'UPDATE_SCENARIO':
            console.log(action.payload.type)
            
            return action.payload

        default:
            return state
    }
}

export default scenarioReducer