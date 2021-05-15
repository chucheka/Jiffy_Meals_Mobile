import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const FoodCard = ({ food, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("SameFoodList", {
          food,
        });
      }}
    >
      <Image source={food?.image} style={styles.image} />
      <View style={{ overflow: "hidden" }}>
        <Text style={styles.leadingText}>{food?.restuarant}</Text>
        <View style={styles.goodFor}>
          {food?.goodFor.map((e, index) => (
            <Text style={{ color: colors.dark, marginLeft: 2 }}>{e} ●</Text>
          ))}
        </View>
        <Text>{food?.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  details: {},
  image: {
    width: "100%",
    height: 120,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  goodFor: {
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: "no-wrap",
    overflow: "hidden",
  },
  leadingText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "600",
    color: colors.dark,
  },
});
export default FoodCard;
