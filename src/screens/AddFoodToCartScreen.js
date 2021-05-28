import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppButton from "../components/AppButton";

import AppImage from "../components/AppImage";
import { colors } from "../config/config";
import { storeData, getData } from "../store/storeInAsyncStorage";

function AddFoodToCartScreen({ navigation, route }) {
  const { food } = route.params;

  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(food?.price);

  const [cart, setCart] = useState([]);

  const [order, setOrder] = useState({
    name: food?.name,
    quantity: 1,
    price: food?.price,
    restuarant: food?.restuarant,
  });
  function addQuantity() {
    setQuantity(quantity + 1);
    setTotalCost(totalCost + food?.price);
    setOrder({
      name: food?.name,
      quantity,
      price: totalCost,
      restuarant: food?.restuarant,
    });
  }

  function subtractQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalCost(totalCost - food?.price);
      setOrder({
        name: food?.name,
        quantity,
        price: totalCost,
        restuarant: food?.restuarant,
      });
    }
  }
  const addToCart = async (order, navigation) => {
    if (cart != null && cart.length > 0) {
      await storeData("@User_Cart", [
        ...cart,
        {
          id: Math.random().toString(36).substr(1, 5),
          order,
          exp_at: Date.now(),
        },
      ]);
    } else {
      await storeData("@User_Cart", [
        {
          id: Math.random().toString(36).substr(1, 5),
          order,
          exp_at: Date.now(),
        },
      ]);
    }

    navigation.navigate("Your Cart");
  };

  useEffect(() => {
    async function getCartFromStore() {
      const result = await getData("@User_Cart");
      setCart(result);
    }
    getCartFromStore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.leadingText}>{food.name}</Text>
      <View style={styles.images}>
        <AppImage
          source={require("../assets/fifth.jpg")}
          width="100%"
          height={200}
          borderRadius={0}
          otherStyles={{ marginBottom: 10, resizeMode: "stretch" }}
        />
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4].map(() => (
            <AppImage
              source={require("../assets/fifth.jpg")}
              width={80}
              height={80}
              borderRadius={0}
              otherStyles={{ marginRight: 6, resizeMode: "stretch" }}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          marginVertical: 20,
          color: colors.dark,
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        <Text>{food.ingredients.join(",")}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity style={styles.minus} onPress={subtractQuantity}>
          <Text style={styles.signText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{quantity}</Text>
        <TouchableOpacity style={styles.plus} onPress={addQuantity}>
          <Text style={styles.signText}>+</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: 100,
          alignItems: "center",
        }}
      >
        <View style={styles.totalCost}>
          <Text style={{ textAlign: "center" }}>${totalCost}</Text>
        </View>
        <AppButton
          title="Add To Cart"
          onPressFunc={() =>
            addToCart(
              {
                name: food?.name,
                quantity,
                price: totalCost,
                restuarant: food?.restuarant,
              },
              navigation
            )
          }
          btnStyle={styles.btn}
          btnTextStyle={styles.btnTextStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: colors.btnColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.light,
    textAlign: "center",
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  counter: {
    marginVertical: 20,
    paddingHorizontal: 8,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    width: 94,
    height: 40,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: colors.white,
  },
  count: {
    flex: 2,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  images: {},
  leadingText: {
    marginBottom: 10,
    color: colors.dark,
    fontSize: 22,
    fontWeight: "600",
  },
  minus: {
    flex: 1,
  },
  plus: {
    flex: 1,
  },
  signText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  totalCost: {
    borderRadius: 6,
    borderColor: colors.dark,
    borderWidth: 1,
    padding: 4,
    minWidth: 60,
  },
});
export default AddFoodToCartScreen;
