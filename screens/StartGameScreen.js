import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  // useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButton from "../components/ui/PrimatButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  // const { width, height } = useWindowDimensions();
  function enteredNumberHandler(eneteredText) {
    setEnteredNumber(eneteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function onPressHandler() {
    const typedNumber = parseInt(enteredNumber);

    if (isNaN(typedNumber) || typedNumber <= 0 || typedNumber > 99) {
      Alert.alert("Invalid Number !", "Number should be in between 1 and 99", [
        { text: "Okay", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickedNumber(typedNumber);
  }

  // const marginToplength = height < 500 ? 10 : 24;
  return (
    // <View style={(styles.rootContainer, { marginTop: marginToplength })}>
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <View style={styles.heading}>
            <Title>Guess My Number</Title>
          </View>
          <Card>
            <InstructionText>Enter your number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={enteredNumberHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonOuterContainer}>
              <View style={styles.buttonInnerContainer}>
                <PrimaryButton
                  style={styles.buttonText}
                  onPress={resetInputHandler}
                >
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonInnerContainer}>
                <PrimaryButton
                  style={styles.buttonText}
                  onPress={onPressHandler}
                >
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 24,
    alignItems: "center",
  },
  heading: {
    marginTop: 30,
  },

  numberInput: {
    borderBottomColor: "#ADE8F4",
    borderBottomWidth: 3,
    padding: 3,
    marginBottom: 20,
    width: 50,
    color: "#ADE8F4",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonOuterContainer: {
    flexDirection: "row",
  },
  buttonInnerContainer: {
    flex: 1,
  },
});
