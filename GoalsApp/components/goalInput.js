import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = ({onAddGoal, visible, close}) => {
    const [inputText, setInputText] = useState('');

    const goalInputHandler = (text) => {
        setInputText(text)
    }
      
    const onPressHandler = () => {
        if (inputText === '') { 
            return;
        }
        onAddGoal.bind(this, inputText)();
        setInputText('');
        close();
    }

    const closeHandler = () => {
        setInputText('');
        close();
    }

    return (
        <Modal visible={visible} animationType="slide">            
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} onChangeText={goalInputHandler}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={closeHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={onPressHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    textInput: {
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
      width: "80%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
    },
    button: {
        width: "40%",
        backgroundColor: "#EFEFEF",
        borderRadius: 20,
        marginVertical: 10,
    }
  });

export default GoalInput;