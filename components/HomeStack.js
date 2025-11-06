// components/HomeStack.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SobreScreen from '../screens/SobreScreen';
import ContatoScreen from '../screens/ContatoScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator 
      initialRouteName="HomeBase" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#005a8d',
        },
        headerTintColor: '#fff',
        // Opcional: Remova 'headerShown: false' se quiser dois cabeçalhos (Drawer e Stack)
        headerShown: false, 
      }}
    >
      <Stack.Screen 
        name="HomeBase" 
        component={HomeScreen} 
        options={{ title: 'Início' }}
      />
      
      <Stack.Screen 
        name="Sobre" 
        component={SobreScreen} 
        options={{ title: 'Sobre Nós' }}
      />
      
      <Stack.Screen 
        name="Contato" 
        component={ContatoScreen} 
        options={{ title: 'Fale Conosco' }}
      />
      
    </Stack.Navigator>
  );
}