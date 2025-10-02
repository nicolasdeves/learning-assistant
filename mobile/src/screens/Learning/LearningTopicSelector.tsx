import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Option } from "../../interfaces/option";
import { FloatingCard } from "../../components/FloatingCard/FloatingCard";
import { AnimatedButton } from "../../components/AnimatedButton/AnimatedButton";
import { Select } from "../../components/Select/Select";

export function LearningTopicSelector({ topicsOptions, levelOptions, selectTopic, selectLevel, addTopicToUser }: {
  topicsOptions: Option[];
  levelOptions: Option[];
  selectTopic: (value: number | string) => void;
  selectLevel: (value: string) => void;
  addTopicToUser: () => void;
}) {
  return (
    <View style={styles.wrapper}>
      <FloatingCard>
        <Text style={styles.title}>✨ Escolha um tópico para começar</Text>
        <Text style={styles.content}>Selecione um tópico para começar a aprender!</Text>

        <Select label="Tópicos disponíveis" options={topicsOptions} onValueChange={(value) => selectTopic(value)} />
        <Select label="Escolha o nível" options={levelOptions} onValueChange={(value) => selectLevel(String(value))} />

        <AnimatedButton title="Começar Aprendizado" onPress={addTopicToUser} />
      </FloatingCard>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignSelf: "center", width: "90%" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  content: { fontSize: 16, color: "#555" },
});
