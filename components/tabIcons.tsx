import { View, Image } from "react-native";
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
      className={`items-center py-3 justify-center gap-2  ${
        focused && "transition duration-150 ease-in-out delay-300 scale-125"
      }`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-7 h-7"
      />
    </View>
  );
};
