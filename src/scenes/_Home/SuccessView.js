import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
import Communications from 'react-native-communications';
import IconButton from '__component/IconButton';
import strings from '__strings';
import styles from './styles';


const SuccessScreen = ({user, disconnect, username}) => {
  const {
    line, imageContainerStyle, informationsContainerStyle, welcomingTextStyle, homeContainerStyle, nameStyle,
    phoneStyle, emailStyle,
  } = styles;
  return (<View style={homeContainerStyle}>
    <StatusBar translucent/>

    <Text
      style={welcomingTextStyle}> {strings.home.hello} {username} </Text>
    <View style={line}/>

    <Image style={imageContainerStyle} source={{uri: user.picture.medium}}/>

    <View style={informationsContainerStyle}>
      <Text
        style={nameStyle}>{user.name.title + ' ' + user.name.first + ' ' + user.name.last}</Text>
      <Text style={phoneStyle}>{user.phone}</Text>
      <Text style={emailStyle}>{user.email}</Text>
    </View>

    <IconButton
      iconName='phone'
      iconColor='white'
      iconSize={30}
      position='right'
      fabButtonColor='black'
      onPress={() => Communications.phonecall(user.phone, true)}
    />
    <IconButton
      iconName='sign-out'
      iconColor='white'
      iconSize={30}
      position='left'
      fabButtonColor='#ba2822'
      onPress={disconnect}
    />
  </View>);
};

export default SuccessScreen;
