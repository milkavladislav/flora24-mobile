import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Button, Image, Input } from "@rneui/themed";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import logoImage from "../assets/logo.png"

const SERVER_URL = "http://192.168.31.120:5000";
const WEB = "web";

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
    <View style={Platform.OS === WEB ? styles.webContainer : styles.container}>
      <Image
        source={logoImage}
        containerStyle={
          Platform.OS === WEB ? styles.webImageContainer : styles.imageContainer
        }
        style={styles.image}
      />
      <View style={Platform.OS === WEB && styles.formContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  webImageContainer: {
    aspectRatio: 1,
    width: "200px",
  },
  imageContainer: {
    aspectRatio: 1,
    width: "60%",
  },
  image: {
    width: "100%",
  },
  formContainer: {

  }
});

export default LoginScreen;
