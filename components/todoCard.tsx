import { View, Text, TouchableOpacity, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import CompModal from "./modal";

const TodoCard = ({
  Title,
  index,
  description,
  id,
  completed,
}: {
  Title: string;
  id: number;
  index: number;
  description: string;
  completed: boolean;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  let backgroundColor;

  switch (index % 4) {
    case 0:
      backgroundColor = Colors.secondary;
      break;
    case 1:
      backgroundColor = Colors.secondary2;
      break;
    case 2:
      backgroundColor = Colors.secondary3;
      break;
    case 3:
      backgroundColor = Colors.neutralLight;
      break;
    default:
      backgroundColor = Colors.secondary;
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          backgroundColor: backgroundColor,
          opacity: 0.8,
        }}
        className={`mx-4 my-2 p-6 rounded-xl`}
      >
        <Text className="text-lg  font-bold_font capitalize mb-2">{Title}</Text>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          className="text-neutralDarker font-medium_font"
        >
          {description}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CompModal
          Title={Title}
          description={description}
          completed={completed}
          id={id}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </Modal>
    </>
  );
};

export default TodoCard;
