import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const TextField = ({placeholder, value, onChangeText, secureTextEntry}) => {
  const {containerStyle, labelStyle, inputStyle, textInputContainerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{placeholder}</Text>
      <View style={textInputContainerStyle}>
        <TextInput
          style={inputStyle}
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};
export default TextField;
