import { Text, TouchableOpacity, ScrollView } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { makeNavigation } from "../../service/navigation.service";
import { useEffect, useState } from "react";
import { TopicResponse } from "../../interfaces/topic";
import { getTopicsByUser } from "../../service/topic.service";
import { getLoggedUserId } from "../../auth/authentication";

export function JournalTopics() {
  const [topics, setTopics] = useState<TopicResponse[] | null>(null)
  const navigation = makeNavigation();

  useEffect(() => {
    fetchTopics();
  }, [])

  const fetchTopics = async() => {
    const googleUserId = await getLoggedUserId();
    const topics = googleUserId && await getTopicsByUser(googleUserId);
    topics && setTopics(topics);
  }

  return (
    <Base>
      <Text style={styles.pageTitle}>DIÁRIO</Text>
      <Text style={styles.subtitle}>Selecione o tópico</Text>

      <ScrollView style={{ marginTop: 10 }}>
        {topics && topics.map(topic => (
          <TouchableOpacity
            key={topic.id}
            style={styles.listItem}
            onPress={() => navigation.navigate("JournalNotes", { topic: topic })}
          >
            <Text style={styles.itemText}>{topic.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Base>
  );
}
