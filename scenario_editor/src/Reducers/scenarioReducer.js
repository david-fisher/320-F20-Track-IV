const initialScenario = {
    "id": 0,
    "name": '',
    "due_date": '12-12-2020',
    "description": '',
    "additional_data": "",
    "status": 'DRAFT',
}

const scenarioReducer = (state = initialScenario, action) => {

    switch (action.type) {

        case "INCREMENT":
            return { num: state.num + 1 }

        case "DECREMENT":
            return { num: state.num - 1 }

        default:
            return state
    }


}

export default scenarioReducer