import React from 'react';
import strings from '__strings';
import {storiesOf} from '@storybook/react-native';
import Button from '__component/Button';
import IconButton from '__component/IconButton';
import TextField from '__component/TextField';

storiesOf('Button', module)
  .add('Login', () => (
    <Button
      buttonText={strings.auth.login}
      onPress={() => alert(strings.auth.login)}
    />
  ))
  .add('retry', () => (
    <Button
      buttonText={strings.auth.retry}
      onPress={() => alert(strings.auth.retry)}
    />
  ));

storiesOf('IconButton', module)
  .add('Phone Call', () => (
    <IconButton
      iconName='phone'
      iconColor='white'
      iconSize={30}
      position='right'
      fabButtonColor='black'
      onPress={() => alert('Phone Call')}
    />
  ))
  .add('retry', () => (
    <IconButton
      iconName='sign-out'
      iconColor='white'
      iconSize={30}
      position='left'
      fabButtonColor='#ba2822'
      onPress={() => alert('Log out')}
    />
  ));

storiesOf('TextField', module)
  .add('Username', () => (
    <TextField
      placeholder={strings.auth.username}
      value={'Oussama'}
      onChangeText={(username) => alert(username)}/>

  ))
  .add('Password', () => (
    <TextField
      placeholder={strings.auth.password}
      secureTextEntry
      value={'PassWord'}
      onChangeText={(password) => alert(password)}/>

  ));

