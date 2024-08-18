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

const index = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state: RootState) => state.todo.list);
  const completedTodo = useSelector(
    (state: RootState) => state.todo.completedTodo
  );
  const [refreshing, setRefreshing] = useState(false);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem("todos");
      const completedTodo = await AsyncStorage.getItem("completedTodos");
      if (storedTodos && completedTodo) {
        const parsedTodos = JSON.parse(storedTodos);
        const compTodos = JSON.parse(completedTodo);

        dispatch(TodoAction.setTodos(parsedTodos));
        dispatch(TodoAction.setCompletedTodos(compTodos));
      }
    } catch (error) {
      console.error("Failed to load todos from AsyncStorage", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTodos();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="h-full bg-neutralLighter p-4">
      <FlatList
        // @ts-ignore
        data={todo}
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
                    source={icons.medal}
                    tintColor={Colors.primary}
                    alt="Medal"
                    className="w-7 h-7"
                  />
                  <Text className="font-ExtraBold_font tracking-tighter text-2xl text-primary">
                    Hello user,
                  </Text>
                </View>
                <Text className="font-light_font tracking-tighter mt-3 text-3xl text-primary">
                  You have <Text className="font-bold_font">{todo.length}</Text>{" "}
                  incomplete and{" "}
                  <Text className="font-bold_font">{completedTodo.length}</Text>{" "}
                  completed todo.
                </Text>
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

export default index;
