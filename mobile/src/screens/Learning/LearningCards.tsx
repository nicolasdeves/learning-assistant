import React from "react";
import { View, Text, StyleSheet, Alert, Dimensions } from "react-native";
import { FloatingCard } from "../../components/FloatingCard/FloatingCard";

const { width } = Dimensions.get("window");
const halfWidth = (width - 48) / 2;

export function LearningCards({ selectedTopic, tip, navigation, setIsChooseTopicOn }: any) {
  const totalActivities = 3;
  const completedActivities = 0;

  return (
    <View style={styles.container}>
      <FloatingCard style={{ width: "100%" }}>
        <Text style={styles.title}>💡 Dica do Dia</Text>
        <Text style={styles.content}>{tip}</Text>
      </FloatingCard>

      <View style={styles.row}>
        <FloatingCard style={{ width: halfWidth }} onPress={() => navigation.navigate("Activity")}>
          <Text style={styles.title}>📚 Atividades</Text>
          <Text style={styles.content}>{completedActivities}/{totalActivities} concluídas</Text>
        </FloatingCard>

        <FloatingCard style={{ width: halfWidth }}>
          <Text style={styles.title}>📅 Atividade</Text>
          <Text style={styles.content}>17/09/2025</Text>
        </FloatingCard>
      </View>

      <View style={styles.row}>
        <FloatingCard style={{ width: halfWidth }} onPress={() => setIsChooseTopicOn(true)}>
          <Text style={styles.title}>🏆 Tópico</Text>
          <Text style={styles.content}>{selectedTopic?.name}</Text>
          <Text style={styles.content}>{selectedTopic?.level || 'n tem'}</Text>
        </FloatingCard>

        <FloatingCard style={{ width: halfWidth }} onPress={() => Alert.alert("Abrindo histórico de IA")}>
          <Text style={styles.title}>🤖 Histórico IA</Text>
          <Text style={styles.content}>Ver interações anteriores e dicas geradas pela IA.</Text>
        </FloatingCard>
      </View>

      <FloatingCard style={{ width: "100%" }} onPress={() => Alert.alert("Iniciando Atividade Extra!")}>
        <Text style={styles.title}>✨ Atividade Extra</Text>
        <Text style={styles.content}>Clique aqui para começar uma atividade extra e ganhar pontos adicionais!</Text>
      </FloatingCard>

      <FloatingCard style={{ width: "100%" }} onPress={() => Alert.alert("Abrindo anotações diárias")}>
        <Text style={styles.title}>📝 Anotações Diárias</Text>
        <Text style={styles.content}>Registre seus aprendizados e observações de cada dia.</Text>
      </FloatingCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  content: { fontSize: 16, color: "#555" },
});
