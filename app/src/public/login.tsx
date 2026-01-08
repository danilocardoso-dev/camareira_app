import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { globalStyles, titleStyles, inputStyles, buttonStyles, textStyles, colors } from '../styles/styles';

interface LoginScreenProps {
  onSwitchToCadastro: () => void;
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onSwitchToCadastro, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      if (username === 'admin' && password === '123') {
        Alert.alert('Login', 'Login realizado com sucesso!');
        onLoginSuccess(); // Navega para o dashboard
      } else {
        Alert.alert('Erro', 'Usuário ou senha incorretos.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={[globalStyles.container, styles.loginContainer]}>
      <Text style={titleStyles.title}>Camareira App</Text>
      <TextInput
        style={inputStyles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={inputStyles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={[buttonStyles.button, buttonStyles.buttonPrimary]} onPress={handleLogin}>
        <Text style={buttonStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSwitchToCadastro}>
        <Text style={[textStyles.text, styles.linkText]}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    justifyContent: 'center',
  },
  linkText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;