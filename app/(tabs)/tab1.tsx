import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-slate-900">
          <Text className="text-4xl text-black dark:text-white">Hello World</Text>
          <View className="w-10 h-10 m-12 bg-red-500" />
    </View>
  )
}

export default HomeScreen;