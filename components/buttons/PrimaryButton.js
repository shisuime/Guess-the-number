import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, handler }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handler}
        android_ripple={{ color: Colors.primary1 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    width: 100,
    backgroundColor: Colors.primary2,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  pressed: {
    opacity: 0.74,
  },
});
