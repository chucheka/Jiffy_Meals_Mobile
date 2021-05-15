import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import CartScreen from "../screens/CartScreen";
import RestuarantsMapScreen from "../screens/RestuarantsMapScreen";
import FoodsInACategoryScreen from "../screens/FoodCategoryScreen";
import SameFoodListScreen from "../screens/SameFoodListScreen";

const Stack = createStackNavigator();

const AppStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
        headerTitleAlign: "center",
        headerTintColor: "#636363",
        headerBackTitle: "Home",
        headerBackTitleVisible: true,
        headerBackTitleStyle: {
          color: "#636363",
        },
        headerBackImage: () => (
          <FontAwesome5
            style={{ marginRight: 8 }}
            name="angle-left"
            size={28}
            color="#636363"
          />
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: (props) => (
            <TouchableOpacity
              style={{ marginLeft: 24 }}
              {...props}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <FontAwesome5 name="bars" size={20} color="#636363" />
            </TouchableOpacity>
          ),
          headerRight: (props) => (
            <View style={{ flexDirection: "row", marginRight: 24 }}>
              <TouchableOpacity
                {...props}
                onPress={() => {
                  navigation.navigate("Map");
                }}
                style={{ marginRight: 12 }}
              >
                <FontAwesome5 name="map" size={20} color="#636363" />
              </TouchableOpacity>
              <TouchableOpacity
                {...props}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              >
                <FontAwesome5 name="shopping-cart" size={20} color="#636363" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Map" component={RestuarantsMapScreen} />
      <Stack.Screen name="FoodList" component={FoodsInACategoryScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="SameFoodList"
        component={SameFoodListScreen}
        options={{
          title: "Same Food List",
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
