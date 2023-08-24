import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./pages/LoginScreen";
import WelcomeScreen from "./pages/WelcomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
