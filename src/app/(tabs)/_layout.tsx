import { Tabs } from 'expo-router';
import { BroadcastIcon } from '@/src/components/icons/BroadcastIcon';
import { CalendarIcon } from '@/src/components/icons/CalendarIcon';
import { HomeIcon } from '@/src/components/icons/HomeIcon';
import { ProjectIcon } from '@/src/components/icons/ProjectIcon';
import { ShopIcon } from '@/src/components/icons/ShopIcon';
import { Color } from '@/src/lib/constants/color';
import { calendarUrl, headerHeight, tabBarHeight } from '@/src/lib/constants/common';
import { TabBarLabel } from '@/src/components/TabBarLabel';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HeaderLeft } from '@/src/components/layouts/HeaderLeft';

export default function TabLayout() {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Color.DarkBlue,
        tabBarInactiveTintColor: Color.Blue,
        tabBarStyle: {
          backgroundColor: Color.LightBlue,
          height: tabBarHeight + bottom,
        },
        headerTitleStyle: {
          fontFamily: 'Inter_500Medium',
          fontSize: 18,
          fontWeight: 500,
          color: '#0C3955',
        },
        headerStyle: {
          backgroundColor: Color.LightGray,
          borderWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
          height: headerHeight + top,
        },
      }}
      initialRouteName="(home)/index"
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
          title: 'Трансляции',
          headerTitle: 'Трансляции',
          tabBarIcon: ({ color }) => <BroadcastIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
          headerLeft: () => {
            return <HeaderLeft href="(home)" />;
          },
        }}
      />
      <Tabs.Screen
        name="(broadcasts)/[streamName]"
        options={{
          href: null,
          headerTitle: 'Название трансляции',
          headerLeft: () => {
            return <HeaderLeft href="(broadcasts)" />;
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
          headerLeft: () => {
            return <HeaderLeft href="(home)" />;
          },
        }}
      />
      <Tabs.Screen
        name="(materials)/index"
        options={{
          href: null,
          title: 'Материалы',
          headerTitle: 'Полезная информация',
          tabBarIcon: ({ color }) => <ProjectIcon color={color} />,
          tabBarLabel: ({ children, focused }) => {
            return <TabBarLabel focused={focused}>{children}</TabBarLabel>;
          },
          headerLeft: () => {
            return <HeaderLeft href="(home)" />;
          },
        }}
      />
      <Tabs.Screen
        name="(materials)/[materialsFolderId]"
        options={{
          href: null,
          headerLeft: () => {
            return <HeaderLeft href="(materials)" />;
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
