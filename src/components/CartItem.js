import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const CartItem = ({ item, modalVisible, setModalVisible, setUpdatedItem }) => {
  const { name, price, quantity } = item?.order;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setModalVisible(!modalVisible);
        setUpdatedItem(item);
      }}
    >
      <Text style={styles.quantity}>{quantity}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </TouchableOpacity>
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
  price: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "400",
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
});
export default CartItem;
