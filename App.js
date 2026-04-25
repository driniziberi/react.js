import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import CarsList from './screens/Test';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import SportScreen from './screens/SportScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen
          name='Menu'
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name='Home'
          component={MainScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='List'
          component={ListScreen}
          options={{ title: 'List Screen' }}
        />
        <Stack.Screen
          name='Exercise'
          component={ExerciseScreen}
          options={{ title: 'Exercise Screen' }}
        />
        <Stack.Screen
          name='Test'
          component={CarsList}
          options={{ title: 'Cars List' }}
        />

        <Stack.Screen
          name='Sport'
          component={SportScreen}
          options={{ title: 'Sport Screen' }}
        />
        <Stack.Screen
          name='Button'
          component={ButtonScreen}
          options={{ title: 'Button Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}