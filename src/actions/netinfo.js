import {
    curry
} from 'lodash/fp';

export const SET_STATUS = 'UI/NETINFO/SET_STATUS';

export const setNetInfoStatus = curry(
    data => ({
        type: SET_STATUS,
        payload: data
    })
);
