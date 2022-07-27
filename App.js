import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import GameMainScreen from "./screens/GameMainScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedScreenNumber, setSelectedScreenNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onError={console.warn}
      />
    );
  }

  function onPickSelectedNumberHandler(pickedNumber) {
    setSelectedScreenNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setSelectedScreenNumber(null);
    setGuessRounds(0);
  }

  let screens = (
    <StartGameScreen onPickedNumber={onPickSelectedNumberHandler} />
  );

  if (selectedScreenNumber) {
    screens = (
      <GameMainScreen
        userNumber={selectedScreenNumber}
        onGameOver={gameOverHandler}
      />
    );
  }

  if (gameIsOver && selectedScreenNumber) {
    screens = (
      <GameOverScreen
        userNumber={selectedScreenNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        style={styles.rootContainer}
        colors={["#ffbd00", "#90e0ef"]}
      >
        <ImageBackground
          source={require("./assets/images/numbers-background.jpg")}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={styles.imageBackground}
        >
          <SafeAreaView style={styles.rootContainer}>{screens}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    // padding: 16,
  },
  imageBackground: {
    opacity: 0.2,
  },
});
