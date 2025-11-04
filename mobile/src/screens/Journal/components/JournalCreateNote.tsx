import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { Base } from "../../Base/Base";

export function JournalCreateNote() {
  const [text, setText] = useState("");
  const route = useRoute();
  const nav = useNavigation();
  const { topic }: any = route.params;

  return (
    <Base>
      <Text style={styles.pageTitle}>Nova anotação</Text>
      <Text style={styles.subtitle}>{topic.name}</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Escreva seus pontos fortes, fracos, dúvidas, progresso…"
        multiline
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => nav.goBack()}
        style={styles.saveButton}
      >
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </Base>
  );
}
