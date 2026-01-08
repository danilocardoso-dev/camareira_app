import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoginScreen from './src/public/login';
import CadastroScreen from './src/public/cadastro';
import Dashboard from './src/camareira/componentes/dashbord';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'cadastro' | 'dashboard'>('login');

  return (
    <>
      {screen === 'login' && (
        <LoginScreen
          onSwitchToCadastro={() => setScreen('cadastro')}
          onLoginSuccess={() => setScreen('dashboard')}
        />
      )}
      {screen === 'cadastro' && (
        <CadastroScreen onSwitchToLogin={() => setScreen('login')} />
      )}
      {screen === 'dashboard' && (
        <Dashboard />
      )}
      <StatusBar style="auto" />
    </>
  );
}
