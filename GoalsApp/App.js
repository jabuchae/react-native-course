import React, { useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [goalInputShowing, setGoalInputShowing] = useState(false);

  const addGoalHandler = (newGoalText) => {
    setGoals(goals => [...goals, {key: Math.random().toString(), value: newGoalText}]);
  }

  const deleteGoalHandler = (goal) => {
    setGoals(goals => {
      return goals.filter(g => g.key != goal.key);
    })
  }

  const toggleGoalInput = () => {
    setGoalInputShowing(goalInputShowing => !goalInputShowing);
  }

  const closeModal = () => {
    setGoalInputShowing(false);
  }

  return (
    <View style={styles.containerStyle}>
      <Button title="Add new goal" onPress={toggleGoalInput}/>
      <GoalInput visible={goalInputShowing} onAddGoal={addGoalHandler} close={closeModal}/>
      <FlatList 
        data={goals}
        renderItem={itemData =>
          <GoalItem goal={itemData.item} onDelete={deleteGoalHandler}/>
        }/>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    padding: 50,
  },
});

export default App;
