import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import Tabs from '../components/Tabs'

class TabsContainer extends Component {
    render() {
        return (
            <Tabs {...this.props}/>
        );
    }
}
TabsContainer.propTypes = {
    autoRehydrated: PropTypes.object.isRequired

};
function select(state) {

    const { autoRehydrated  } = state;

    return {
        autoRehydrated
    };
}

const bindActions = {

};

export default connect(select, bindActions)(TabsContainer)
