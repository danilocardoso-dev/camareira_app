import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import { globalStyles, titleStyles, inputStyles, buttonStyles, textStyles, colors } from '../styles/styles';

interface CadastroScreenProps {
  onSwitchToLogin: () => void;
}

const CadastroScreen: React.FC<CadastroScreenProps> = ({ onSwitchToLogin }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    if (nome && email && senha && confirmarSenha) {
      if (senha === confirmarSenha) {
        // Aqui você pode adicionar a lógica de cadastro
        Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
      } else {
        Alert.alert('Erro', 'As senhas não coincidem.');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <ScrollView contentContainerStyle={[globalStyles.container, styles.cadastroContainer]}>
      <Text style={titleStyles.title}>Cadastro</Text>
      <TextInput
        style={inputStyles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />
      <TextInput
        style={inputStyles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={inputStyles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        style={inputStyles.input}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={[buttonStyles.button, buttonStyles.buttonPrimary]} onPress={handleCadastro}>
        <Text style={buttonStyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSwitchToLogin}>
        <Text style={[textStyles.text, styles.linkText]}>Já tem conta? Faça login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cadastroContainer: {
    justifyContent: 'center',
    paddingVertical: 50,
  },
  linkText: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CadastroScreen;