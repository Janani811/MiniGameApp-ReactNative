import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimatButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomNumber(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
}
let minValue = 1;
let maxValue = 100;

function GameMainScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minValue = 1;
    maxValue = 100;
  }, []);

  function nextGuessHandler(nextGuessDirection) {
    let newRandomNumber;
    if (
      (nextGuessDirection === "lower" && currentGuess < userNumber) ||
      (nextGuessDirection === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know the number is wrong...", [
        { text: "Sorry!", style: "destructive" },
      ]);
      return;
    }
    if (nextGuessDirection === "lower") {
      maxValue = currentGuess;
    } else {
      minValue = currentGuess + 1;
    }
    newRandomNumber = generateRandomNumber(minValue, maxValue, currentGuess);
    setCurrentGuess(newRandomNumber);
    setGuessRounds((previousRounds) => [newRandomNumber, ...previousRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.gameMainScreenContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonOuterContainer}>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonInnerContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.itemListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameMainScreen;

const styles = StyleSheet.create({
  gameMainScreenContainer: {
    flex: 1,
    // justifyContent: "center",
    padding: 30,
    alignItems: "center",
  },
  buttonOuterContainer: {
    flexDirection: "row",
  },
  buttonInnerContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 24,
  },
  itemListContainer: {
    flex: 1,
  },
});
