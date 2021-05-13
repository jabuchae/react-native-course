import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Fonts from '../constants/Fonts';

const TitleText = props => {
    return (
        <Text {...props} style={{...styles.text, ...props.style}} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Fonts.bold,
        fontSize: 18,
    }
});

export default TitleText;