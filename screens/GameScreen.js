import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Title from "../components/game/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie", "you know this is wrong", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  };

  const guessRoundsListLength = guessRounds.length - 1;

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View style={styles.textAndbuttonsContainer}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton handler={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove" size={24} color={"white"} />
          </PrimaryButton>
          <PrimaryButton handler={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="add" size={24} color={"white"} />
          </PrimaryButton>
        </View>
      </View>
      {/* {guessRounds.map((e) => {
        return (
          <View key={e}>
            <Text>Log {e}</Text>
          </View>
        );
      })} */}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <View style={styles.itemList}>
              <Text style={styles.itemText}>
                #{guessRoundsListLength - itemData.index} Rounds
              </Text>
              <Text style={styles.itemText}>
                Opponent's Guess {itemData.item}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  textAndbuttonsContainer: {
    alignItems: "center",
    gap: 20,
  },
  text: {
    color: "pink",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    // width: 100,
    gap: 20,
  },
  itemList: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
  },
  itemText: {
    fontFamily: "open-sans-bold",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
