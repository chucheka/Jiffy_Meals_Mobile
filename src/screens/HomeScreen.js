import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
import CusineItem from "../components/CusineItem";

import { colors } from "../config/config";
import { categories, foods } from "../store/data";

import CusineCarousel from "../components/CusineCarousel";
import FoodCard from "../components/FoodCard";

const HomeScreen = ({ navigation }) => {
  const [cusines, setCusines] = useState(categories);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.light,
      }}
    >
      <View>
        <FlatList
          horizontal
          data={cusines}
          renderItem={({ item, index, separators }) => (
            <CusineItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ backgroundColor: colors.white }}>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 8,
              marginTop: 16,
            }}
          >
            Cusines
          </Text>
          <CusineCarousel data={categories} navigation={navigation} />
        </View>
        <View>
          <Text
            style={{
              marginHorizontal: 10,
              marginVertical: 16,
              fontSize: 16,
              fontWeight: "600",
              color: colors.dark,
            }}
          >
            Most Popular
          </Text>
          <FlatList
            data={foods}
            renderItem={({ item }) => (
              <FoodCard key={item.id} food={item} navigation={navigation} />
            )}
            keyExtractor={(food) => food.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
