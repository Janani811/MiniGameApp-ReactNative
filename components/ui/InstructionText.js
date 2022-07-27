import { View, Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.question, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  question: {
    color: "#ADE8F4",
    fontSize: 28,
    // fontWeight: "bold",
    fontFamily: "open-sans",
    textAlign: "center",
    maxWidth: "80%",
    minWidth: "50%",
  },
});
