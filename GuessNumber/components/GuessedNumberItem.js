import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Fonts from '../constants/Fonts';
import BodyText from './BodyText';

const GuessedNumberItem = props => {
    return (
        <View style={{...styles.container, ...props.style}}>
            <BodyText><Text style={styles.boldText}>Guess #{props.guessAttempt}</Text>: {props.number}</BodyText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
    },
    boldText: {
        fontFamily: Fonts.bold
    }
});

export default GuessedNumberItem;