import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { mainbackground } from '../Images/main'
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  return (
    <View className="flex-1 bg-white">
    <Image className="object-cover w-full h-full absolute top-0" source={mainbackground} />
    <View className="absolute bottom-0 w-full h-4/5 bg-white shadow-2xl rounded-r-[160px] " />
    <SafeAreaView className="flex-1  justify-center p-4">
        <Text className="text-2xl font-bold text-amber-700 mx-5 ">
            SignIn
        </Text>
        <Text className="text-black font-normal text-xs mx-5  mb-3">
            {" "}
            Enter email and password to Login
        </Text>
        <View className="px-3 mx-3  justify-center  ">
            <Text className="mt-2 mx-2 mb-1">Email</Text>
            <View className="flex-row mb-1 items-center border border-gray-300 rounded-md ">
                <Zocial
                    name="email"
                    size={24}
                    color="gray"
                    style={{ marginLeft: 10 }}
                />
                <TextInput
                    className="h-12 w-full p-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
        </View>
        <View className="px-3 mx-3 mt-2">
            <Text className="mt-2 mx-2 mb-1">Password</Text>
            <View className="flex-row mb-4 items-center border border-gray-300 rounded-md ">
                <MaterialCommunityIcons
                    name="key-chain-variant"
                    size={24}
                    color="gray"
                    style={{ marginLeft: 10 }}
                />
                <TextInput
                    className="flex-1 h-12 px-2 text-gray-700 placeholder-gray-400 focus:outline-none"
                    secureTextEntry={!showPassword}
                    placeholder="Password"
                    value={password}
                    placeholderTextColor="gray"
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <MaterialCommunityIcons
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={24}
                        color={showPassword ? "gray" : "#ccc"}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
          //  onPress={() => navigation.navigate("ForgotPasswordScreen")}
            className="items-end"
          >
            <Text className="  text-[#83492f] font-bold">Forgot password?</Text>
          </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center bg-[#c99e71] mt-6 py-2 justify-center rounded-md">
                <MaterialCommunityIcons
                    name="account-arrow-right"
                    size={24}
                    color="white"
                />
                <Text className="text-white text-center font-bold text-lg ml-1">
                    Login
                </Text>
            </TouchableOpacity>
            <View className=" flex-row mt-3 justify-start">
                <Text className="  text-black  font-semibold">
                Don't have an account?
                </Text>
                <TouchableOpacity
                 onPress={() => navigation.navigate("Registration")}
                >
                    <Text className="  text-red-950  font-bold ml-1"> SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>
</View>
  )
}

export default LoginScreen