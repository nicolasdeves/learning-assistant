import { Image, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { assets } from "../../assets/assets";

interface TopicResponse {
    id: number,
    description: string,
    image: string
}

interface AvailableTopicsProps {
    activities: TopicResponse[]
}

export function AvailableTopics({ activities }: AvailableTopicsProps) {
    return (
        <View>
            <Text style={styles.second_title}> Tópicos disponíveis</Text>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
                contentContainerStyle={{ paddingVertical: 10 }}
            >
                {activities.map((item) => (
                    <View key={item.id} style={styles.activityItem}>
                        <Image source={assets.book} style={styles.activityImage} />
                        <Text style={styles.activityDescription}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}