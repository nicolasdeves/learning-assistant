import { Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Base } from "../../Base/Base";
import { styles } from "../styles";

export function JournalViewNote() {
  const route = useRoute();
  const { note }: any = route.params;

  return (
    <Base>
      <Text style={styles.pageTitle}>{note.date}</Text>
      <ScrollView style={{ marginTop: 12 }}>
        <Text style={styles.noteFull}>{note.text}</Text>
      </ScrollView>
    </Base>
  );
}
