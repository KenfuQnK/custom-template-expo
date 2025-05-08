// app/+not-found.tsx
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5 bg-white dark:bg-gray-900">
        <Text className="text-3xl font-bold mb-4 text-black dark:text-white">
          This screen does not exist.
        </Text>
        <Link href="/(tabs)/tab1" className="mt-4 py-3">
          <Text className="text-primary text-base">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
