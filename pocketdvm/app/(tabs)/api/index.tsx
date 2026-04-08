import CatImage from "@/components/api";
import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";

const router = useRouter();


export default function Api() {
  return (
    <View className="flex-1 items-center justify-center">
      <CatImage />
    </View>
  );
}
