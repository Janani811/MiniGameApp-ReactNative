import { View, StyleSheet, Dimensions } from "react-native";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    backgroundColor: "#03045E",
    alignItems: "center",

    padding: deviceWidth < 380 ? 12 : 16,
    marginVertical: deviceWidth < 380 ? 22 : 35,
    marginHorizontal: deviceWidth < 380 ? 16 : 24,
    borderRadius: 7,
    elevation: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.35,
  },
});
