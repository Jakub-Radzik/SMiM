import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoriesScreen} from './src/Screens/Categories';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Tabs'}
          options={{headerShown: false}}
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
