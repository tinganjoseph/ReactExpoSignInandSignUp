import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, LoginScreen, RegisterScreen ,WelcomeScreen} from "../../src/Screens/main";

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="Registration"
      component={RegisterScreen}
      options={{
        headerShown: false,
      }}
    />
        <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
