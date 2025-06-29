import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const _layout = () => {


  
  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'saved') {
            iconName = focused ? 'book' : 'book';
          } else if (route.name === 'search') {
            iconName = focused ? 'search1' : 'search1';
          } else if (route.name === 'profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarItemStyle : {
            width: "100%",
            height : "100%",
            justifyContent: "center",
            alignItems: "center",

        },
        tabBarStyle: {
            backgroundColor: "#0f0D23",
            borderRadius: 50,
            marginHorizontal: 10,
            marginBottom: 20,
            position: "absolute",
          
        },


        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: "white",
        headerShown: false,
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
};

export default _layout;
