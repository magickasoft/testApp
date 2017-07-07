import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import UserDetail from '../components/UserDetail'

class UserDetailContainer extends Component {
    render() {
        return (
            <UserDetail {...this.props}/>
        );
    }
}
UserDetailContainer.propTypes = {
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

export default connect(select, bindActions)(UserDetailContainer)

