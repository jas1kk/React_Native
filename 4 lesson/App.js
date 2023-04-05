import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import HomeScreen from './src/Screens/HomeScreen';
import ProductsScreen from './src/Screens/ProductsScreen';
import CartScreen from './src/Screens/CartScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={ProductsScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={CartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={ProductsScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#2F80ED',
          inactiveTintColor: '#BDBDBD',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
