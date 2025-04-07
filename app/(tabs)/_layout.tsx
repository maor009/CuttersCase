//File for Navigation bar 

import { Tabs } from 'expo-router';
import { Platform, View } from 'react-native';
//imported icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import React from 'react';

export default function TabLayout() {

  //The tab icon for the selected tab will be focused
  const renderTabIcon = (IconComponent: any, iconName: string, size: number) => ({ color, focused }: { color: string; focused: boolean }) => (
    <View style={{ alignItems: 'center' }}>
      {focused && (
        <View
          style={{
            height: 4,
            width: 24,
            backgroundColor: '#FFD700',
            borderRadius: 2,
            marginBottom: 4,
          }}
        />
      )}
      <IconComponent name={iconName} size={size} color={color} />
    </View>
  );

  //returning the tab component
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FFD700', // Bright yellow for active tab
        tabBarInactiveTintColor: '#888888', // Gray for inactive tabs
        tabBarStyle: {
          backgroundColor: '#1a1a1a', // Almost black background
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          position: Platform.OS === 'ios' ? 'absolute' : 'relative',
        },
      }}>
            <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: renderTabIcon(MaterialCommunityIcons, 'map-marker-radius', 28),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: '',
          tabBarIcon: renderTabIcon(Entypo, 'scissors', 24),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: renderTabIcon(Octicons, 'person', 24),
        }}
      />
    </Tabs>
  );
}