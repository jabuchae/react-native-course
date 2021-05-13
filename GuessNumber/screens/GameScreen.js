import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    FlatList,
    Dimensions,
} from 'react-native';
import TitleText from '../components/TitleText';
import ActionButton from '../components/ActionButton';
import NumberContainer from '../components/NumberContainer';

import { Icon } from 'react-native-elements';
import GuessedNumberItem from '../components/GuessedNumberItem';

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}

const GameScreen = props => {
    const initialGuess = generateRandomBetween(1, 100);
    const currentBounds = useRef({min: 1, max: 100})
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guesses, setGuesses] = useState([initialGuess]);

    const guessLower = () => {
        if (props.chosenNumber >= currentGuess) {
            Alert.alert('Don\'t cheat', 'You know your number was not lower than the guess!', [{text: 'Sorry...', style: 'destructive'}]);
            return;
        }
        currentBounds.current.max = currentGuess;
        const newGuess = generateRandomBetween(currentBounds.current.min, currentGuess)
        setCurrentGuess(newGuess);
        setGuesses(pastGuesses => [newGuess, ...pastGuesses]);
    }

    const guessHigher = () => {
        if (props.chosenNumber <= currentGuess) {
            Alert.alert('Don\'t cheat', 'You know your number was not higher than the guess!', [{text: 'Sorry...', style: 'destructive'}]);
            return;
        }
        currentBounds.current.min = currentGuess + 1;
        const newGuess = generateRandomBetween(currentGuess + 1, currentBounds.current.max)
        setCurrentGuess(newGuess);
        setGuesses(pastGuesses => [newGuess, ...pastGuesses]);
    }

    const {chosenNumber, onGameOver} = props;

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver(guesses.length);
        }    
    }, [currentGuess, guesses, chosenNumber, onGameOver]);

    return (
        <View style={styles.screen}>
            <TitleText>Oponent's Guess</TitleText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonCointainer}>
                <ActionButton style={styles.button} onPress={guessLower}><Icon name='arrow-down' type='font-awesome-5'/></ActionButton>
                <ActionButton style={styles.button} onPress={guessHigher}><Icon name='arrow-up' type='font-awesome-5'/></ActionButton>
            </View>
            <FlatList 
                style={styles.guessList}
                data={guesses}
                keyExtractor={g => g.toString()}
                renderItem={element => <GuessedNumberItem number={element.item} guessAttempt={guesses.length - element.index}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        width: '100%',
    },
    buttonCointainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '80%',
    },
    button: {
        width: 100,
    },
    guessList: {
        width: Dimensions.get('window').width > 400 ? '60%' : '30%',
    }
});

export default GameScreen;