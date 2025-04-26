import { Tabs } from 'expo-router';
import { BroadcastIcon } from '@/src/components/icons/BroadcastIcon';
import { CalendarIcon } from '@/src/components/icons/CalendarIcon';
import { HomeIcon } from '@/src/components/icons/HomeIcon';
import { ProjectIcon } from '@/src/components/icons/ProjectIcon';
import { ShopIcon } from '@/src/components/icons/ShopIcon';
import { Color } from '@/src/lib/constants/color';
import { calendarUrl } from '@/src/lib/constants/common';
import { TabBarLabel } from '@/src/components/TabBarLabel';

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
      }}
    >
      <Tabs.Screen
        name="(home)/index"
        options={{
          headerShown: false,
          title: 'Дом',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
      />
      <Tabs.Screen
        name="(calendar)/index"
        options={{
          href: calendarUrl,
          headerShown: false,
          title: 'Календарь',
          tabBarIcon: ({ color }) => <CalendarIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
        listeners={{ tabPress: event => event.preventDefault() }}
      />
      <Tabs.Screen
        name="(broadcasts)/index"
        options={{
          headerShown: false,
          title: 'Трансляции',
          tabBarIcon: ({ color }) => <BroadcastIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
      />
      <Tabs.Screen
        name="(projects)/index"
        options={{
          title: 'Проекты',
          headerTitle: 'Наши видеопроекты',
          tabBarIcon: ({ color }) => <ProjectIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
      />
      <Tabs.Screen
        name="(materials)/index"
        options={{
          href: null,
          headerShown: false,
          title: 'Материалы',
          tabBarIcon: ({ color }) => <ProjectIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
      />
      {/* hide unused section */}
      <Tabs.Screen
        name="(shop)/index"
        options={{
          href: null,
          headerShown: false,
          title: 'Магазин',
          tabBarIcon: ({ color }) => <ShopIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
        }}
      />
    </Tabs>
  );
}
