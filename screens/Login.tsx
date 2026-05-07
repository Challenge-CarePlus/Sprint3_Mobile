import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar } from "react-native";
import { DefaultProps, Tela } from "../types";

export default function LoginScreen({ changeLogin, changeScreen }: DefaultProps) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string>("");

  function handleLogin() {
    if (usuario === "dev" && senha === "123") {
      changeLogin(true);
      changeScreen(Tela.MAIN)
    } else {
      setError("Usuario ou senha incorretos!");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require("./../assets/waves1.png")} style={styles.waves} />
      <View style={styles.loginContainer}>
        <View style={styles.iconFieldContainer}>
          <Image source={require("./../assets/icon.png")} style={styles.iconImage} />
          <TextInput
            placeholder="Usuario"
            style={styles.loginInput}
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.loginInput}
            value={senha}
            onChangeText={setSenha}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Logar</Text>
        </TouchableOpacity>
        {error !== "" && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  waves: {
    position: 'absolute',
    bottom: 0,
    width: "100%",
    zIndex: 0
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    gap: 10,
    top: -70
  },
  iconFieldContainer: {
    width: "100%",
    alignItems: 'center',
    gap: 10,
  },
  iconImage: {
    width: 270,
    height: 270,
    borderRadius: 100
  },
  loginInput: {
    backgroundColor: "#4887E3",
    borderRadius: 5,
    paddingHorizontal: 20,
    width: '100%',
    height: 45,
    color: "#fff",
    fontWeight: "500",
    fontFamily: 'Righteous_400Regular'
  },
  loginButton: {
    backgroundColor: "#284A7D",
    width: '60%',
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center'
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600"
  }
});