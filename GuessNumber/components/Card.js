import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({children, style}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowRadius: 6,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.25,
        
        elevation: 8,

        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    }
});

export default Card;