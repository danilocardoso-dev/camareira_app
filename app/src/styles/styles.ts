import { StyleSheet } from 'react-native';

// Cores padrão
export const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40',
  background: '#f5f5f5',
  text: '#212529',
  border: '#dee2e6',
};

// Estilos globais
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

// Títulos
export const titleStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 15,
  },
});

// Textos
export const textStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 24,
  },
  textSmall: {
    fontSize: 14,
    color: colors.text,
  },
  textMuted: {
    color: colors.secondary,
  },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
});

// Botões
export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  buttonSuccess: {
    backgroundColor: colors.success,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: colors.light,
  },
  buttonTextDisabled: {
    color: colors.secondary,
  },
});

// Inputs
export const inputStyles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: colors.text,
    marginBottom: 15,
  },
  textarea: {
    height: 100,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    color: colors.text,
    textAlignVertical: 'top',
  },
});

// Utilitários
export const utilityStyles = StyleSheet.create({
  mb1: { marginBottom: 5 },
  mb2: { marginBottom: 10 },
  mb3: { marginBottom: 15 },
  mb4: { marginBottom: 20 },
  mt1: { marginTop: 5 },
  mt2: { marginTop: 10 },
  mt3: { marginTop: 15 },
  mt4: { marginTop: 20 },
  p1: { padding: 5 },
  p2: { padding: 10 },
  p3: { padding: 15 },
  p4: { padding: 20 },
  bgLight: { backgroundColor: colors.light },
  bgDark: { backgroundColor: colors.dark },
  bgPrimary: { backgroundColor: colors.primary },
});