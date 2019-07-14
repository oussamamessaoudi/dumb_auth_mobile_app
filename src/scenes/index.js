import React from 'react';
import {createStackNavigator} from 'react-navigation';
import auth from './_Auth';
import home from './_Home';

const TopLevelNavigator = createStackNavigator(
  {
    login: {
      screen: auth,
      navigationOptions: {header: null},
    },
    home: {
      screen: home,
      navigationOptions: {header: null},
    },
  },
  {
    initialRouteName: 'login',
    mode: 'modal',
    cardStyle: {backgroundColor: 'white'},
  },
);

const Routes = () => {
  return (
    <TopLevelNavigator/>
  );
};

export default Routes;
