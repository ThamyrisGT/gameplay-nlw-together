import React from 'react';
import { StatusBar , LogBox} from 'react-native';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';

import {AuthProvider} from './src/hooks/auth';

import{Routes} from './src/routes';
import {Background} from './src/components/Background';


LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  // segura a tela de splash até que as fontes estejam carregadas
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    // pode colocar tbm <Fragment> e importar la em cima do react se preferir
    //<> 
      <Background>
      <StatusBar
        barStyle="light-content"      // para clarear deixar branquinho os ícones do celular em cima, porém aplica um background               
        backgroundColor="transparent" //entao utlizar esse elemento. quando aplicado fica branco, não só transparente
        translucent // para o conteudo colar la em cima,e ocuparr a tela toda e nao deixar a barrinha de cima toda branca
      />
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </Background>
  );
}




// expo init nomeDoArquivo para inicializar um aplicativo