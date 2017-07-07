import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import ProductDetail from '../containers/ProductDetailContainer';
import Home from '../containers/TabsContainer';
import I18n from '../i18n'

export const Root = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: I18n.t('NAV_TITLE'),
            headerBackTitle: null,
        },
    },
    ProductDetails: {
        screen: ProductDetail,
        navigationOptions: ({navigation, screenProps}) => ({
            cardStack: {
                gesturesEnabled: true,
            },
            title: I18n.t('NAV_TITLE'),
        }),
    }
}, {
  // mode: 'card',
  // headerMode: 'none',
});
