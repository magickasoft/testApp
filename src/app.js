import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    connect
} from 'react-redux';
import {
    Root
} from './config/router';
import _ from 'lodash';
global._ = _;


class App extends Component {
    componentWillReceiveProps(newProps) {
        let { autoRehydrated: oldAutoRehydrated } = this.props;
        let { autoRehydrated } = newProps;
    }

    render() {
        const {
          autoRehydrated,
          netinfo,
        } = this.props;

        autoRehydrated.getOrElse(<View />);
        return (
            <Root />
        )
    }
}

function select(state) {

    const { autoRehydrated, netinfo  } = state;

    return {
        autoRehydrated,
        netinfo
    };
}

const bindActions = {

};

export default connect(select, bindActions)(App)
