import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import CustomInput from '../components/CustomInput'; // Importação do novo componente!

// Função de validação de e-mail (Regex)
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    return re.test(String(email).toLowerCase());
};

export default function ContatoScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailChange = (text) => {
        setEmail(text);
        if (text.length > 0) {
            setIsEmailValid(validateEmail(text));
        } else {
            setIsEmailValid(true);
        }
    };

    const handleSubmit = async () => {
        setError(null);

        // 1. Validação de Campos Vazios
        if (!nome || !email || !mensagem) {
            Alert.alert("Erro de Validação", "Por favor, preencha todos os campos.");
            return;
        }

        // 2. Validação de Email com Regex
        if (!validateEmail(email)) {
            Alert.alert("Erro de Email", "Por favor, insira um endereço de e-mail válido.");
            return;
        }

        setIsLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Versão para GARANTIR o sucesso e testar a navegação
            const success = true; 
            // Para retornar ao 80% de sucesso, altere para: const success = Math.random() < 0.8;

            if (success) {
                // SOLUÇÃO PARA O WEB: Alert simples e navegação/limpeza forçada
                Alert.alert("Feedback Enviado!", `Obrigado, ${nome}! O seu pedido foi registrado.`);

                // Limpeza de estado
                setNome('');
                setEmail('');
                setMensagem('');

                // Navegação forçada após o alert (pequeno delay)
                setTimeout(() => navigation.goBack(), 100);

            } else {
                throw new Error("Falha de conexão. Tente novamente mais tarde.");
            }

        } catch (err) {
            console.error("Erro no envio:", err);
            setError(err.message || "Erro desconhecido ao enviar.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fale Conosco</Text>
            <Text style={styles.subtitle}>Envie-nos uma mensagem e entraremos em contato.</Text>

            {/* Exibir mensagem de erro da API */}
            {error && <Text style={styles.apiErrorText}>Erro: {error}</Text>}

            {/* Input Nome - AGORA USANDO CustomInput */}
            <CustomInput
                placeholder="Seu Nome Completo"
                value={nome}
                onChangeText={setNome}
                editable={!isLoading}
            />

            {/* Input Email - AGORA USANDO CustomInput (com lógica de validação) */}
            <CustomInput
                placeholder="Seu Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                editable={!isLoading}
                isInvalid={!isEmailValid} // Passa o status de erro
                errorText="E-mail inválido." // Passa a mensagem de erro
            />

            {/* Input Mensagem (Área de Texto) - AGORA USANDO CustomInput */}
            <CustomInput
                placeholder="Sua Mensagem / Dúvida"
                value={mensagem}
                onChangeText={setMensagem}
                multiline={true}
                numberOfLines={4}
                editable={!isLoading}
                // Passa o estilo extra para a área de texto (textArea)
                style={styles.textArea} 
            />

            {/* Botão de Envio */}
            <View style={styles.buttonContainer}>
                <Button
                    title={isLoading ? "" : "Enviar Feedback"}
                    onPress={handleSubmit}
                    color="#005a8d"
                    disabled={isLoading}
                />
                {isLoading && (
                    <ActivityIndicator style={styles.loading} size="small" color="#fff" />
                )}
            </View>

            {/* Botão Voltar */}
            <View style={styles.buttonContainer}>
                <Button
                    title="Voltar"
                    onPress={() => navigation.goBack()}
                    color="#841584"
                    disabled={isLoading}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    // Estilos de Input (REMOVIDOS: input, inputError, errorText, pois estão em CustomInput.js)
    
    // Apenas os estilos NÃO REUTILIZÁVEIS permanecem aqui:
    textArea: { // Estilo específico para a área de texto
        height: 120,
        textAlignVertical: 'top',
        paddingTop: 10,
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
    },
    loading: {
        position: 'absolute',
        alignSelf: 'center',
        top: 10,
    },
    apiErrorText: {
        color: 'white',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
        textAlign: 'center',
    }
});