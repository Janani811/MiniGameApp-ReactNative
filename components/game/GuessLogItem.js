import { View, Text, StyleSheet } from "react-native";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.container}>
      <Text style={styles.childrenContainer}>#{roundNumber}</Text>
      <Text style={styles.childrenContainer}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const styles = StyleSheet.create({
  container: {
    borderColor: "#023E8A",
    padding: 10,
    borderWidth: 3,
    borderRadius: 50,
    backgroundColor: "#d9ed92",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
    marginBottom: 10,
  },
  childrenContainer: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "#023E8A",
    marginHorizontal: 16,
  },
});
