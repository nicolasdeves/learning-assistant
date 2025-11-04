import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = "Carregando..." }: LoadingProps) {
  return (
    <View style={localStyles.overlay}>
      <View style={localStyles.box}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={localStyles.text}>{message}</Text>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 30,
    borderRadius: 16,
    alignItems: "center",
    gap: 12,

    // sombra clean iOS/Android
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },
  text: {
    marginTop: 6,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});
