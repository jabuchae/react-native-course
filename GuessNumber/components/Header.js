import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const Header = ({title}) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 90,
        width: "100%",
        paddingTop: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.main,
    },
    headerTitle: {
        color: 'black',
        fontFamily: Fonts.regular,
        fontSize: 18
    }
});

export default Header;