import styles from './styles';
import {ActivityIndicator, View} from 'react-native';
import React from 'react';

const LoadingScreen = () => {
  const {loaderContainerStyle} = styles;
  return (<View style={loaderContainerStyle}>
    <ActivityIndicator size="large" color="#0000ff"/>
  </View>);
};

export default LoadingScreen;
