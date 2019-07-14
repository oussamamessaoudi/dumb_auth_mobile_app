import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Button from '__component/Button';
import strings from '__strings';
import styles from './styles';

const ErrorScreen = ({onRetry}) => {
  const {errorMessageStyle, homeContainerStyle} = styles;
  return (<View style={homeContainerStyle}>
    <StatusBar translucent/>
    <Text style={errorMessageStyle}>{strings.home.problem}</Text>
    <Button
      buttonText={strings.auth.retry}
      onPress={onRetry}/>
  </View>);
};
export default ErrorScreen;
