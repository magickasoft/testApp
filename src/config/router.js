import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import UserDetail from '../containers/UserDetailContainer';
import Home from '../containers/HomeContainer';

import I18n from '../i18n/index'

export const Root = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'splash store',
            headerBackTitle: null,
        },
    },
    Details: {
        screen: UserDetail,
        navigationOptions: ({navigation, screenProps}) => ({
            cardStack: {
                gesturesEnabled: true,
            },
            title: 'splash store',
        }),
    }
}, {
  //mode: 'card',
  //headerMode: 'none',
});
