import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import CameraRollPicker from '../components/CameraRollPicker'

class CameraRollPickerContainer extends Component {
    render() {
        return (
            <CameraRollPicker {...this.props}/>
        );
    }
}
CameraRollPickerContainer.propTypes = {
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

export default connect(select, bindActions)(CameraRollPickerContainer)
