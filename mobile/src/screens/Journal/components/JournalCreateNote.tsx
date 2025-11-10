import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { styles } from "../styles";
import { Base } from "../../Base/Base";
import { RootStackParamList } from "../../../interfaces/navbar";
import { makeNavigation } from "../../../service/navigation.service";
import { addUserJournalNote } from "../../../service/journal.service";
import { getLoggedUserId } from "../../../auth/authentication";

export function JournalCreateNote() {
  const [text, setText] = useState("");

    type JournalNotesRouteProp = RouteProp<RootStackParamList, 'JournalCreateNote'>;
  
    const route = useRoute<JournalNotesRouteProp>();
    const navigation = makeNavigation();
    const { topic, message } = route.params;

    const saveNote = async() => {
      const googleUserId = await getLoggedUserId();
      console.log('entrou save note')
      googleUserId && await addUserJournalNote(text, topic.id, null, googleUserId);
      navigation.navigate("JournalNotes", { topic: topic })

    }
  return (
    <Base>
      <Text style={styles.pageTitle}>Nova anotação</Text>
      <Text style={styles.subtitle}>{topic.name}</Text>

      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={message ? message : "Escreva seus pontos fortes, fracos, dúvidas, progresso…"}
        multiline
        style={styles.input}
      />

      <TouchableOpacity
        onPress={saveNote}
        style={styles.saveButton}
      >
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </Base>
  );
}
