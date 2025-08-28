import React from "react";
import { 
  Modal as RNModal, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  DimensionValue 
} from "react-native";

interface Props {
  visible: boolean;
  title: string;
  content: React.ReactNode;
  width?: DimensionValue;
  height?: DimensionValue;
  onClose: () => void;
}

export function Modal({ visible, title, content, width = "80%", height = 250, onClose }: Props) {
  return (
    <RNModal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.modal, { width, height }]}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.content}>{content}</View>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
