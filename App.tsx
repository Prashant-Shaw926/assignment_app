// App Entry Point

// NativeWind global CSS
import './global.css';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    // SafeAreaProvider
    <SafeAreaProvider>
      {/* ── NavigationContainer */}
      <NavigationContainer>
        {/* ── AppNavigator */}
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}