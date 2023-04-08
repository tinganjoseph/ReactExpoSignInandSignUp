import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { welcomebanner, logo } from '../Images/main'
const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View className="flex-row">
                <StatusBar hidden={true} />
                <Image source={welcomebanner} className=" rounded-r-[50px]" />
                <View className="mt-6 my-4 mx-7 mb-10 ">
                    <View className=" ">
                        <Text className="text-amber-800 text-lg font-bold">Welcome</Text>

                    </View>
                    <View className="mb-44">
                        <Text className="text-md font-semibold">April | 2023</Text>
                        <Text>6:23</Text>
                    </View>
                    <View className=" mb-48">

                        <Text className=" font-semibold">TouchApp</Text>
                        <View className=" mt-2">
                            <Text className="text-xs font-bold">Open an account for Digital {"\n"} content. Instant Updates</Text>
                            <Text className="text-xs font-bold">Join Us</Text>
                        </View>

                    </View>
                    <View className=" bottom-0 left-0 ">
                        <View className="w-48 mb-3">
                            <TouchableOpacity className="flex-row items-center bg-[#a36f37] mt-6 py-2 justify-center rounded-md">
                                <MaterialCommunityIcons
                                    name="account-arrow-right"
                                    size={24}
                                    color="white"
                                />
                                <Text className="text-white text-center font-bold text-lg ml-1">
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View className=" flex-row mt-1 justify-start">

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Registration")}
                                >
                                    <Text className="  text-black text-md font-bold">
                                        Don't have an account?
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>




            </View>
        </View>

    )
}

export default WelcomeScreen