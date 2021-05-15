import React from "react";
import { View, Text } from "react-native";
import { foods } from "../store/data";

function SameFoodListScreen({ navigation, route }) {
  navigation.setOptions({ title: route.params?.food?.category });
  return (
    <View>
      <Text>List of food of same type eg swallows</Text>
    </View>
  );
}

export default SameFoodListScreen;
