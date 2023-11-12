import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import axios from "axios";
import Icon from "react-native-ico-material-design";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat/Montserrat.ttf"),
  });

  // const [name, setName] = useState('');

  const navigation = useNavigation();

  // const homeHandle = () => {

  //     navigation.navigate('Home', { name })
  // }
  const registerHandle = () => {
    navigation.navigate("Register");
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      if (formData.email.trim() === "" || formData.password.trim() === "") {
        setError("Please fill in all fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Invalid email address.");
        return;
      }

      const response = await axios.post(
        "http://192.168.0.102:5000/signIn",
        formData
      );

      if (response.data) {
        setFormData({
          email: "",
          password: "",
        });
        await AsyncStorage.setItem("user", JSON.stringify(response.data));
        navigation.navigate("UserProfile");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ flex: 0.5 }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("./images/MyLogo.png")}
            />
          </View>
        </View>

        <View
          style={{ flex: 0.4, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 50,
            }}
          >
            <Text style={styles.title}>Learnify</Text>
            <Text style={{ fontStyle: "italic" }}>For you to Learn!</Text>
          </View>

          <View>
            <TextInput
              style={{
                width: 200,
                height: 35,
                borderRadius: 5,
                paddingLeft: 10,
                borderWidth: 1,
              }}
              placeholder="Email"
              placeholderTextColor="#364c59"
              onChangeText={(text) => handleChange("email", text)}
              value={formData.email}
            />
            <TextInput
              style={{
                width: 200,
                height: 35,
                marginTop: 20,
                borderRadius: 5,
                paddingLeft: 10,
                borderWidth: 1,
              }}
              placeholder="Password"
              placeholderTextColor="#364c59"
              onChangeText={(text) => handleChange("password", text)}
              value={formData.password}
              secureTextEntry={true}
            />

            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 6,
                  fontSize: 11,
                  textDecorationLine: "underline",
                  textAlign: "right",
                }}
              >
                Forget Password?
              </Text>
              {error && <Text style={{ color: "#ED2B2A" }}>{error}</Text>}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 0.2,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={handleSubmit}>
            <View
              style={{
                backgroundColor: "#06161C",
                borderRadius: 5,
                width: 200,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={registerHandle}>
            <Text
              style={{
                color: "#e01f50",
                marginLeft: 5,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    // fontFamily: 'Montserrat',
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold",
    marginTop: 0,
  },
});
