import { View, Text } from "react-native";
import React from "react";

const TodoCard = ({
  Title,
  index,
  description,
}: {
  Title: string;
  index: number;
  description: string;
}) => {
  let backgroundColor;

  switch (index % 4) {
    case 0:
      backgroundColor = "bg-secondary";
      break;
    case 1:
      backgroundColor = "bg-secondary2";
      break;
    case 2:
      backgroundColor = "bg-secondary3";
      break;
    case 3:
      backgroundColor = "bg-neutralLight";
      break;
    default:
      backgroundColor = "bg-secondary";
  }

  return (
    <View className={`mx-4 my-2 p-6 ${backgroundColor}/50 rounded-xl`}>
      <Text className="text-lg font-bold_font capitalize mb-2">{Title}</Text>
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        className="text-neutralDark font-medium_font"
      >
        {description}
      </Text>
    </View>
  );
};

export default TodoCard;
