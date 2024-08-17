import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { RootState } from "@/redux/rootState";
import { useSelector } from "react-redux";
import TodoCard from "@/components/todoCard";

const index = () => {
  const todo = useSelector((state: RootState) => state.todo.list);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    // setRefreshing(false);
  };
  return (
    <SafeAreaView className="h-full bg-neutralLighter p-4">
      <FlatList
        data={todo}
        // @ts-ignore
        keyExtractor={(item) => item.id.toString()}
        renderItem={({
          item,
          index,
        }: {
          item: { title: string; description: string };
          index: number;
        }) => (
          <TodoCard
            Title={item.title}
            index={index}
            description={item.description}
          />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-center flex-row mb-6">
              <View>
                <Text className="font-bold_font tracking-tighter text-3xl text-primary">
                  Hello user,
                </Text>
                <Text className="font-light_font tracking-tighter mt-2 text-5xl text-primary">
                  You have {todo.length} incomplete task
                </Text>
              </View>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default index;
