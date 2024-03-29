import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoriesScreen} from './src/Screens/Categories';
import {ProductsScreen} from './src/Screens/Products';
import {ProductDetailsScreen} from './src/Screens/ProductDetails';
import {Text} from './src/components/Text';
import {VideosScreen} from './src/Screens/Videos';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size}) => <Text>🏠</Text>,
          tabBarLabel: ({focused}) => <Text>Home</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({focused, size}) => <Text>🛍️</Text>,
          tabBarLabel: ({focused}) => <Text>Categories</Text>,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Main'}
          options={{headerShown: false}}
          component={BottomNavigator}
        />
        <Stack.Screen name={'Products'} component={ProductsScreen} />
        <Stack.Screen
          name={'ProductDetails'}
          component={ProductDetailsScreen}
        />
        <Stack.Screen name={'Videos'} component={VideosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
