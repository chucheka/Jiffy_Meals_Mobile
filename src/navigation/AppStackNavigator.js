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
import AddFoodToCartScreen from "../screens/AddFoodToCartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import SelectCardScreen from "../screens/SelectCardScreen";
import TextButton from "../components/TextButton";
import { colors } from "../config/config";

const Stack = createStackNavigator();

const AppStackNavigator = (props) => {
  const { navigation } = props;
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
        headerBackTitle: "Back",
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
                  navigation.navigate("Your Cart");
                }}
              >
                <FontAwesome5 name="shopping-cart" size={20} color="#636363" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="Your Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Map" component={RestuarantsMapScreen} />
      <Stack.Screen name="FoodList" component={FoodsInACategoryScreen} />
      <Stack.Screen
        name="Credit Cards"
        component={SelectCardScreen}
        options={{
          title: "",
          headerLeft: (props) => (
            <TextButton
              label="Cancel"
              onPressFunc={() => {
                navigation.goBack();
              }}
              textBtnStyle={{ marginLeft: 12 }}
              textStyle={{
                color: colors.btnColor,
                fontSize: 16,
                fontWeight: "500",
              }}
            />
          ),
          headerRight: (props) => (
            <TextButton
              {...props}
              label="Edit"
              onPressFunc={() => {
                navigation.goBack();
              }}
              textBtnStyle={{ marginRight: 12 }}
              textStyle={{
                color: colors.btnColor,
                fontSize: 16,
                fontWeight: "500",
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Add To Cart"
        component={AddFoodToCartScreen}
        options={{}}
      />
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
