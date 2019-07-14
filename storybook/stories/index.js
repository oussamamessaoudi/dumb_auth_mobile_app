import React from 'react';
import strings from '__strings';
import {storiesOf} from '@storybook/react-native';
import Button from '__component/Button';

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
