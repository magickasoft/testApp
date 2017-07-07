import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    ListView
} from 'react-native';
import {
    SearchBar,
    Divider
} from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2 : width / 2 ;

import { users } from '../../config/users';

class HomeTab extends Component {
    constructor(props, context) {
        super(props, context);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(users),
        };
    }
    onLearnDetail = (user) => {
        const { navigation } = this.props;

        navigation.navigate('ProductDetails', { ...user });
    };
    render() {

        return (
            <ScrollView>
                <SearchBar
                    round
                    lightTheme
                    onChangeText={() => {}}
                    placeholder='search' />
                <Text h3 style={{ marginLeft: 10, marginTop: 10,marginBottom: 10 }}>Featured Products</Text>
                <Divider style={{ backgroundColor: 'grey' }} />

                <ListView contentContainerStyle={styles.grid}
                          dataSource={this.state.dataSource}
                          renderRow={(item) => (
                              <TouchableOpacity
                                  onPress={() => this.onLearnDetail(item)}
                                  style={styles.gridItem}>
                                  <Image
                                      resizeMode={'cover'}
                                      style={styles.coverImage}
                                      source={{uri: item.person_image ? item.person_image : null }}/>
                                  <Text
                                      numberOfLines={2}
                                      style={styles.coverLabelTitle}>{`${item.productName}`}</Text>
                                  <Text
                                      numberOfLines={1}
                                      style={styles.coverLabelSubTitle}>{item.productPrice}</Text>
                              </TouchableOpacity>
                          )}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    coverImage: {
        width: scale - 10,
        height: scale - 10
    },
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center'
    },
    gridItem: {
        margin:5,
        width: scale - 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        margin: 0
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

export default HomeTab;
