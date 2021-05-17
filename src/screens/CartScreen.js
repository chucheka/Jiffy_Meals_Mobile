import React, { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import { getData } from "../store/storeInAsyncStorage";

import { Context } from "../store/CartContext";

function CartScreen({ route }) {
  const { state } = useContext(Context);
  console.log(state);

  return (
    <View>
      <Text>Cart Screen</Text>
    </View>
  );
}

export default CartScreen;
