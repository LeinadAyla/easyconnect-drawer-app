import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

// O componente CustomInput recebe props genéricas (como placeholder, value, onChangeText)
// e duas props específicas para o nosso caso: isInvalid e errorText
export default function CustomInput({
    isInvalid = false, // Prop para saber se a validação falhou (padrão: false)
    errorText = "",    // Prop para a mensagem de erro a ser exibida
    style,             // Permite passar estilos adicionais (ex: textArea)
    ...restProps       // Captura todas as outras props do TextInput (value, onChangeText, keyboardType, etc.)
}) {
    return (
        <View style={styles.container}>
            <TextInput
                // Aplica o estilo base, o estilo de erro condicional e qualquer estilo adicional (style)
                style={[styles.input, isInvalid && styles.inputError, style]}
                {...restProps} // Espalha todas as props restantes (value, placeholder, editable, etc.)
            />

            {/* Exibe a mensagem de erro se o campo for inválido */}
            {isInvalid && (
                <Text style={styles.errorText}>{errorText}</Text>
            )}
        </View>
    );
}

// Estilos padrão do Input (copiados de ContatoScreen.js)
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 0, // A margem será controlada pelo estilo dentro do componente
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15, // Mantemos a margem inferior padrão aqui
        fontSize: 16,
    },
    // Estilo de erro
    inputError: {
        borderColor: 'red',
        borderWidth: 2,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: '5%',
    },
});