// src/pages/Learning.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { Base } from '../Base/Base';
import { makeNavigation } from '../../service/navigation.service';
import { LearningTopic } from './components/LearningTopics';
import { styles } from './styles';
import { TopicUserResponse } from '../../interfaces/topicUser';
import { getTopicUserByUser } from '../../service/topicUser.service';
import { getLoggedUserId } from '../../auth/authentication';



export function Learning() {
  const navigation = makeNavigation();
  const [topicsUser, setTopicsUser] = useState<TopicUserResponse[] | null>(null)
  const [googleUserId, setGoogleUserId] = useState<string | null>(null)

  useEffect(() => {
    fetchUser();
    fetchTopicsUser();
  }, [])

  useEffect(() => {
    fetchTopicsUser();
  }, [googleUserId])

  const fetchUser = async () => {
    const userId = await getLoggedUserId()
    userId && setGoogleUserId(userId);
  }

  const fetchTopicsUser = async () => {
    const topicsUserResponse = googleUserId && await getTopicUserByUser(googleUserId);
    setTopicsUser(topicsUserResponse)
  }

  const startActivity = async (topicUser: TopicUserResponse) => {
    navigation.navigate("Activity", { topicUser })
  }

  return (
    <Base>
      <Text style={styles.title}>ATIVIDADES</Text>

      <ScrollView
        style={styles.topics}
        showsVerticalScrollIndicator={false}
      >
        {topicsUser && topicsUser.map((topic) => (
          <LearningTopic
            key={topic.id}
            topic={topic}
            onStartActivity={(topicUser) => startActivity(topicUser)}
          />
        ))}
      </ScrollView>
    </Base>
  )
}