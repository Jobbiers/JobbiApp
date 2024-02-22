import React, { useEffect, useRef } from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text } from 'react-native';
import Icon, { Icons } from '@repo/ui/src/components/Icon';

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
    route: 'Example',
    label: 'Recompensas',
    type: Icons.Ionicons,
    activeIcon: 'medal',
    inActiveIcon: 'medal-outline',
    component: AccountStack,
  },
  {
    route: 'Example2',
    label: 'Mensajes',
    type: Icons.Ionicons,
    activeIcon: 'chatbox-ellipses',
    inActiveIcon: 'chatbox-ellipses-outline',
    component: AccountStack,
  },
  {
    route: 'Example3',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: AccountStack,
  },
  {
    route: 'Example4',
    label: 'Ordenes',
    type: Icons.Ionicons,
    activeIcon: 'clipboard',
    inActiveIcon: 'clipboard-outline',
    component: AccountStack,
  },
  {
    route: 'Example5',
    label: 'Perfil',
    type: Icons.Ionicons,
    activeIcon: 'person-circle',
    inActiveIcon: 'person-circle-outline',
    component: AccountStack,
  },
];

export const PrivateRoutes = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Example3"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: 'white',
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
              name={page.route}
              component={page.component}
              options={{
                tabBarShowLabel: false,
                tabBarAllowFontScaling: true,
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: 'center' }}>
                    <Icon
                      type={page.type}
                      name={focused ? page.activeIcon : page.inActiveIcon}
                      color={focused ? '#6F14E8' : '#afa9c2'}
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
