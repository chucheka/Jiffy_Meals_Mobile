import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const CartItem = ({ item }) => {
  const { name, price, quantity } = item?.order;

  return (
    <View style={styles.container}>
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
    marginHorizontal: 10,
    color: colors.dark,
  },
  quantity: {
    paddingHorizontal: 2,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
    fontWeight: "600",
    width: 24,
    height: 18,
    textAlign: "center",
    textAlignVertical: "center",
    color: colors.dark,
  },
  price: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
  },
});
export default CartItem;
