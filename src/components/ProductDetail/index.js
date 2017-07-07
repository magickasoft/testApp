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
import { Tile, List, ListItem } from 'react-native-elements';
import Communications from 'react-native-communications';
import GiftedSpinner from 'react-native-gifted-spinner';

const { width, height } = Dimensions.get('window');

class ProductDetail extends Component {

  render() {
    const { person_image, name, subTitle, phone, email, skype } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
            imageSrc={{uri: person_image}}
            featured
            title={`${name.first} ${name.last}`}
            titleStyle={{width, position:'absolute', bottom: (Platform.OS === 'ios') ? 22 : 24, paddingTop: 5, color: '#000', backgroundColor: 'rgba(255,255,255,.5)'}}
            caption={subTitle}
            captionStyle={{width, position:'absolute', bottom: 0,paddingBottom: 5, color: '#000', backgroundColor: 'rgba(255,255,255,.5)'}}
        >
        </Tile>
        <List>
            {
                phone ?
                    <ListItem
                        title="Phone"
                        leftIcon={{name: 'phone', type: 'font-awesome', color: '#00897b', size: 20}}
                        rightTitle={phone}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                        onPress={() => {
                            Communications.phonecall(phone, true);
                        }}
                    />
                    : null
            }
            {
                email ?
                    <ListItem
                        title="Email"
                        leftIcon={{name: 'envelope', type: 'font-awesome', color: '#00897b', size: 16}}
                        rightTitle={email}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                        onPress={() => {
                            Communications.email([email],null,null,'','')
                        }}
                    />
                    : null
            }
            {
                skype ?
                    <ListItem
                        title="Skype"
                        leftIcon={{name: 'skype', type: 'font-awesome', color: '#00897b', size: 18}}
                        rightTitle={skype}
                        rightTitleStyle={{color: '#000'}}
                        hideChevron
                        onPress={() => {
                            Communications.phonecall(skype, true);
                        }}
                    />
                    : null
            }
        </List>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    scrollView: {
    }
});
export default ProductDetail;
