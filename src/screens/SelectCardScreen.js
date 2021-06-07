import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../config/config";
import CardListItem from "../components/CardListItem";

export default function SelectCardScreen({ navigation }) {
  const cards = [
    {
      type: "Visa",
      no: "12345463000900000",
      iconName: "cc-visa",
    },
    {
      type: "MasterCard",
      no: "12345463000900000",
      iconName: "cc-mastercard",
    },
    {
      type: "Apple Pay",
      no: "12345463000900000",
      iconName: "cc-apple-pay",
    },
  ];
  return (
    <View>
      <FontAwesome5
        style={styles.creditCard}
        size={100}
        color={colors.btnColor}
        name="credit-card"
      />
      <FlatList
        horizontal={false}
        data={cards}
        renderItem={({ item, index, separators }) => (
          <CardListItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  creditCard: {
    width: 120,
    height: 100,
    marginRight: 10,
    marginVertical: 30,
    alignSelf: "center",
  },
});
