import React from 'react';
import { AuthProvider } from './AuthProvider';
import { StatusBar } from 'expo-status-bar';



import Routes from './Routes';
export default function Providers() {
  return (
    <AuthProvider>
          <StatusBar style="light" />
      <Routes />
    </AuthProvider>
  );
}