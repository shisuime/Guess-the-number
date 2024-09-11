import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/game/Title";
import PrimaryButton from "../components/buttons/PrimaryButton";

const GameOverScreen = ({ userNumber, roundsNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton handler={onStartNewGame}>New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: "purple",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 23,
    textAlign: "center",
    marginBottom: 14,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "blue",
  },
});
