import React from "react";
import { View, Text, FlatList } from "react-native";

import FoodItem from "../components/FoodItem";

import { foods } from "../store/data";

function SameFoodListScreen({ navigation, route }) {
  navigation.setOptions({ title: route.params?.category });

  const meals = foods.filter((f) => f.category == route.params?.category);
  return (
    <View style={{ backgroundColor: "#f6f4f9", flex: 1 }}>
      {meals.length == 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text>No food in this category</Text>
        </View>
      ) : (
        <FlatList
          data={meals}
          renderItem={({ item }) => (
            <FoodItem key={item.id} food={item} navigation={navigation} />
          )}
          keyExtractor={(food) => food.id}
        />
      )}
    </View>
  );
}

export default SameFoodListScreen;
