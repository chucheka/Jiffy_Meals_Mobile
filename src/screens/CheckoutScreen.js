import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config/config";
import AppButton from "../components/AppButton";

function CheckoutScreen({ route }) {
  const total = route.params?.total;

  return (
    <View style={styles.container}>
      <Text style={styles.checkout}>Check out</Text>
      <Elem rightText="Payment" leftText="Visa 3220" />
      <Elem rightText="Deliver to" leftText="Select address" />
      <Elem rightText="Total" leftText={`$${total}.00`} />
      <AppButton
        title="Place Order"
        onPressFunc={() => console.log("Add a pop up modal")}
        btnStyle={styles.btn}
        btnTextStyle={styles.btnTextStyle}
      />
    </View>
  );
}

function Elem({ rightText, leftText }) {
  return (
    <TouchableOpacity style={styles.line}>
      <Text
        style={{
          alignSelf: "flex-start",
          flex: 1,
          color: colors.btnColor,
          fontSize: 14,
          fontWeight: "500",
        }}
      >
        {rightText}
      </Text>
      <Text style={{ alignSelf: "flex-end", color: colors.dark }}>
        {leftText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    backgroundColor: colors.light,
  },
  checkout: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: "500",
    paddingLeft: 10,
    marginBottom: 40,
  },
  line: {
    flexDirection: "row",
    borderTopColor: colors.light,
    borderTopWidth: 1,
    backgroundColor: colors.white,
    paddingVertical: 6,
    paddingHorizontal: 10,
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
});
export default CheckoutScreen;
