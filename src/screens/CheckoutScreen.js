import React from "react";
import { View, Text } from "react-native";

function CheckoutScreen({ route }) {
  console.log(route.params?.total);
  return (
    <View>
      <Text>This is the checkout screen</Text>
    </View>
  );
}

export default CheckoutScreen;
