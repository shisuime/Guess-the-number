import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    marginTop: 40,
    padding: 12,
  },
});
