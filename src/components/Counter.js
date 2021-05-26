import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

export default function Counter({ addFunc, subtractFunc, count }) {
  console.log(count);
  return (
    <View style={styles.counter}>
      <TouchableOpacity
        style={styles.minus}
        onPress={() => subtractFunc(count)}
      >
        <Text style={styles.signText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity style={styles.plus} onPress={() => addFunc(count)}>
        <Text style={styles.signText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    marginTop: 10,
    marginButtom: 20,
    paddingHorizontal: 8,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 94,
    height: 30,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: colors.white,
  },
  count: {
    flex: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: colors.dark,
  },
  minus: {
    flex: 1,
  },
  plus: {
    flex: 1,
  },
  signText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
});
