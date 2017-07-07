import React, { Component } from 'react';
import {
    Text,
    View,
    ListView,
    ScrollView,
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import {
    times
} from 'lodash/fp';
import { Card, Divider, ListItem } from 'react-native-elements';
import Communications from 'react-native-communications';
import Swiper from 'react-native-swiper';
import Image from 'react-native-image-progress';
import { CircleSnail } from 'react-native-progress';

const { width, height } = Dimensions.get('window');

class ProductDetail extends Component {

  render() {
    const { person_image, productName, productPrice} = this.props.navigation.state.params;

    return (
      <ScrollView>
          <Swiper
              style={styles.wrapper}
              showsButtons={false}
              width={width}
              height={width/1.5}
              showsPagination
              autoplay
              loop >
              {
                  times(i => (
                      <Image
                          style={{flex:1, width, height: width/1.5}}
                          key={i}
                          resizeMode={'cover'}
                          source={{uri: person_image}}
                          indicator={CircleSnail}
                      />
                  ), 5)
              }
          </Swiper>
          <Card containerStyle={styles.cardDescription} >
              <Text
                  numberOfLines={1}
                  style={styles.cardLabelTitle}>
                  {productName}
              </Text>
              <View style={styles.cardCostContainer}>
                  <Text style={styles.cardLabelSubTitle}>
                      {productPrice}
                  </Text>
                  <Text style={[styles.cardLabelSubTitle, {color: 'red'}]}>
                      FREE SHIPPING
                  </Text>
              </View>

              <Divider style={styles.cardDivider} />
          </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    scrollView: {
    },
    wrapper: {
    },
    cardCostContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    cardDescription: {
        marginLeft: 0,
        marginRight: 0
    },
    cardLabelTitle:{
        margin: 5,
        marginBottom: 10,
        color: '#000000',
        fontSize: 16,
    },
    cardLabelSubTitle:{
        margin: 5,
        marginBottom: 10,
        color: '#000000',
        fontSize: 16,
        fontWeight: '700'
    },
    cardDivider: {
        backgroundColor: 'grey'
    }
});
export default ProductDetail;
