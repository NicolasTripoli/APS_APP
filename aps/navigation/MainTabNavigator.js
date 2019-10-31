import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Abertos',
  tabBarOptions: {
    inactiveTintColor: '#fff',
    inactiveBackgroundColor : '#299B41',
    activeTintColor : '#fff',
    activeBackgroundColor: '#1D672C',
  },
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Fechados',
  tabBarOptions: {
    inactiveTintColor: '#fff',
    inactiveBackgroundColor : '#299B41',
    activeTintColor : '#fff',
    activeBackgroundColor: '#1D672C',

  },
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Solucionados',
  tabBarOptions: {
    inactiveTintColor: '#fff',
    inactiveBackgroundColor : '#299B41',
    activeTintColor : '#fff',
    activeBackgroundColor: '#1D672C',

  },
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
