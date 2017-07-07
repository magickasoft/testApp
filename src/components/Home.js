import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
    FlatList,
    ListView
} from 'react-native';
import {
    Button,
    SearchBar,
    Card,
    Divider,
    Tabs,
    Tab,
    Icon
} from 'react-native-elements';
import I18n from '../i18n/index'

const { width, height } = Dimensions.get('window');
const scale = width > height ? height / 2 : width / 2 ;

import { users } from '../config/users';

class Home extends Component {
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
                                              style={styles.panelTop_innerUserImage}
                                              source={{uri: item.person_image ? item.person_image : null }}/>
                                          <Text
                                              numberOfLines={2}
                                              style={styles.panelTop_LabelTitle}>{`${item.productName}`}</Text>
                                          <Text
                                              numberOfLines={1}
                                              style={styles.panelTop_LabelSubTitle}>{item.productPrice}</Text>
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
    panelTop_innerUserImage: {
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
    gridItemText: {
        marginTop: 5,
        textAlign:'center',
    },
    iconView: {
        width: scale/3,
        height: scale/3,
        position: 'absolute',
        bottom: -(scale/3/3)+(scale/3/3),
        backgroundColor:'blue',
        borderRadius:scale/6,
        borderWidth: 6,
        borderColor: 'white',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center'
    },
    viewImage: {
      marginTop: 15,
      paddingBottom: (scale/3/3),
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center'
    },
    viewBotton:{
      marginTop: 15,
    },
    switch: {
        marginLeft: 10,
        marginRight: 5,
    },
    scrollView: {
        margin: 0
    },
    containerPanelTop_inner: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    containerPanelTop_innerDetail: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent:'center',
    },
    panelTop_LabelTitle:{
        margin: 5,
        color: '#000000',
        fontSize: 16,
    },
    panelTop_LabelSubTitle:{
        margin: 5,
        color: '#000000',
        fontSize: 16,
        fontWeight: '700',
        opacity: 1,
    },
});

export default Home;
