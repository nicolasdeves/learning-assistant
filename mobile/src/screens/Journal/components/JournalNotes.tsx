import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { Base } from "../../Base/Base";
import { makeNavigation } from "../../../service/navigation.service";

const mockNotes = [
  { id: 1, text: "Estudei past simple hoje, foi suave", date: "2025-11-03" },
  { id: 2, text: "Errei muito preposition, help pls", date: "2025-11-02" },
];

export function JournalNotes() {
  const route = useRoute();
  const navigation = makeNavigation();
  const { topic }: any = route.params;

  return (
    <Base>
      <Text style={styles.pageTitle}>{topic.name}</Text>
      <Text style={styles.subtitle}>Suas anotações</Text>

      <ScrollView style={{ marginTop: 12 }}>
        {mockNotes.map(n => (
          <TouchableOpacity
            key={n.id}
            onPress={() => navigation.navigate("JournalViewNote", { note: n })}
            style={styles.noteItem}
          >
            <Text style={styles.noteDate}>{n.date}</Text>
            <Text style={styles.notePreview}>{n.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate("JournalCreateNote", { topic })}
        style={styles.addButton}
      >
        <Text style={styles.addButtonText}>Nova anotação</Text>
      </TouchableOpacity>
    </Base>
  );
}
