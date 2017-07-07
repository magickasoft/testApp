import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    ListView
} from 'react-native';
import {
    SearchBar,
    Divider
} from 'react-native-elements';
import ProductItem from '../ListItem/ProductItem';

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
                              <ProductItem
                                  item={item}
                                  onPress={() => this.onLearnDetail(item)}/>
                          )}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center'
    }
});

export default HomeTab;
