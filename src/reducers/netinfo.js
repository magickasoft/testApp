import {
    Nothing,
    Just
} from 'data.maybe';
import {
    SET_STATUS
} from '../actions/netinfo';

export const initialState = {
    type: Nothing()
};

export function reducer(state = initialState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case SET_STATUS: {
            return {...state, type: Just(payload)};
        }
    }
    return state
}
