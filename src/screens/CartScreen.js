import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import CartItem from "../components/CartItem";
import AppButton from "../components/AppButton";

import { getData } from "../store/storeInAsyncStorage";
import { colors } from "../config/config";

function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getCartFromStore() {
      const result = await getData("@User_Cart");
      setCart(result);
    }
    getCartFromStore();
  }, []);
  let total;

  if (cart) {
    total = cart
      .map((item) => item?.order?.price)
      .reduce((sum, current) => sum + current, 0);
  }
  return (
    <>
      {!cart ? (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: colors.dark, fontSize: 16, fontWeight: "600" }}>
            No item in cart
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{ paddingHorizontal: 10 }}>
            <FlatList
              data={cart}
              renderItem={({ item, index, separators }) => (
                <CartItem item={item} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={[styles.total, { paddingHorizontal: 10 }]}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              Total
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                ${total}
              </Text>
            </View>
          </View>
          <AppButton
            title="Place Order"
            onPressFunc={() =>
              navigation.navigate("Checkout", {
                total: total,
              })
            }
            btnStyle={styles.btn}
            btnTextStyle={styles.btnTextStyle}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "red",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "600",
  },
  btn: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40,
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
});

export default CartScreen;
