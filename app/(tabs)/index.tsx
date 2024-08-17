import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { RootState } from "@/redux/rootState";
import { useSelector } from "react-redux";

const index = () => {
  const todo = useSelector((state: RootState) => state.todo.show);
  return (
    <SafeAreaView className="flex-1">
      <Text>{todo}</Text>
    </SafeAreaView>
  );
};

export default index;
