import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { colors } from "../config/config";

const CusineItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.image}
        onPress={() => {
          navigation.navigate("SameFoodList", {
            category: item?.name,
          });
        }}
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
    height: 100,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderColor: colors.white,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "red",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
});
export default CusineItem;
