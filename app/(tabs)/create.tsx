import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";
import { useDispatch } from "react-redux";
import { TodoAction } from "@/redux/todoSlice";
import { router } from "expo-router";

const create = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ title: "", description: "", completed: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    if (!todo.title) {
      Alert.alert("Error", "The title field is required");
      setIsSubmitting(false);
      return;
    }

    try {
      dispatch(
        TodoAction.addTodo({
          title: todo.title,
          description: todo.description,
        })
      );
      setTodo({ title: "", description: "", completed: false });
      Alert.alert("Success", "Successfully Created", [
        { text: "OK", onPress: () => router.navigate("/(tabs)/") },
      ]);
    } catch (error) {
      Alert.alert("Error", "Some Error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <View className="p-4 flex flex-col items-center place-content-center w-full">
        <Image
          source={icons.create}
          alt="create"
          className="w-8 h-8 mb-2"
          tintColor={Colors.neutralDarker}
        />
        <Text className="text-2xl text-primary font-ExtraBold_font">
          Create Todo
        </Text>
      </View>
      <View className="p-4 px-4 mt-12">
        <Text className="text-lg font-semibold_font mb-3">Title</Text>
        <TextInput
          value={todo.title}
          // @ts-ignore
          onChangeText={(e) => setTodo({ ...todo, title: e })}
          className="border p-3 border-neutralLight/70 outline outline-primary rounded-md"
        />
      </View>
      <View className="p-4 px-4">
        <Text className="text-lg font-semibold_font mb-3">Description</Text>
        <TextInput
          value={todo.description}
          // @ts-ignore
          onChangeText={(e) => setTodo({ ...todo, description: e })}
          multiline={true}
          numberOfLines={4}
          className="border p-4 h-48 border-neutralLight/70 outline outline-primary rounded-md"
        />
      </View>
      <View className="p-4 px-4">
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-primary p-4 rounded-lg"
        >
          <Text className="text-center uppercase text-neutralLighter font-semibold_font text-sm">
            {isSubmitting ? "Loading..." : "Create"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default create;
