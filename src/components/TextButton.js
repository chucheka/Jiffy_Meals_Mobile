import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

function TextButton({ label, onPressFunc, textBtnStyle, textStyle }) {
  return (
    <Pressable
      onPress={onPressFunc}
      style={[styles.defaultStyle, textBtnStyle]}
    >
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {},
});
export default TextButton;
