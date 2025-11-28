import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas
import HomeScreen from './src/screens/HomeScreen';
import StateScreen from './src/screens/StateScreen';
import StyleTableScreen from './src/screens/StyleTableScreen';
import ApiScreen from "./src/screens/ApiScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2c3e50' }, // Cor da barra superior
          headerTintColor: '#fff', // Cor do texto da barra
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="State"
          component={StateScreen}
          options={{ title: 'Aula: Hooks & State' }}
        />
        <Stack.Screen
          name="Style"
          component={StyleTableScreen}
          options={{ title: 'Aula: Estilização' }}
        />
          <Stack.Screen
              name="Api"
              component={ApiScreen}
              options={{title: 'Hooks: useEffect + API'}}
              />


      </Stack.Navigator>
    </NavigationContainer>
  );
}