import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  fabButtonStyle: {
    backgroundColor: '#ba2822',
    width: scale(80),
    height: scale(80),
    borderRadius: scale(50),
    position: 'absolute',
    margin: scale(20),
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
