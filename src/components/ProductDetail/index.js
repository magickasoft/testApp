import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    times
} from 'lodash/fp';
import {
    Card,
    Divider,
    Button
} from 'react-native-elements';
import {
    CircleSnail
} from 'react-native-progress';
import Swiper from 'react-native-swiper';
import Image from 'react-native-image-progress';
import I18n from '../../i18n'

const {
    width,
    height
} = Dimensions.get('window');

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
              <View style={styles.cardActionContainer}>
                  <Text style={styles.cardLabelSubTitle}>
                      {productPrice}
                  </Text>
                  <Button
                      onPress={() => {}}
                      backgroundColor={'red'}
                      iconRight
                      icon={{name: 'plus', type: 'font-awesome'}}
                      title={I18n.t('LABOR')} />
              </View>
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
    cardActionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
