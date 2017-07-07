import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Tabs,
    Tab,
    Icon
} from 'react-native-elements';
import HomeTab from './HomeTab';
import DefaultTab from './DefaultTab';

class AppTabs extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        selectedTab: 'home'
    };
  }
  changeTab = (selectedTab) => {
    this.setState({selectedTab})
  };
  render() {
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
                    <HomeTab {...this.props} />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'browse'}
                    title={selectedTab === 'browse' ? 'Browse' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='list' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='list' size={30} />}
                    onPress={() => this.changeTab('browse')}>
                    <DefaultTab text={'browse'} />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'cart'}
                    title={selectedTab === 'cart' ? 'Card' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='shopping-cart' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='shopping-cart' size={30} />}
                    onPress={() => this.changeTab('cart')}>
                    <DefaultTab text={'cart'} />
                </Tab>
                <Tab
                    titleStyle={{fontWeight: 'bold', fontSize: 10}}
                    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
                    selected={selectedTab === 'account'}
                    title={selectedTab === 'account' ? 'Account' : null}
                    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
                    onPress={() => this.changeTab('account')}>
                    <DefaultTab text={'account'} />
                </Tab>
            </Tabs>
    );
  }
}

export default AppTabs;
