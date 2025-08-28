import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { loginWithGoogle } from "../../auth/authentication";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        {/* <Image 
          source={require("../../assets/logo.png")} // substitua pelo seu logo
          style={styles.logo}
        /> */}

        {/* Título */}
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        {/* Botão Google */}
        <TouchableOpacity style={styles.button} onPress={loginWithGoogle}>
          {/* <Image 
            source={require("../../assets/google-icon.png")} // ícone do Google
            style={styles.icon}
          /> */}
          <Text style={styles.buttonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
    borderRadius: 60, // se quiser circular
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
});
