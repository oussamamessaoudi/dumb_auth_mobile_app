import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, buttonText}) => {
  const {fabButtonContainerStyle, textButtonStyle} = styles;
  return (
    <TouchableOpacity onPress={() => onPress()} style={fabButtonContainerStyle}>
      <Text style={textButtonStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
export default Button;
