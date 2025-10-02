import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Option } from "../../interfaces/option";
import { FloatingCard } from "../../components/FloatingCard/FloatingCard";
import { Select } from "../../components/Select/Select";
import { AnimatedButton } from "../../components/AnimatedButton/AnimatedButton";

export function LearningTopicChanger({ topicsOptions, levelOptions, selectTopic, selectLevel, changeTopic, goBack }: {
  topicsOptions: Option[];
  levelOptions: Option[];
  selectTopic: (value: number | string) => void;
  selectLevel: (value: string) => void;
  changeTopic: () => void;
  goBack: () => void;
}) {
  return (
    <View style={styles.wrapper}>
      <FloatingCard>
        <Text style={styles.title}>✨ Trocar Tópico</Text>
        <Text style={styles.content}>Selecione um novo tópico para aprender!</Text>

        <Select label="Escolha o tópico" options={topicsOptions} onValueChange={(value) => selectTopic(value)} />
        <Select label="Escolha o nível" options={levelOptions} onValueChange={(value) => selectLevel(String(value))} />

        <AnimatedButton title="Trocar tópico" onPress={changeTopic} />
        <AnimatedButton title="Voltar" onPress={goBack} />
      </FloatingCard>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignSelf: "center", width: "90%" },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  content: { fontSize: 16, color: "#555" },
});
