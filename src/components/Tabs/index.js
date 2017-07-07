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
    Card,
    Divider,
    Tabs,
    Tab,
    Icon
} from 'react-native-elements';

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2 : width / 2 ;

import { users } from '../../config/users';

class Tabs extends Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        selectedTab: 'home',
        dataSource: ds.cloneWithRows(users),
    };
  }
  changeTab = (selectedTab) => {
    this.setState({selectedTab})
  };
  onLearnMore = (user) => {
    this.props.navigation.navigate('ProductDetails', { ...user });
  };
  render() {

    const { navigation } = this.props;
    const { selectedTab } = this.state;

    return (
            <Tabs>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'home'}
                    title={selectedTab === 'home' ? 'Store Home' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='home' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
                    onPress={() => this.changeTab('home')}>
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
                                          onPress={() => this.onLearnMore(item)}
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
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'browse'}
                    title={selectedTab === 'browse' ? 'Browse' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='list' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='list' size={30} />}
                    onPress={() => this.changeTab('browse')}>
                    <View>
                        <Text>browse</Text>
                    </View>
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'cart'}
                    title={selectedTab === 'cart' ? 'Card' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='shopping-cart' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='shopping-cart' size={30} />}
                    onPress={() => this.changeTab('cart')}>
                    <View>
                        <Text>cart</Text>
                    </View>
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'account'}
                    title={selectedTab === 'account' ? 'Account' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('account')}>
                    <View>
                        <Text>account</Text>
                    </View>
                </Tab>
            </Tabs>
    );
  }
}

const styles = StyleSheet.create({
    coverImage: {
        width: scale - 10,
        height: scale - 10,
        borderRadius: 10
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

export default Tabs;
