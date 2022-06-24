import React from 'react';
import { ScrollView } from 'react-native';
import { AuthProvider } from './AuthProvider';


import Routes from './Routes';
export default function Providers() {
  return (
    <>
    
    <AuthProvider>
      <Routes />
    </AuthProvider>
    

    </>
  );
}