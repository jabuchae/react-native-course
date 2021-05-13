import React from 'react';
import { StyleSheet } from 'react-native';
import BodyText from './BodyText';

const ErrorMessage = ({children}) => {
    return (
        <BodyText style={styles.text}>{children}</BodyText>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
    }
});

export default ErrorMessage;
