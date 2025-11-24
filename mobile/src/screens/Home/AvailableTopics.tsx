import { Alert, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
  onDeleteTopic?: (topic: TopicResponse) => void;
}

export function AvailableTopics({
  topics,
  topicsCreatedByUser,
  onSelectTopic,
  onDeleteTopic,
}: AvailableTopicsProps) {
  const emojis = ['📘','🧠','📚','💡','📝','🎯','🚀','🔍','💬','💻','📗','📕','📙','📖','📄','📜','📑','🧾','✏️','🖊️','🖋️','🖍️','🗒️','🎓','🧩','🔭','🔬','🧪','📊','📈','📉','📎','🧷','🗂️','🗃️','📌','📍','📁','🗄️','🧮','📅','⏰','⭐'];

  const navigation = makeNavigation();

  const getRandomEmoji = () =>
    emojis[Math.floor(Math.random() * emojis.length)];

  const handleAddTopic = () => {
    navigation.navigate("CreateTopic");
  }

  const handleDeletePress = (topic: TopicResponse) => {
    Alert.alert(
      "Confirmar exclusão",
      `Tem certeza que deseja excluir o tópico "${topic.name}"? Esta ação não pode ser desfeita.`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => onDeleteTopic && onDeleteTopic(topic)
        }
      ]
    );
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

        {topicsCreatedByUser && topicsCreatedByUser.length > 0 ? (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
          >
            {topicsCreatedByUser.map(topic => {
              const randomEmoji = getRandomEmoji();
              return (
                <View key={topic.id} style={styles.topicCardContainer}>
                  <Pressable
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
                  {onDeleteTopic && (
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeletePress(topic)}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <Text style={styles.deleteButtonText}>✕</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>
              Nenhum tópico criado ainda
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
