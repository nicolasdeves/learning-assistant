import { Text, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Base } from "../../Base/Base";
import { styles } from "../styles";
import { RootStackParamList } from "../../../interfaces/navbar";

export function JournalViewNote() {
  type JournalNotesRouteProp = RouteProp<RootStackParamList, 'JournalViewNote'>;

  const route = useRoute<JournalNotesRouteProp>();
  const { note } = route.params;

  return (
    <Base>
      <Text style={styles.pageTitle}>{note.createdAt}</Text>
      <ScrollView style={{ marginTop: 12 }}>
        <Text style={styles.noteFull}>{note.content}</Text>
      </ScrollView>
    </Base>
  );
}
