import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AppStackNavigator from "../navigation/AppStackNavigator";
import AboutScreen from "../screens/AboutScreen";
import { DrawerContent } from "./drawContent";
import { Provider } from "../store/CartContext";

const Drawer = createDrawerNavigator();

function AppDrawerNavigator(props) {
  return (
    <Provider>
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen
          name="Home"
          component={AppStackNavigator}
          headerMode="none"
        />
      </Drawer.Navigator>
    </Provider>
  );
}

export default AppDrawerNavigator;
