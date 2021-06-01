import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../config/config";

export default function SelectCardScreen() {
  return (
    <View>
      <FontAwesome5
        style={styles.creditCard}
        size={100}
        color={colors.btnColor}
        name="credit-card"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  creditCard: {
    width: 120,
    height: 100,
  },
});
