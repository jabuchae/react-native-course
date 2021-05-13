import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const ActionButton = (props) => {
    const isMain = props.main !== undefined ? props.main : true;
    const styles = StyleSheet.create({
        button: {
            backgroundColor: isMain ? Colors.main : Colors.secondary,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15,
            paddingVertical: 10,
        },
        text: {
            color: 'white',
            fontFamily: Fonts.bold,
            fontSize: 15,
        }
    });

    return (
        <TouchableOpacity {...props} style={{...styles.button, ...props.style}}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
    );
}

export default ActionButton;