import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { styles } from "../styles";
import { Base } from "../../Base/Base";
import { makeNavigation } from "../../../service/navigation.service";
import { useEffect, useState } from "react";
import { JournalResponse } from "../../../interfaces/journal";
import { getUserJournalNotes } from "../../../service/journal.service";
import { getLoggedUserId } from "../../../auth/authentication";
import { RootStackParamList } from "../../../interfaces/navbar";
import { formatDateTime } from "../../../service/god.service";

export function JournalNotes() {
  type JournalNotesRouteProp = RouteProp<RootStackParamList, 'JournalNotes'>;

  const route = useRoute<JournalNotesRouteProp>();
  const navigation = makeNavigation();
  const { topic } = route.params;
  const [journalNotes, setJournalNotes] = useState<JournalResponse[] | null>(null);

  useEffect(() => {
    console.log(topic)
    fetchJournalNotes();
  }, [])

  const fetchJournalNotes = async () => {
    const googleUserId = await getLoggedUserId();
    const journalNotes = googleUserId && await getUserJournalNotes(googleUserId, topic.id);
    setJournalNotes(journalNotes);
  }
  return (
    <Base>
      <Text style={styles.pageTitle}>{topic.name}</Text>
      <Text style={styles.subtitle}>Suas anotações</Text>

      <ScrollView style={{ marginTop: 12 }}>
        {journalNotes && journalNotes.map(note => (
          <TouchableOpacity
            key={note.id}
            onPress={() => navigation.navigate("JournalViewNote", { note: note })}
            style={styles.noteItem}
          >
            <Text style={styles.noteDate}>{formatDateTime(note.createdAt)}</Text>
            <Text style={styles.notePreview}>
              {note.content.length > 40
                ? `${note.content.slice(0, 40)}...`
                : note.content}
            </Text>
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
