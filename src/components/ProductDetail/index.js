import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Dimensions,
    TextInput
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
    width
} = Dimensions.get('window');

class ProductDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            productCount: 1,
        };
    }
    onChanged = (text) => {
        this.setState({ productCount: text });
        text.length < 1 || isNaN(text) && this.setState({ productCount: 0 })
   };
  render() {
    const { person_image, productName, productPrice} = this.props.navigation.state.params;
    const { productCount } = this.state;

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
              <View style={styles.cardRowContainer}>
                  <Text style={styles.cardLabelSubTitle}>
                      {productPrice}
                  </Text>
                  <Text style={[styles.cardLabelSubTitle, {color: 'red'}]}>
                      {'Free shipping'.toUpperCase()}
                  </Text>
              </View>

              <Divider style={styles.cardDivider} />
              <View style={styles.cardActionContainer}>
                  <View style={styles.cardRowContainer}>
                      <TextInput
                          style={[styles.actionButton,{width: 40, height: 47, textAlign: 'center'}]}
                          keyboardType={'numeric'}
                          autoCapitalize={'none'}
                          autoCorrect={false}
                          maxLength = {2}
                          onChangeText={(value) => this.onChanged(parseInt(value))}
                          onChange={(value) => this.onChanged(parseInt(value))}
                          value={productCount.toString()}
                          defaultValue={productCount.toString()}
                      />
                      <Button
                          onPress={() => {
                              Math.sign(productCount) ? this.setState({ productCount: Math.abs(productCount) - 1 }) : null
                              }}
                          title={'-'}
                          buttonStyle={styles.actionButton}
                          textStyle={styles.actionButtonText}
                          backgroundColor={'grey'} />
                      <Button
                          onPress={() => { productCount < 99 ? this.setState({ productCount: productCount + 1 }) : null}}
                          title={'+'}
                          buttonStyle={styles.actionButton}
                          textStyle={styles.actionButtonText}
                          backgroundColor={'grey'} />
                  </View>

                  <Button
                      onPress={() => {}}
                      backgroundColor={'red'}
                      title={I18n.t('ADD_TO_CARD').toUpperCase()} />
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
    actionButton: {
        marginRight: 1,
        marginLeft: 1,
        borderWidth: 1,

    },
    actionButtonText: {
        margin: 0,
        fontSize: 18,
        fontWeight: '600',
    },
    cardActionContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardRowContainer: {
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
