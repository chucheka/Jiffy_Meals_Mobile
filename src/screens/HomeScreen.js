import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import CusineItem from "../components/CusineItem";

import { colors } from "../config/config";
import { categories } from "../store/data";

import CusineCarousel from "../components/CusineCarousel";

const HomeScreen = ({ navigation }) => {
  const [cusines, setCusines] = useState(categories);
  return (
    <View
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
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "600",
              marginBottom: 10,
              marginTop: 30,
            }}
          >
            Cusines
          </Text>
          <CusineCarousel data={categories} />
        </View>
      </View>
    </View>
  );
};
export default HomeScreen;
