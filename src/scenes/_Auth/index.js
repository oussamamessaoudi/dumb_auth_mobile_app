import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import TextField from '__component/TextField';
import Button from '__component/Button';
import strings from '__strings';
import styles from './styles';

const Auth = ({navigation}) => {
  const {loginContainerStyle, loginSubContainerStyle, welcomeTextStyle} = styles;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secondAuth, setSecondAuth] = useState(true);

  const onPressLogin = () => {
    if (username === '') {
      if (password === '') {
        alert(strings.auth.emptyUsernamePassword);
      } else {
        alert(strings.auth.emptyUsername);
      }
    } else if (password === '') {
      alert(strings.auth.emptyPassword);
    } else {
      navigation.navigate('home', {username});
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('username').then(
      (username) => {
        if (username) {
          navigation.navigate('home', {username});
          setSecondAuth(true);
        } else {
          setSecondAuth(false);
        }
      },
    ).catch(() => setSecondAuth(false));
  }, []);

  if (secondAuth) {
    return null;
  }
  debugger;
  return (<View style={loginContainerStyle}>
    <StatusBar translucent/>
    <View style={loginSubContainerStyle}>
      <Text style={welcomeTextStyle}>{strings.auth.welcome}</Text>
      <TextField placeholder={strings.auth.username} value={username}
                 onChangeText={setUsername}/>
      <TextField placeholder={strings.auth.password} secureTextEntry
                 value={password} onChangeText={setPassword}/>
      <Button
        buttonText={strings.auth.login}
        onPress={onPressLogin}
      />
    </View>

  </View>);
};

export default Auth;
