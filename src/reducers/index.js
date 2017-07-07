import {
    combineReducers
} from 'redux'
import {
    reducer as reducerAutoRehydrated
} from './persist'
import {
    reducer as reducerNetinfo
} from './netinfo'

const rootReducer = combineReducers({
    autoRehydrated: reducerAutoRehydrated,
    netInfo: reducerNetinfo
});

export default rootReducer;
