import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  fabButtonContainerStyle: {
    marginTop: scale(20),
    borderWidth: scale(0.5),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(5),
    paddingHorizontal: scale(50),
    paddingVertical: scale(15),
  },
  textButtonStyle: {
    color: 'white',
  },
});
