import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

export const RegularText = props => {
    return <Text {...props} style={{...styles.regularText, ...props.style}}>{props.children}</Text>
};

export const BoldText = props => {
    return <Text {...props} style={{...styles.boldText, ...props.style}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    regularText: {
        fontFamily: Fonts.regular
    },
    boldText: {
        fontFamily: Fonts.bold
    }
});
