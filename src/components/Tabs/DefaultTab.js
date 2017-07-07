import React from 'react';
import {
    View,
    Text
} from 'react-native';

function DefaultTab(props) {

    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default DefaultTab;
