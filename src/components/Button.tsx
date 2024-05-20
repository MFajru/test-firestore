import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

interface IButton {
  buttonTitle: string;
  customStyle?: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ buttonTitle, customStyle, onPress }: IButton) => {
  return (
    <TouchableOpacity style={[styles.button, customStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "cornflowerblue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

export default Button;
