import React, {useEffect, useState} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {RANDOM_USER_API_URL} from 'dumb_auth_mobile_app/config';
import ErrorScreen from './ErrorView';
import LoadingScreen from './LoadingView';
import SuccessScreen from './SuccessView';
import apiCallGet from '__api';


const Home = ({navigation}) => {
  const [user, setUser] = useState({});
  const [stateApi, setStateApi] = useState('loading');
  const username = navigation.getParam('username');
  const disconnect = () => {
    AsyncStorage.removeItem('username', () => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'login'})],
      });
      navigation.dispatch(resetAction);
    });
  };
  const onRetry = () => {
    apiCall();
  };
  const apiCall = () => {
    apiCallGet(RANDOM_USER_API_URL, response => {
      setUser(response.data.results[0]);
      setStateApi('success');
      AsyncStorage.setItem('username', username);
    }, () => {
      setStateApi('error');
    });
  };
  useEffect(apiCall, []);
  switch (stateApi) {
    case 'error':
      return <ErrorScreen onRetry={onRetry}/>;
    case 'loading' :
      return <LoadingScreen/>;
    case 'success' :

      return <SuccessScreen user={user} disconnect={disconnect}
                            username={username}/>;
    default :
      return null;
  }
};

export default Home;
