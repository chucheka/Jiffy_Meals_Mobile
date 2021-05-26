import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import CartItem from "../components/CartItem";
import AppButton from "../components/AppButton";
import EditCartItemModal from "./EditCartItemModal";

import { getData } from "../store/storeInAsyncStorage";
import { colors } from "../config/config";

function CartScreen({ navigation }) {
  const [cart, setCart] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});

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
                <CartItem
                  item={item}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  setUpdatedItem={setUpdatedItem}
                />
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

          {modalVisible ? (
            <EditCartItemModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              updatedItem={updatedItem}
            />
          ) : (
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
          )}
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
    bottom: 2,
    width: "100%",
    height: 46,
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
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
  editWindow: {
    width: "100%",
    height: "40%",
    bottom: 0,
    position: "absolute",
    zIndex: 2,
    opacity: "0 !important",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
  },
});

export default CartScreen;
