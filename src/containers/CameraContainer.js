import React, { Component, PropTypes } from 'react';
import {
    connect
} from 'react-redux'
import CameraPicker from '../components/Camera'

class CameraPickerContainer extends Component {
    render() {
        return (
            <CameraPicker {...this.props}/>
        );
    }
}
CameraPickerContainer.propTypes = {
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

export default connect(select, bindActions)(CameraPickerContainer)
