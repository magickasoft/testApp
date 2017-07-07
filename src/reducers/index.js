import { combineReducers } from 'redux'
import { reducer as reducerAutoRehydrated } from './persist'
import { reducer as reducerNetinfo } from './netinfo'
// import { reducer as reducerNav } from './nav'

const rootReducer = combineReducers({
    autoRehydrated: reducerAutoRehydrated,
    netInfo: reducerNetinfo,
    //nav: reducerNav,
});

export default rootReducer;
