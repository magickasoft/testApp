'use strict';
import React, { Component } from 'react';
import {
    NetInfo,
} from 'react-native';
import {
    Provider
} from 'react-redux';
import {
    setNetInfoStatus
}  from './actions/netinfo';
import App from './app';
import store from  './config/storeConfig';


class wrapper extends Component {

    handleConnectionInfoChange = (connectionInfo) => {
        store.dispatch(setNetInfoStatus(connectionInfo));
    };
    componentWillUnmount() {

        NetInfo.removeEventListener(
            'change',
            this.handleConnectionInfoChange
        );
    }
    componentDidMount() {

        NetInfo.addEventListener(
            'change',
            this.handleConnectionInfoChange
        );
    }
    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default wrapper;