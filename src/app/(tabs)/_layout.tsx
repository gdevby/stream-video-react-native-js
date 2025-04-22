import { BroadcastIcon } from '@/src/components/icons/BroadcastIcon';
import { HomeIcon } from '@/src/components/icons/HomeIcon';
import { ProjectIcon } from '@/src/components/icons/ProjectIcon';
import { Color } from '@/src/lib/constants/Color';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Color.DarkBlue,
        tabBarInactiveTintColor: Color.Blue,
        tabBarStyle: {
          height: 55,
          backgroundColor: Color.LightBlue,
        },
        tabBarLabelStyle: {
          fontSize: 8,
          fontWeight: '400',
          lineHeight: 12,
        },
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          headerShown: false,
          title: 'Дом',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="(broadcasts)/index"
        options={{
          headerShown: false,
          title: 'Трансляции',
          tabBarIcon: ({ color }) => <BroadcastIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="(projects)/index"
        options={{
          headerShown: false,
          title: 'Проекты',
          tabBarIcon: ({ color }) => <ProjectIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
