import { Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { TabIcon } from "@/components/tabIcons";
import icons from "@/constants/icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.neutralDarker,
        tabBarStyle: {
          backgroundColor: Colors.neutralLighter,
          height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name={"Home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.add}
              color={color}
              name={"create"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="completedTodo"
        options={{
          title: "Completed Todo",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.cup}
              color={color}
              name={"completedTodo"}
              focused={focused}
            />
          ),
        }}
      />
      
    </Tabs>
  );
}
