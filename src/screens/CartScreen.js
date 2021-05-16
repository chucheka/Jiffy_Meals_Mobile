import React from "react";
import { View, Text } from "react-native";

function CartScreen({ route }) {
  console.log(route.params?.order);
  return (
    <View>
      <Text>Cart Screen</Text>
    </View>
  );
}

export default CartScreen;
