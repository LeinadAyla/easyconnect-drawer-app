import * as React from 'react';
// 1. Importa os componentes de navegação necessários
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

// NOVO: Importe a biblioteca de ícones
import Ionicons from '@expo/vector-icons/Ionicons'; 

// 2. Importa as Telas
import HomeScreen from './screens/HomeScreen';
import SobreScreen from './screens/SobreScreen';
import ContatoScreen from './screens/ContatoScreen';

// 3. Inicializa o Navigator
const Drawer = createDrawerNavigator();

// Componente principal do App
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

        {/* 5. Configura as Telas (Rotas) com Ícones */}

        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Início',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
            ),
          }} 
        />

        <Drawer.Screen 
          name="Sobre" 
          component={SobreScreen} 
          options={{ 
            title: 'Sobre Nós',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen 
          name="Contato" 
          component={ContatoScreen} 
          options={{ 
            title: 'Fale Conosco',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="call" size={size} color={color} />
            ),
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}