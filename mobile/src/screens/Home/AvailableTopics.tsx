import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { assets } from '../../assets/assets';
import { TopicResponse } from '../../interfaces/topic';
import { linkUserToTopic } from '../../service/topicUser.service';
import { Button } from '../../components/Button/Button';
import { makeNavigation } from '../../service/navigation.service';

interface AvailableTopicsProps {
  topics: TopicResponse[];
  topicsCreatedByUser: TopicResponse[] | null; 
  onSelectTopic: (topic: TopicResponse) => void;
}

export function AvailableTopics({
  topics,
  topicsCreatedByUser,
  onSelectTopic,
}: AvailableTopicsProps) {
  const emojis = ['📘','🧠','📚','💡','📝','🎯','🚀','🔍','💬','💻','📗','📕','📙','📖','📄','📜','📑','🧾','✏️','🖊️','🖋️','🖍️','🗒️','🎓','🧩','🔭','🔬','🧪','📊','📈','📉','📎','🧷','🗂️','🗃️','📌','📍','📁','🗄️','🧮','📅','⏰','⭐'];

  const navigation = makeNavigation();

  const getRandomEmoji = () =>
    emojis[Math.floor(Math.random() * emojis.length)];

  const handleAddTopic = () => {
    navigation.navigate("CreateTopic");
  }

  return (
    <View>
      <View>
        <Text style={styles.second_title}>Tópicos disponíveis</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
        >
          {topics.map(topic => {
            const randomEmoji = getRandomEmoji();
            return (
              <Pressable
                key={topic.id}
                style={({ pressed }) => [
                  styles.topicCard,
                  pressed && {
                    backgroundColor: '#C5E6FA',
                    transform: [{ scale: 0.97 }],
                  },
                ]}
                onPress={() => onSelectTopic(topic)}
              >
                <Text style={styles.topicEmoji}>{randomEmoji}</Text>
                <Text style={styles.topicText}>{topic.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
          }}
        >
          <Text style={styles.third_title}>Tópicos criados por você</Text>

          <View style={styles.add_button}>
            <Button label="Adicionar" onPress={handleAddTopic}/>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
        >
          {topicsCreatedByUser && topicsCreatedByUser.map(topic => {
            const randomEmoji = getRandomEmoji();
            return (
              <Pressable
                key={topic.id}
                style={({ pressed }) => [
                  styles.topicCard,
                  pressed && {
                    backgroundColor: '#C5E6FA',
                    transform: [{ scale: 0.97 }],
                  },
                ]}
                onPress={() => onSelectTopic(topic)}
              >
                <Text style={styles.topicEmoji}>{randomEmoji}</Text>
                <Text style={styles.topicText}>{topic.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
