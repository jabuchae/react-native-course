import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Icon }  from 'react-native-elements';

import Colors from '../../constants/Colors';

const FontAwesomeIcon = iconProps => props => {
    return (
        <Icon style={{marginHorizontal:10}}
            name={props.name}
            type='font-awesome-5'
            color={props.color}
            {...iconProps}
        />
    );
}


const CustomHeaderButton = props => {
    return (
        <HeaderButton 
            {...props} 
            IconComponent={FontAwesomeIcon(props.iconProps)}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : Colors.primary}
        />
    );
};

export default CustomHeaderButton;
