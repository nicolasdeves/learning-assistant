import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { assets } from "../../assets/assets";
import { TopicResponse } from "../../interfaces/topic";
import { linkUserToTopic } from "../../service/topicUser.service";

interface AvailableTopicsProps {
    topics: TopicResponse[]
    onSelectTopic: (topic: TopicResponse) => void
}

export function AvailableTopics({ topics, onSelectTopic }: AvailableTopicsProps) {
  const emojis = ['📘', '🧠', '📚', '💡', '📝', '🎯', '🚀', '🔍', '💬', '💻']

  const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)]

  return (
    <View>
      <Text style={styles.second_title}>Tópicos disponíveis</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
      >
        {topics.map((topic) => {
          const randomEmoji = getRandomEmoji()
          return (
            <Pressable
              key={topic.id}
              style={({ pressed }) => [
                styles.topicCard,
                pressed && { backgroundColor: '#C5E6FA', transform: [{ scale: 0.97 }] },
              ]}
              onPress={() => onSelectTopic(topic)}
            >
              <Text style={styles.topicEmoji}>{randomEmoji}</Text>
              <Text style={styles.topicText}>{topic.name}</Text>
            </Pressable>
          )
        })}
      </ScrollView>
    </View>
  )
}