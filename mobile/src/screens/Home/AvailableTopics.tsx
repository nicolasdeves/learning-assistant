import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { assets } from "../../assets/assets";
import { TopicResponse } from "../../interfaces/topics";
import { linkUserToTopic } from "../../service/topicUser.service";

interface AvailableTopicsProps {
    topics: TopicResponse[]
    onSelectTopic: (topicId: number) => void
}

export function AvailableTopics({ topics, onSelectTopic }: AvailableTopicsProps) {
    return (
        <View>
            <Text style={styles.second_title}> Tópicos disponíveis</Text>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
                contentContainerStyle={{ paddingVertical: 10 }}
            >
                {topics.map((topic) => (
                    <Pressable key={topic.id} style={styles.activityItem} onPress={() => onSelectTopic(topic.id)}>
                        <Image source={assets.book} style={styles.activityImage} />
                        <Text style={styles.activityDescription}>{topic.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}