import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Menu from "./components/Menu";
import { Tela } from "./types";

import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';

import LoginScreen from "./screens/Login";
import Loading from "./screens/Loading";
import Main from "./screens/Main";
import Missing from './screens/Missing';
import Exercise from './screens/Exercise';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [telaAtual, setTelaAtual] = useState<Tela>(Tela.LOADING)

  const [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  useEffect(() => {
    setTimeout(() => {
      setTelaAtual(Tela.LOGIN)
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar hidden={true} />

      {telaAtual === Tela.LOADING && (
        <Loading />
      )}

      {telaAtual === Tela.LOGIN && (
        <LoginScreen changeLogin={setIsLogged} changeScreen={setTelaAtual} />
      )}

      {telaAtual === Tela.MAIN && isLogged && (
        <LinearGradient colors={['#FFFFFF', '#EEF7FF']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} style={styles.container}>
          <Menu changeLogin={setIsLogged} changeScreen={setTelaAtual} />
          <View style={styles.withMenuContainer}>
            <Main changeScreen={setTelaAtual} />
          </View>
        </LinearGradient>
      )}

      {telaAtual === Tela.EXERCISE && isLogged && (
        <LinearGradient colors={['#FFFFFF', '#EEF7FF']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} style={styles.container}>
          <Menu changeLogin={setIsLogged} changeScreen={setTelaAtual} />
          <View style={styles.withMenuContainer}>
            <Exercise />
          </View>
        </LinearGradient>
      )}

      {telaAtual !== Tela.LOADING && telaAtual !== Tela.LOGIN && !(telaAtual === Tela.MAIN && isLogged) && !(telaAtual === Tela.EXERCISE && isLogged) && (
        <LinearGradient colors={['#FFFFFF', '#EEF7FF']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} style={styles.container}>
          <Missing changeLogin={setIsLogged} changeScreen={setTelaAtual}/>
        </LinearGradient>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  withMenuContainer: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    zIndex: 0
  }
});