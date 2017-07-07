import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import FeedUsers from '../containers/FeedUsersContainer';
import UserDetail from '../containers/UserDetailContainer';
import Home from '../containers/HomeContainer';
import CameraRollPicker from '../containers/CameraRollPickerContainer';
import CameraPicker from '../containers/CameraContainer';

import I18n from '../i18n/index'

export const FeedStack = StackNavigator({
  Feed: {
    screen: FeedUsers,
    navigationOptions: {
      title: I18n.t('LABOR'),
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
  },
}, {
    mode: 'modal',
    headerMode: 'none',
});

export const Root = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'splash store',
            headerBackTitle: null,
        },
    },
    CameraRoll: {
        screen: CameraRollPicker,
        navigationOptions: {
            title: I18n.t('TAKE_PHOTO'),
        },
    },
    Camera: {
        screen: CameraPicker,
        navigationOptions: {
            title: I18n.t('TAKE_PHOTO'),
        },
    },
    Feed: {
        screen: FeedStack,
    },

}, {
  //mode: 'card',
  //headerMode: 'none',
});
