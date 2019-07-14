import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  loginContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  loginSubContainerStyle: {
    padding: scale(75),
  },
  welcomeTextStyle: {
    fontSize: scale(30),
    marginBottom: scale(40),
  },
});
