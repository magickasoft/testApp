import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import FeedUser from '../components/FeedUsers'

class FeedUserContainer extends Component {
    render() {
        return (
            <FeedUser {...this.props}/>
        );
    }
}
FeedUserContainer.propTypes = {
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

export default connect(select, bindActions)(FeedUserContainer)
