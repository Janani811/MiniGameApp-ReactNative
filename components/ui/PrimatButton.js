import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#0077B6" }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#023E8A",
    textAlign: "center",
    borderRadius: 40,
    margin: 6,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    padding: 12,
    borderRadius: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
