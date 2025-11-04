import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Base } from "../Base/Base";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { makeNavigation } from "../../service/navigation.service";

const mockTopics = [
  { id: 1, name: "Grammar B1" },
  { id: 2, name: "Vocabulary Basics" },
  { id: 3, name: "Listening Intro" },
];

export function JournalTopics() {
  const navigation = makeNavigation();

  return (
    <Base>
      <Text style={styles.pageTitle}>Diário</Text>
      <Text style={styles.subtitle}>Selecione o tópico</Text>

      <ScrollView style={{ marginTop: 10 }}>
        {mockTopics.map(t => (
          <TouchableOpacity
            key={t.id}
            style={styles.listItem}
            onPress={() => navigation.navigate("JournalNotes", { topic: t })}
          >
            <Text style={styles.itemText}>{t.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Base>
  );
}
