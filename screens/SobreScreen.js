// screens/SobreScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SobreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre a EasyConnect</Text>
      <Text style={styles.subText}>Somos a solução em comunicação interna.</Text>
      
      {/* Botão para navegar para a tela 'Contato' */}
      <Button
        title="Ir para Contato"
        onPress={() => navigation.navigate('Contato')}
      />
      
       <Button
        title="Voltar"
        onPress={() => navigation.goBack()} // Volta para a tela anterior na pilha
      />
    </View>
  );
};

// ... (Estilos são os mesmos da tela Home para manter a consistência, pode ajustar se quiser)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
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

export default SobreScreen;