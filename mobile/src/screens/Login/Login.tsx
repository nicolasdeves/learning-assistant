import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { loginWithGoogle } from "../../auth/authentication";
import { SafeAreaView } from "react-native-safe-area-context";
import { makeNavigation } from "../../service/navigation.service";
import { assets } from "../../assets/assets";

export function Login() {
  const navigation = makeNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Logo */}
        <Image
          source={assets.brain}
          style={styles.logo}
        />

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>
          Bora evoluir seu conhecimento
        </Text>

        <TouchableOpacity style={styles.googleButton} onPress={() => loginWithGoogle(navigation)}>
          <Image
            source={assets.google} // ícone do Google
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Entrar com Google</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 28,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: '#68c6fdff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    width: '100%',
    paddingRight: 30,
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
    marginLeft: 14,
  },
  googleText: {
    fontSize: 16,
    color: "#222",
    fontWeight: "600",
    textAlign: 'center'
  },
});
