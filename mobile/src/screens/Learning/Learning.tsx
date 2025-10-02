import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Base } from '../Base/Base';
import { makeNavigation } from '../../service/navigation.service';
import { getLoggedUser } from '../../auth/authentication';
import { getTopics, getTopicsByUser } from '../../service/topic.service';
import { linkUserToTopic } from '../../service/topicUser.service';
import { getTip } from '../../service/ai.service';

import { TopicResponse } from '../../interfaces/topics';
import { Option } from '../../interfaces/option';
import { LearningTopicSelector } from './LearningTopicSelector';
import { LearningCards } from './LearningCards';
import { LearningTopicChanger } from './LearningTopicChanger';


export function Learning() {
  const [googleUserId, setGoogleUserId] = useState<string>("");
  const [userTopics, setUserTopics] = useState<TopicResponse[] | null>(null);
  const [topicsOptions, setTopicsOptions] = useState<Option[] | null>(null);
  const [levelOptions] = useState<Option[]>([
    { label: 'Iniciante', value: 'beginner'},
    { label: 'Intermediário', value: 'intermediate'},
    { label: 'Avançado', value: 'advanced'},
  ]);

  const [selectedLevel, setSelectedLevel] = useState<string>('beginner');
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicResponse | null>(null);
  const [allTopics, setAllTopics] = useState<TopicResponse[] | null>(null);
  const [trigger, setTrigger] = useState<number>(0);
  const [isChooseTopicOn, setIsChooseTopicOn] = useState<boolean>(false);
  const [tip, setTip] = useState<string>("");

  const navigation = makeNavigation();

  useEffect(() => {
    getUser();
    getAllTopics();
  }, []);

  useEffect(() => {
    getUserTopics();
  }, [trigger]);

  useEffect(() => {
    generateTip();
  }, [selectedTopicId]);

  const getUser = async () => {
    try {
      const user = await getLoggedUser();
      user ? setGoogleUserId(user.uid) : navigation.navigate("Login");
      setTrigger(prev => prev + 1);
    } catch {
      console.log("Error on getUser");
    }
  };

  const getUserTopics = async () => {
    if (!googleUserId) return;
    try {
      const userTopicResponse = await getTopicsByUser(googleUserId);
      setUserTopics(userTopicResponse);
      userTopicResponse && setSelectedTopic(userTopicResponse[0]);
    } catch {
      console.log("Error on getUserTopics");
    }
  };

  const getAllTopics = async () => {
    try {
      const topicResponse = await getTopics();
      setAllTopics(topicResponse);

      if (topicResponse) {
        const options: Option[] = topicResponse.map(topic => ({
          label: topic.name,
          value: topic.id
        }));

        setTopicsOptions([{ label: "Escolha um assunto", value: 0 }, ...options]);
        setSelectedTopicId(Number(options[0].value));
      }
    } catch {
      console.log("Error on getAllTopics");
    }
  };

  const selectTopic = (topicSelectedId: number | string) => {
    const topic = allTopics?.find(topic => topic.id == Number(topicSelectedId));
    topic && setSelectedTopic(topic);
  };

  const addTopicToUser = async () => {
    if (!selectedTopicId) return;
    await linkUserToTopic(googleUserId, selectedTopicId, selectedLevel);
    setTrigger(prev => prev + 1);
    const topic = allTopics?.find(topic => topic.id == selectedTopicId);
    topic && setSelectedTopic(topic);
    setIsChooseTopicOn(false);
  };

  const changeTopic = async () => {
    if (!selectedTopic) return;
    setSelectedTopicId(selectedTopic.id);
    await linkUserToTopic(googleUserId, selectedTopic.id, selectedLevel);
    setIsChooseTopicOn(false);
  };

  const generateTip = async () => {
    if (!selectedTopicId) return;
    const tipResponse = await getTip(selectedTopicId);
    tipResponse && setTip(tipResponse);
  };

  return (
    <Base>
      {userTopics && userTopics.length > 0 && !isChooseTopicOn && (
        <LearningCards
          selectedTopic={selectedTopic}
          tip={tip}
          navigation={navigation}
          setIsChooseTopicOn={setIsChooseTopicOn}
        />
      )}

      {((!userTopics || userTopics.length === 0)) && topicsOptions && (
        <LearningTopicSelector
          topicsOptions={topicsOptions}
          levelOptions={levelOptions}
          selectTopic={selectTopic}
          selectLevel={setSelectedLevel}
          addTopicToUser={addTopicToUser}
        />
      )}

      {isChooseTopicOn && topicsOptions && (
        <LearningTopicChanger
          topicsOptions={topicsOptions}
          levelOptions={levelOptions}
          selectTopic={selectTopic}
          selectLevel={setSelectedLevel}
          changeTopic={changeTopic}
          goBack={() => setIsChooseTopicOn(false)}
        />
      )}
    </Base>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});
