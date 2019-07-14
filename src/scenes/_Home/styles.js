import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  homeContainerStyle: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(16),
  },
  welcomingTextStyle: {
    fontSize: scale(22),
  },
  errorMessageStyle: {
    fontSize: scale(22),
  },
  line: {
    width: scale(50),
    borderBottomWidth: scale(1),
    borderColor: 'grey',
    marginTop: scale(20),
  },
  imageContainerStyle: {
    height: scale(130),
    width: scale(130),
    borderRadius: scale(65),
    marginTop: scale(30),
  },
  informationsContainerStyle: {
    marginTop: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: scale(15),
    color: 'black',
  },
  phoneStyle: {
    fontSize: scale(13),
    color: 'black',
  },
  emailStyle: {
    fontSize: scale(11),
    color: 'grey',
  },
  loaderContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
