import React from 'react';
import {TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const IconButton = ({iconName, iconColor, iconSize, position, fabButtonColor, onPress}) => {
  const {fabButtonStyle} = styles;
  return (
    <TouchableOpacity onPress={() => onPress()}
                      style={[fabButtonStyle, {backgroundColor: fabButtonColor}, position === 'left' ? {left: 0} : {right: 0}]}>
      <Feather name={iconName} color={iconColor} size={iconSize}/>
    </TouchableOpacity>
  );
};

export default IconButton;
