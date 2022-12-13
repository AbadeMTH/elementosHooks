import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Home from './src/Telas/Home';
import { useFonts, Signika_400Regular, Signika_700Bold } from '@expo-google-fonts/signika';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    'SignikaRegular': Signika_400Regular,
    'SignikaBold': Signika_700Bold,
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={estilos.home}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  home: {
    flex: 1,
  },
});