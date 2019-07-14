import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default Button = ({onPress, buttonText}) => {
  const {fabButtonContainerStyle, textButtonStyle} = styles;
  return (
    <TouchableOpacity onPress={() => onPress()} style={fabButtonContainerStyle}>
      <Text style={textButtonStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
