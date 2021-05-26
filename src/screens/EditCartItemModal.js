import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

import AppButton from "../components/AppButton";
import Counter from "../components/Counter";
import TextButton from "../components/TextButton";
import { colors } from "../config/config";
import { updateData } from "../store/storeInAsyncStorage";

export default function EditCartItemModal({
  modalVisible,
  setModalVisible,
  updatedItem,
  cart,
}) {
  const { id, order } = updatedItem;

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(order.quantity);
  }, []);

  function subtractFunc(count) {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  const addFunc = (count) => {
    setCount(count + 1);
  };

  function updateCartItem(modalVisible, item) {
    const index = cart.findIndex((c) => c.id == item.id);
    cart[index] = { ...cart[index] };
    setModalVisible(!modalVisible);
  }

  function removeCartItem(modalVisible, item) {
    setModalVisible(!modalVisible);
  }

  return (
    <>
      <View style={styles.overlay}></View>
      <View style={styles.editWindow}>
        <Text
          style={{
            marginBottom: 14,
            fontSize: 20,
            fontWeight: "bold",
            color: colors.dark,
            textAlign: "center",
          }}
        >
          {order.name}
        </Text>
        <Counter addFunc={addFunc} subtractFunc={subtractFunc} count={count} />
        <AppButton
          title="Update Item"
          onPressFunc={() => updateCartItem(modalVisible, updatedItem)}
          btnStyle={styles.btn}
          btnTextStyle={styles.btnTextStyle}
        />
        <TextButton
          label="Remove from cart"
          onPressFunc={() => removeCartItem(modalVisible, updatedItem)}
          textBtnStyle={styles.textBtnStyle}
          textStyle={styles.textStyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    height: "100%",
    opacity: 0.78,
    width: "100%",
    zIndex: 1,
  },
  editWindow: {
    width: "100%",
    height: "40%",
    padding: 20,
    bottom: 0,
    position: "absolute",
    zIndex: 2,
    opacity: "0 !important",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    width: "90%",
    height: 36,
    backgroundColor: colors.btnColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btnTextStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.light,
    textAlign: "center",
  },
  textBtnStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  textStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.btnColor,
    textAlign: "center",
  },
});
