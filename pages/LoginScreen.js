import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Image, Input, Icon } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const SERVER_URL = "http://192.168.31.120:5000";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/login`, {
        username,
        password,
      });

      const token = response.data.token;
      await AsyncStorage.setItem("token", token);

      navigation.navigate("Welcome");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        containerStyle={styles.item}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        leftIcon={
          <Icon
            name="alternate-email"
            type="material"
            color="rgba(109,109,109,255)"
          />
        }
        style={styles.input}
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        leftIcon={
          <Icon name="lock" type="feather" color="rgba(109,109,109,255)" />
        }
        placeholder="Пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Увійти"
        containerStyle={{
          width: "100%",
          marginVertical: 20,
        }}
        buttonStyle={{
          backgroundColor: "rgba(69,153,128,255)",
          borderRadius: 7,
          padding: 15,
        }}
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  item: {
    aspectRatio: 1,
    width: "60%",
  },
  image: {
    width: "100%",
  },
});

export default LoginScreen;
