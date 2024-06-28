import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View } from 'react-native';
import { Icon, Icons } from '@jobbi/ui/src/components';
import HomeStack from '../modules/home/routes/HomeStack';
import useTheme from '@jobbi/ui/src/theme/useTheme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExampleComponent = () => {
  return <></>;
};

const AccountStack = () => (
  <Stack.Navigator initialRouteName="Account">
    <Stack.Screen
      name="example"
      component={ExampleComponent}
      options={() => ({ headerShown: false })}
    />
    <Stack.Screen
      name="example1"
      component={ExampleComponent}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'white' },
        headerTintColor: 'black',
        title: 'AJUSTES',
      }}
    ></Stack.Screen>
  </Stack.Navigator>
);

const pages = [
  {
    label: 'Recompensas',
    type: Icons.Ionicons,
    activeIcon: 'medal',
    inActiveIcon: 'medal-outline',
    component: AccountStack,
  },
  {
    label: 'Mensajes',
    type: Icons.Ionicons,
    activeIcon: 'chatbox-ellipses',
    inActiveIcon: 'chatbox-ellipses-outline',
    component: AccountStack,
  },
  {
    label: 'HomeStack',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: HomeStack,
  },
  {
    label: 'Ordenes',
    type: Icons.Ionicons,
    activeIcon: 'clipboard',
    inActiveIcon: 'clipboard-outline',
    component: AccountStack,
  },
  {
    label: 'Perfil',
    type: Icons.Ionicons,
    activeIcon: 'person-circle',
    inActiveIcon: 'person-circle-outline',
    component: AccountStack,
  },
];

export const PrivateRoutes = () => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: colors.background,
            position: 'absolute',
            bottom: 16,
            right: 16,
            left: 16,
            height: 70,
            shadowColor: 'black',
            shadowRadius: 20,
            borderRadius: 50,
            shadowOpacity: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        })}
      >
        {pages.map((page, index) => {
          return (
            <Tab.Screen
              key={'tab-' + index}
              name={page.label}
              component={page.component}
              options={{
                tabBarShowLabel: false,
                tabBarAllowFontScaling: true,
                headerShown: false,
                tabBarIcon: ({ focused }: { focused: boolean }) => (
                  <View style={{ alignItems: 'center' }}>
                    <Icon
                      type={page.type}
                      name={focused ? page.activeIcon : page.inActiveIcon}
                      color={focused ? colors.primary : colors.tertiary}
                      size={focused ? 35 : 25}
                    />
                  </View>
                ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
};
