import { View, Image, Text } from "react-native";
import React from "react";

export const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View
      className={`items-center text-center h-20 w-20 py-3 justify-center gap-2`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-7 h-7 -mb-1"
      />
      {focused && <View className="p-1 rounded-full bg-primary"></View>}
    </View>
  );
};
