/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {IS_STORYBOOK} from './config';
import Storybook from './storybook';

console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => IS_STORYBOOK ? Storybook : App);
