import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "black",
    padding: 12,
    borderColor: "black",
    borderWidth: 3,
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    // borderWidth: Platform.select({ ios: 2, android: 0 }),
    fontSize: 25,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    textAlign: "center",
    maxWidth: "80%",
  },
});
