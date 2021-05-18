import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppStackNavigator from "../navigation/AppStackNavigator";
import AboutScreen from "../screens/AboutScreen";
import { DrawerContent } from "./drawContent";

const Drawer = createDrawerNavigator();

function AppDrawerNavigator(props) {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={AppStackNavigator}
        headerMode="none"
      />
    </Drawer.Navigator>
  );
}

export default AppDrawerNavigator;
