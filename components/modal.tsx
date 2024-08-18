import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";
import { TodoAction } from "@/redux/todoSlice";
import { useDispatch } from "react-redux";
import { router } from "expo-router";

function CompModal({
  Title,
  description,
  id,
  completed,
  onPress,
}: {
  Title: string;
  id: number;
  completed: boolean;
  description: string;
  onPress: () => void;
}) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: Title,
    description: description,
    completed: completed,
  });

  const handleUpdate = () => {
    Alert.alert(
      "Confirm Action",
      "Are you sure you want to update this todo with new data?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(
              TodoAction.updateTodo({
                id,
                title: todo.title,
                description: todo.description,
                completed: todo.completed,
              })
            );
            router.push("/(tabs)/");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleDelete = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this todo?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            dispatch(TodoAction.deleteTodo(id));
            router.navigate("/(tabs)/");
          },
        },
      ],
      { cancelable: true }
    );
  };

  const checkCompleted = () => {
    setTodo((prevState) => ({
      ...prevState,
      completed: !prevState.completed,
    }));
  };
  return (
    <SafeAreaView className="h-full w-full">
      <View className="bg-neutralLighter flex flex-col gap-4 backdrop-blur-xl p-8">
        <Image
          tintColor={Colors.primary}
          source={icons.crown}
          alt="todo"
          className="w-6 h-6 mt-8"
        />
        <Text className="text-sm text-primary font-bold_font mt-4 capitalize">
          Todo Title
        </Text>
        <TextInput
          value={todo.title}
          // @ts-ignore
          onChangeText={(e) => setTodo({ ...todo, title: e })}
          className="border p-3 border-neutralLight/70 outline outline-primary rounded-md"
        />
        <Text className="text-sm text-primary font-bold_font capitalize">
          Description
        </Text>
        <TextInput
          value={todo.description}
          // @ts-ignore
          onChangeText={(e) => setTodo({ ...todo, description: e })}
          multiline={true}
          numberOfLines={4}
          className="border p-4 h-64 mb-2 border-neutralLight/70 outline outline-primary rounded-md"
        />
        <TouchableOpacity
          onPress={checkCompleted}
          className="flex flex-row gap-2 items-center"
        >
          <Image
            source={icons.completed}
            className="w-6 h-6"
            tintColor={todo.completed ? Colors.primary : Colors.neutralDarker}
          />
          <Text
            className={`${
              todo.completed ? "text-primary" : "text-neutralDarker"
            }`}
          >
            {todo.completed ? "Completed" : "Not Completed"}
          </Text>
        </TouchableOpacity>
        <Pressable className="absolute top-4 right-8" onPress={onPress}>
          <Image
            tintColor={Colors.secondary3}
            source={icons.close}
            alt="close"
            className="w-7 h-7"
          />
        </Pressable>
        <TouchableOpacity
          onPress={handleUpdate}
          className="bg-secondary2 p-4 rounded-lg"
        >
          <Text className="text-center uppercase text-neutralDarker font-semibold_font text-sm">
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDelete}
          className="bg-secondary3 mt-3 p-4 rounded-lg"
        >
          <Text className="text-center uppercase text-neutralDarker font-semibold_font text-sm">
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default CompModal;
