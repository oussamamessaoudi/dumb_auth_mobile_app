import {configure, getStorybookUI} from '@storybook/react-native';


// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const Storybook = getStorybookUI({});

export default Storybook;
