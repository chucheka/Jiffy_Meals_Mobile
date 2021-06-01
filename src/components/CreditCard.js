import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../config/config";

export default function CreditCard() {
  return (
    <View style={styles.outerBox}>
      <FontAwesome5 size={9} color={colors.dark} name="credit-card" />
      {/* <View style={styles.innerBox}>
        <View style={styles.box}></View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
