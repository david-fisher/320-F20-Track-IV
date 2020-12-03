import { createStore, combineReducers } from 'redux'
import scenarioReducer from '../Reducers/scenarioReducer';
import pagesReducer from '../Reducers/pagesReducer';
import stakeholdersReducer from '../Reducers/stakeholdersReducer';

// combining reducers into a single reducer
// The final state of this reducer is a combination of the states in each individual reducer
const appReducer = combineReducers({
    scenarioData: scenarioReducer,
    pages: pagesReducer,
    stakeholders: stakeholdersReducer
})

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'RESET_DATA':
            return state = undefined
    }
    return appReducer(state, action);
};

export default rootReducer;