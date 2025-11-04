// screens/ContatoScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContatoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fale Conosco</Text>
      <Text style={styles.subText}>Email: contato@easyconnect.com</Text>
      
      {/* Botão com navegação avançada: Volta duas telas na pilha (de Contato para Home) */}
      <Button
        title="Voltar para Home (pop 2)"
        // Se a pilha for [Home -> Sobre -> Contato], o pop(2) volta para Home.
        onPress={() => navigation.pop(2)} 
      />
      
      <Button
        title="Voltar (goBack)"
        onPress={() => navigation.goBack()} // Volta apenas para a tela 'Sobre'
      />
    </View>
  );
};

// ... (Estilos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
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

export default ContatoScreen;