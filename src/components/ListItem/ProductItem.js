import React from 'react';
import {
    View,
    Text
} from 'react-native';

function ProductItem(props) {

    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}

export default ProductItem;
