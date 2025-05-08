import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, useColorScheme, View } from 'react-native';

import { CustomIcon, type MyIconName } from '@/components/CustomIcon';
import { HapticTab } from '@/components/HapticTab';

type TabIconProps = {
  icon: MyIconName;
  label: string;
  color: string;
  focused: boolean;
};

const TabIcon = ({ icon, label, color, focused }: TabIconProps) => {
  const activeColor = focused ? color : '#888';

  return (
  <View className="flex items-center justify-center gap-2 w-20 h-20 ">
    <CustomIcon size={28} name={icon} color={activeColor} />
    <Text
      className={`${focused ? 'font-psemibold' : 'font-pregular'} text-sm `}
      style={{ color: activeColor }}
    >
      {label}
    </Text>
  </View>
)};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#fff' : '#0a7ea4',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#fff' : '#cdcde0',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="tab1"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="home" label="Home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: 'Send',
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon="paperplane.fill" label="Send" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
