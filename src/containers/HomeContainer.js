import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import Home from '../components/Home'

class HomeContainer extends Component {
    render() {
        return (
            <Home {...this.props}/>
        );
    }
}
HomeContainer.propTypes = {
    autoRehydrated: PropTypes.bool.isRequired

};
function select(state) {

    const { autoRehydrated  } = state;

    return {
        autoRehydrated
    };
}

const bindActions = {

};

export default connect(select, bindActions)(HomeContainer)
