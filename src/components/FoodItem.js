import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const FoodItem = ({ navigation, food }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("Add To Cart", {
          food,
        });
      }}
    >
      <View style={styles.details}>
        <Text style={styles.leadingText}>{food?.name}</Text>
        <Text>{food.ingredients.join(", ")}</Text>"
        <Text style={styles.price}>${food?.price}</Text>"
      </View>
      <Image source={food?.image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 6,
    justifyContent: "space-between",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "stretch",
    alignSelf: "center",
  },
  leadingText: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.dark,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default FoodItem;
