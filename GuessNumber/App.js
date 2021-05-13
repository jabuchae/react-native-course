import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { round } from 'react-native-reanimated';

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const rounds = useRef(0);

  const startGameHandler = (number) => {
    setChosenNumber(number);
  }

  const restartGameHandler = () => {
    setChosenNumber();
    setGameOver(false);
    round.current = 0;
  }

  const gameOverHandler = numberOfRounds => {
    setGameOver(true);
    rounds.current = numberOfRounds;
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (chosenNumber) {
    content = <GameScreen chosenNumber={chosenNumber} onGameOver={gameOverHandler}/>;
  }
  
  if (gameOver) {
    content = <GameOverScreen numberOfRounds={rounds.current} chosenNumber={chosenNumber} onRestartGame={restartGameHandler}/>
  }

  return (
    <View style={styles.container}>
      <Header title="Guess a number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
