import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { RootState } from "@/redux/rootState";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "@/components/todoCard";
import { TodoAction } from "@/redux/todoSlice";
import icons from "@/constants/icons";
import { Colors } from "@/constants/Colors";

const completedTodo = () => {
  const dispatch = useDispatch();

  const completedTodo = useSelector(
    (state: RootState) => state.todo.completedTodo
  );
  const [refreshing, setRefreshing] = useState(false);

  const loadCompletedTodos = async () => {
    try {
      const completedTodo = await AsyncStorage.getItem("completedTodos");
      if (completedTodo) {
        const compTodos = JSON.parse(completedTodo);

        dispatch(TodoAction.setCompletedTodos(compTodos));
      }
    } catch (error) {
      console.error("Failed to load todos from AsyncStorage", error);
    }
  };

  useEffect(() => {
    loadCompletedTodos();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadCompletedTodos();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="h-full bg-neutralLighter p-4">
      <FlatList
        // @ts-ignore
        data={completedTodo}
        // @ts-ignore
        keyExtractor={(item) => item.id.toString()}
        renderItem={({
          item,
          index,
        }: {
          item: {
            id: number;
            title: string;
            description: string;
            completed: boolean;
          };
          index: number;
        }) => (
          <TodoCard
            key={item.id.toString()}
            Title={item.title}
            id={item.id}
            completed={item.completed}
            index={index}
            description={item.description}
          />
        )}
        ListHeaderComponent={() => (
          <View className="px-4 p-4 space-y-6">
            <View className="justify-between items-center flex-row mb-4">
              <View>
                <View className="flex flex-row items-center gap-2 place-content-center">
                  <Image
                    source={icons.ranking}
                    tintColor={Colors.primary}
                    alt="Medal"
                    className="w-7 h-7"
                  />
                  <Text className="font-ExtraBold_font tracking-tighter text-2xl text-primary">
                    {completedTodo.length} completed Todo(s),
                  </Text>
                </View>
                <Text className="font-light_font mt-5 uppercase text-base text-neutralDarker">
                  Click the task to preview
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

export default completedTodo;
