import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    Dimensions,
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

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        selectedTab: 'home',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }
  changeTab (selectedTab) {
    this.setState({selectedTab})
  }
  onButtonPress () {
  }
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

                        <Card
                        >
                        <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                        </Text>

                        </Card>

                        <View style={styles.viewBotton}>
                        <Button
                        onPress={() => {
                        navigation.navigate('Feed', {});
                        }}
                        backgroundColor={'#397af8'}
                        raised
                        iconRight
                        icon={{name: 'user', type: 'font-awesome'}}
                        title={I18n.t('CONTACT_PERSON')} />
                        </View>
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
    panelTop_innerUserImage: {
        height:70,
        width:70,
        borderRadius: 35,
        marginRight: 10,
    },
    containerPanelTop_innerDetail: {
        flex: 1,
        marginLeft: 10,
        flexDirection: 'column',
        justifyContent:'center',
    },
    panelTop_LabelTitle:{
        color: '#000000',
        fontSize: 18,
    },
    panelTop_LabelSubTitle:{
        color: '#000000',
        fontSize: 14,
        opacity: 0.8,
    },
});

export default Home;
