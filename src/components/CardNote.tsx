import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

type TCardNote = {
  noteText: string;
  onPress: (event: GestureResponderEvent) => void;
};

const CardNote = ({ noteText, onPress }: TCardNote) => {
  return (
    <View style={styles.container}>
      <Text>{noteText}</Text>
      <Button
        buttonTitle="Delete"
        customStyle={{ backgroundColor: "red" }}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
});

export default CardNote;
