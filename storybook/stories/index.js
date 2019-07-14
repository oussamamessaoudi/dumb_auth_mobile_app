import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';


storiesOf('Test', module)
  .add('Test1', () => (
    <Text>Test 1</Text>
  ))
  .add('Test2', () => (
    <Text>Test 2</Text>
  ));
