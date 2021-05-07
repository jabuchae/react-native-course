import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = ({goal, onDelete}) => {
    return (
        <TouchableOpacity onPress={() => onDelete(goal)}>
            <View style={styles.goal}>
                <Text>{goal.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goal: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: "black",
      borderWidth: 1,
    }
  });

  export default GoalItem;