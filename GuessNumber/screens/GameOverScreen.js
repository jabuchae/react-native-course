import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions } from 'react-native';
import ActionButton from '../components/ActionButton';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import TitleText from '../components/TitleText';


const GameOverScreen = props => {
    return (
        <ScrollView contentContainerStyle={styles.gameOver}>
            <TitleText>Your number is</TitleText>
            <NumberContainer>{props.chosenNumber}</NumberContainer>
            <BodyText>Your number was guessed in <Text style={styles.highlight}>{props.numberOfRounds} rounds</Text>!</BodyText>
            <View style={styles.imageContainer}>
                <Image 
                    resizeMode='cover'
                    style={styles.image}
                    source={require('../assets/images/success.png')}
                />
            </View>
            <ActionButton style={styles.button} onPress={props.onRestartGame}>Start Over</ActionButton>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    gameOver: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        marginTop: 20,
        marginBottom: 50,
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 2  ,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: 40,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    highlight: {
        color: Colors.main,
        fontFamily: Fonts.bold,
    }
});

export default GameOverScreen;