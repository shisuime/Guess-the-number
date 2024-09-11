import { StyleSheet, Alert, View, TextInput, Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/game/Title";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const resetInputFunc = () => {
    setEnteredNumber("");
  };

  const confirmInputFunc = () => {
    const chosenNumber = parseInt(enteredNumber);
    console.log(chosenNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputFunc },
      ]);

      return;
    }

    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(enteredText) => setEnteredNumber(enteredText)}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton handler={resetInputFunc}>Reset</PrimaryButton>
          <PrimaryButton handler={confirmInputFunc}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    marginTop: 36,
    // flex: 1,
    marginHorizontal: 24,
    height: 170,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary1,
    borderRadius: 8,
    gap: 10,
    elevation: 8,
  },
  textInput: {
    width: 100,
    height: 40,
    fontSize: 32,
    borderBottomColor: Colors.primary3,
    borderBottomWidth: 2,
    color: Colors.primary3,

    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    gap: 10,
  },
  instructionText: {
    color: "yellow",
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
