// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// 2. Importa as Telas
import HomeScreen from './screens/HomeScreen';
import SobreScreen from './screens/SobreScreen';
import ContatoScreen from './screens/ContatoScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerStyle: { backgroundColor: '#005a8d' },
            headerTintColor: '#fff',
            drawerActiveTintColor: '#005a8d',
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Drawer.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre Nós' }} />
        <Drawer.Screen name="Contato" component={ContatoScreen} options={{ title: 'Fale Conosco' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}