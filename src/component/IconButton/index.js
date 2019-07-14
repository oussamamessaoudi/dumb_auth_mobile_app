import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

const IconButton = ({iconName, iconColor, iconSize, position, fabButtonColor, onPress}) => {
  const {fabButtonStyle} = styles;
  return (
    <TouchableOpacity onPress={() => onPress()}
                      style={[fabButtonStyle,
                        {backgroundColor: fabButtonColor},
                        position === 'left' ? {left: 0} : {right: 0},
                      ]}>

      <Icon
        name={iconName} color={iconColor} size={iconSize}
        type='font-awesome'/>

    </TouchableOpacity>
  );
};

export default IconButton;
