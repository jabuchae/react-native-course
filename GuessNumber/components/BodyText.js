import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

const BodyText = props => {
    return (
        <Text {...props} style={{...styles.text, ...props.style}} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.regular,
        fontSize: 16,
    }
});

export default BodyText;