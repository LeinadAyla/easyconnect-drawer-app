import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert, ActivityIndicator } from 'react-native';

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
            
            // Se quiser testar o erro, mude para: const success = Math.random() < 0.8;

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

            {error && <Text style={styles.apiErrorText}>Erro: {error}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Seu Nome Completo"
                value={nome}
                onChangeText={setNome}
                editable={!isLoading}
            />

            <TextInput
                style={[styles.input, !isEmailValid && styles.inputError]}
                placeholder="Seu Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                editable={!isLoading}
            />

            {!isEmailValid && (
                <Text style={styles.errorText}>E-mail inválido.</Text>
            )}

            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Sua Mensagem / Dúvida"
                value={mensagem}
                onChangeText={setMensagem}
                multiline={true}
                numberOfLines={4}
                editable={!isLoading}
            />

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
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
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
    textArea: {
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