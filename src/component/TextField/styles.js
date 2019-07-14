import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    marginBottom: scale(15),
  },
  labelStyle: {
    fontSize: scale(18),
  },
  inputStyle: {
    color: '#000',
    paddingRight: scale(5),
    paddingLeft: scale(5),
    fontSize: scale(15),
    lineHeight: scale(23),
    width: '100%',
  },
  textInputContainerStyle: {
    height: scale(40),
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderColor: '#ddd',
  },
});
