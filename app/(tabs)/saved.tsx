import { icons } from "@/constants/icons";
import React from "react";
import { View, Text, Image } from "react-native";

const Saved = () => {
  return (
    <View className="bg-primary flex-1 px-10">
      <Text className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.save} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 text-base">Save</Text>
      </Text>
    </View>
  );
};

export default Saved;
