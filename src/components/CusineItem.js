import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const CusineItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => navigation.navigate("FoodList")}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </TouchableOpacity>
      <Text style={styles.textStyle}>{item?.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 100,
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 50,
    overflow: "hidden",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
});
export default CusineItem;
