import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import CarsList from './screens/Test';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator initialRouteName="Menu">

        <Stack.Screen 
          name="Menu" 
          component={MenuScreen} 
          options={{ title: "Menu" }}
        />

        <Stack.Screen 
          name="Home" 
          component={MainScreen} 
          options={{ title: "Home" }}
        />

        <Stack.Screen 
          name="List" 
          component={ListScreen} 
        />

        <Stack.Screen 
          name="Exercise" 
          component={ExerciseScreen} 
        />

        <Stack.Screen 
          name="Test" 
          component={CarsList} 
        />

        <Stack.Screen 
          name="Button" 
          component={ButtonScreen} 
          options={{ title: "Button Screen" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}