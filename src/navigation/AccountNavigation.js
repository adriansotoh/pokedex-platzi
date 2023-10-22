//import liraries
import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account";

const Stack = createNativeStackNavigator();

// create a component
const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Mi cuenta",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

//make this component available to the app
export default AccountNavigation;
