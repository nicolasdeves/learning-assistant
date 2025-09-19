// screens/Learning/Learning.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import { Base } from '../Base/Base';
import { FloatingCard } from '../../components/FloatingCard/FloatingCard';
import { getLoggedUser } from '../../auth/authentication';
import { makeNavigation } from '../../service/navigation.service';
import { getTopics, getTopicsByUser } from '../../service/topic.service';
import { TopicResponse } from '../../interfaces/topics';
import { Select } from '../../components/Select/Select';
import { AnimatedButton } from '../../components/AnimatedButton/AnimatedButton';
import { Option } from '../../interfaces/option';
import { linkUserToTopic } from '../../service/topicUser.service';

const { width } = Dimensions.get('window');
const halfWidth = (width - 48) / 2; // 16 padding + 16 margin entre cards

export function Learning() {
  const [googleUserId, setGoogleUserId] = useState<string>("")
  const [userTopics, setUserTopics] = useState<TopicResponse[] | null>(null)
  const [topicsOptions, setTopicsOptions] = useState<Option[] | null>(null)
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null)
  const [trigger, setTrigger] = useState<number>(0)
  const totalActivities = 3;
  const completedActivities = 0;

  const navigation = makeNavigation();

  useEffect(() => {
    getUser();
    getAllTopics();
    getUserTopics()
  }, [])

  useEffect(() => {
    getUserTopics()
  }, [trigger])


  const getUser = async () => {
    try {
      const user = await getLoggedUser();
      user ? setGoogleUserId(user.uid) : navigation.navigate("Login")
    } catch (error) {
      console.log("Error on getUser")
    }
  }

  const getUserTopics = async () => {
    try {
      const userTopicResponse = await getTopicsByUser(googleUserId);
      setUserTopics(userTopicResponse)

    } catch (error) {
      console.log("Error on getUserTopics")
    }
  }

  const getAllTopics = async () => {
    try {
      const topicResponse = await getTopics();

      if (topicResponse) {
        const options: Option[] = topicResponse.map(topic => ({
          label: topic.name,
          value: topic.id
        }))

        setTopicsOptions(options)
        setSelectedTopicId(Number(options[0].value))
      }

    } catch (error) {
      console.log("Error on getAllTopics")
    }

  }

  const addTopicToUser = async () => {
    console.log('entrou addTopicToUser')
    selectedTopicId && await linkUserToTopic(googleUserId, selectedTopicId);
    setTrigger(prev => prev + 1)

  }

  return (
    <Base>
      {
        userTopics && userTopics.length > 0 && (
          <View style={styles.container}>
            {/* Card Dica */}
            <FloatingCard style={{ width: '100%' }}>
              <Text style={styles.title}>💡 Dica do Dia</Text>
              <Text style={styles.content}>Revise palavras novas antes de dormir para memorizar melhor!</Text>
            </FloatingCard>

            {/* Cards lado a lado: Atividades e Próxima Data */}
            <View style={styles.row}>
              <FloatingCard
                style={{ width: halfWidth }}
                onPress={() => Alert.alert('Vamos lá!')}
              >
                <Text style={styles.title}>📚 Atividades</Text>
                <Text style={styles.content}>{completedActivities}/{totalActivities} concluídas</Text>
              </FloatingCard>

              <FloatingCard style={{ width: halfWidth }}>
                <Text style={styles.title}>📅 Atividade</Text>
                <Text style={styles.content}>17/09/2025</Text>
              </FloatingCard>
            </View>

            {/* Cards lado a lado: Atividade Atual e Histórico IA */}
            <View style={styles.row}>
              <FloatingCard style={{ width: halfWidth }}>
                <Text style={styles.title}>🏆 Tópico</Text>
                <Text style={styles.content}>Inglês - Nível C1</Text>
              </FloatingCard>

              <FloatingCard
                style={{ width: halfWidth }}
                onPress={() => Alert.alert('Abrindo histórico de IA')}
              >
                <Text style={styles.title}>🤖 Histórico IA</Text>
                <Text style={styles.content}>Ver interações anteriores e dicas geradas pela IA.</Text>
              </FloatingCard>
            </View>

            {/* Card Iniciar Atividade Extra */}
            <FloatingCard
              style={{ width: '100%' }}
              onPress={() => Alert.alert('Iniciando Atividade Extra!')}
            >
              <Text style={styles.title}>✨ Atividade Extra</Text>
              <Text style={styles.content}>Clique aqui para começar uma atividade extra e ganhar pontos adicionais!</Text>
            </FloatingCard>

            {/* Card Anotações diárias (100%) */}
            <FloatingCard
              style={{ width: '100%' }}
              onPress={() => Alert.alert('Abrindo anotações diárias')}
            >
              <Text style={styles.title}>📝 Anotações Diárias</Text>
              <Text style={styles.content}>Registre seus aprendizados e observações de cada dia.</Text>
            </FloatingCard>
          </View>
        )
      }

      {
        ((!userTopics || userTopics.length === 0) && topicsOptions) && (
          <View style={{ display: "flex", alignSelf: "center", width: '90%' }}>
            <FloatingCard>
              <Text style={styles.title}>✨ Escolha um tópico para começar</Text>
              <Text style={styles.content}>Selecione um tópico para começar a aprender!</Text>

              <Select
                label="Tópicos disponíveis"
                options={topicsOptions}
                onValueChange={(value) => setSelectedTopicId(Number(value))}
              />

              <AnimatedButton
                title="Começar Aprendizado"
                onPress={() => addTopicToUser()}
              />
            </FloatingCard>
          </View>

        )
      }


    </Base>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#6C63FF',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontWeight: '600',
  },
});
