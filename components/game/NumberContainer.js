import { View, Text, StyleSheet, Dimensions } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.childrenContainer}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderColor: "#023E8A",
    padding: deviceWidth < 380 ? 14 : 16,
    marginTop: deviceWidth < 380 ? 15 : 20,
    marginHorizontal: 20,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  childrenContainer: {
    fontSize: 28,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    color: "#023E8A",
  },
});
