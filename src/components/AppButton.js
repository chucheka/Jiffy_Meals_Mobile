import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function AppButton({ title, onPressFunc, btnStyle, btnTextStyle }) {
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[styles.defaultStyle, btnStyle]}
    >
      <Text style={btnTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {},
});
export default AppButton;
