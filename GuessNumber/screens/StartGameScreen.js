import React, { useState } from 'react';
import { 
    View,
    StyleSheet, 
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
 } from 'react-native';
import ActionButton from '../components/ActionButton';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {
    const [enteredText, setEnteredText] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [chosenNumber, setChosenNumber] = useState();

    const handleTextChange = newText => {
        setEnteredText(newText.replace(/[^0-9]/g, ''));
    }

    const handleScreenPress = () => {
        Keyboard.dismiss();
    }

    const resetInputHandler = () => {
        setEnteredText('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const inputNumber = parseInt(enteredText);
        if ( isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
            Alert.alert('Invalid Number!', 'You must enter a number between 1 and 99.', [{text: 'OK', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setChosenNumber(inputNumber);
        setConfirmed(true);
        setEnteredText('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if ( confirmed ) {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>{chosenNumber}</NumberContainer>
            <ActionButton onPress={() => props.onStartGame(chosenNumber)}>START GAME</ActionButton>
        </Card>
        
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={handleScreenPress}>
                <View style={styles.screen}>
                    <TitleText style={styles.title}>Start a new game!</TitleText>
                    <KeyboardAvoidingView contentContainerStyle={styles.cardContainer} behavior="position" keyboardVerticalOffset={100}>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a number</BodyText>
                            <Input 
                                onChangeText={handleTextChange} 
                                style={styles.input} 
                                blurOnSubmit 
                                autoCapitalize='none' 
                                keyboardType='numeric' 
                                maxLength={2}
                                autoCorrect={false}
                                value={enteredText}
                            />
                            <View style={styles.buttonContainer}>
                                <ActionButton main={false} style={styles.button} onPress={resetInputHandler}>Reset</ActionButton>
                                <ActionButton style={styles.button} onPress={confirmInputHandler}>Choose</ActionButton>
                            </View>
                        </Card>
                    </KeyboardAvoidingView>
                    {confirmedOutput}
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    title: {
        marginVertical: 10,
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    button: {
        width: '40%',
    },
    input: {
        width: '15%',
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
    }
});

export default StartGameScreen;
