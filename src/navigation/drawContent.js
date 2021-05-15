import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0, marginTop: 0 }}
    >
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image source={require("../assets/photo.jpg")} size={75} />
          <Title style={styles.title}>Ucheka Chike</Title>
          <Caption style={styles.caption}>@chike</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="home" color={color} size={size} />
            )}
            label="HOME"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="list" color={color} size={size} />
            )}
            label="CUSINES"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="search" color={color} size={size} />
            )}
            label="SEARCH"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="shopping-cart" color={color} size={size} />
            )}
            label="CART"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="shipping-fast" color={color} size={size} />
            )}
            label="ORDERS"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Account">
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome5 name="power-off" color={color} size={size} />
            )}
            label="LogOut"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    margin: 0,
    paddingTop: 50,
    paddingLeft: 20,
    alignItems: "center",
  },
  title: {
    color: "#636363",
    fontWeight: "bold",
  },
  caption: {
    color: "#636363",
    fontSize: 12,
    lineHeight: 14,
    paddingBottom: 20,
  },
  row: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
