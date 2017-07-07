import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2 : width / 2 ;

function ProductItem(props) {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.gridItem}>
            <Image
                resizeMode={'cover'}
                style={styles.coverImage}
                source={{uri: props.item.person_image ? props.item.person_image : null }}/>
            <Text
                numberOfLines={2}
                style={styles.coverLabelTitle}>{`${props.item.productName}`}</Text>
            <Text
                numberOfLines={1}
                style={styles.coverLabelSubTitle}>{props.item.productPrice}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    coverImage: {
        width: scale - 10,
        height: scale - 10
    },
    gridItem: {
        margin:5,
        width: scale - 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverLabelTitle:{
        margin: 5,
        color: '#000000',
        fontSize: 16,
    },
    coverLabelSubTitle:{
        margin: 5,
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        opacity: 1,
    },
});

export default ProductItem;
