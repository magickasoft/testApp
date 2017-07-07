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
import { Card, List, ListItem } from 'react-native-elements';
import Communications from 'react-native-communications';
import Swiper from 'react-native-swiper';
import Image from 'react-native-image-progress';
import { CircleSnail } from 'react-native-progress';

const { width, height } = Dimensions.get('window');

class ProductDetail extends Component {

  render() {
    const { person_image, name, subTitle, phone, email, skype } = this.props.navigation.state.params;

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
          <Card containerStyle={{marginLeft: 0 , marginRight: 0}} >
              <Text style={{marginBottom: 10}}>
                  {`${phone.toUpperCase()}`}
              </Text>
              <Text style={{marginBottom: 10}}>
                  {`${phone}, ${phone} ${phone}`}
              </Text>
          </Card>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    scrollView: {
    },
    wrapper: {
    }
});
export default ProductDetail;
