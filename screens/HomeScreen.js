// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// O 'navigation' é uma prop (propriedade) que o Drawer Navigator passa para todos os seus componentes de tela.
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à EasyConnect!</Text>
      <Text style={styles.subText}>Tela Inicial</Text>
      
      {/* Botão para navegar para a tela 'Sobre' */}
      <Button
        title="Ir para Sobre"
        onPress={() => navigation.navigate('Sobre')} // Usa o nome da rota definida no App.js
      />
      
      {/* Botão Opcional para abrir o menu lateral */}
       <Button
        title="Abrir Menu Lateral"
        onPress={() => navigation.openDrawer()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  }
});

export default HomeScreen;