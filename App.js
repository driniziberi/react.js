import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import CarsList from './screens/Test';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Test"
        screenOptions={{
          title:"App"
        }}>
      
        
        <Stack.Screen 
          name="Home" 
          component={MainScreen} 
         
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

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});