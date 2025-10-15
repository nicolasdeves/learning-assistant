import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = "Carregando..." }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}