import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");

      navigation.navigate("Login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привіт! Ви успішно авторизовані!</Text>
      <Button
        containerStyle={{
          width: "100%",
          marginVertical: 20,
        }}
        buttonStyle={{
          backgroundColor: "rgba(69,153,128,255)",
          borderRadius: 7,
          padding: 15,
        }}
        title="Вийти"
        onPress={handleLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
