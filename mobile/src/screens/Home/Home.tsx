import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { AvailableTopics } from "./AvailableTopics";
import { Tip } from "./Tip";
import { Tools } from "./Tools";
import { getLoggedUser } from "../../auth/authentication";
import { disableTopic, getTopics, getTopicsCreatedByUser } from "../../service/topic.service";
import { TopicResponse } from "../../interfaces/topic";
import { styles } from "./styles";
import { makeNavigation } from "../../service/navigation.service";
import { verifyUserIsAlreadyRegistered } from "../../service/topicUser.service";

export function Home() {
  const [userName, setUserName] = useState<string>("");
  const [googleUserId, setGoogleUserId] = useState<string>("");
  const [topics, setTopics] = useState<TopicResponse[] | null>(null);
  const [topicsCreatedByUser, setTopicsCreatedByUser] = useState<TopicResponse[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigation = makeNavigation();

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (googleUserId) {
      fetchTopics();
    }
  }, [googleUserId]);

  const fetchUser = async () => {
    const user = await getLoggedUser();
    if (!user) navigation.navigate("Login");
    if (user?.displayName) setUserName(user.displayName);
    if (user?.uid) setGoogleUserId(user.uid)
  };

  const fetchTopics = async () => {
    if (!googleUserId) return;
    
    const topics = await getTopics();
    const topicsCreatedByUser = await getTopicsCreatedByUser(googleUserId);

    setTopics(topics);
    setTopicsCreatedByUser(topicsCreatedByUser);
  };

  const redirect = async (topic: TopicResponse) => {
    const userAlreadyHasTopic = await verifyUserIsAlreadyRegistered(googleUserId, topic.id)

    userAlreadyHasTopic ? navigation.navigate("Learning") : navigation.navigate("RegisterTopic", { topic })
  }

  const handleDeleteTopic = async (topic: TopicResponse) => {
    if (topicsCreatedByUser) {
      const updatedTopics = topicsCreatedByUser.filter(t => t.id !== topic.id);
      setTopicsCreatedByUser(updatedTopics);
    }

    await disableTopic(topic.id)
  }

  return (
    <Base>
      <ScrollView>
        <Text style={styles.welcomeText}>BEM-VINDO {userName}</Text>

        {topics && (
          <AvailableTopics
            topics={topics}
            topicsCreatedByUser={topicsCreatedByUser}
            onSelectTopic={(topic) => redirect(topic)}
            onDeleteTopic={handleDeleteTopic}
          />
        )}

        <Tip />

        <Tools />
      </ScrollView>
    </Base>
  );
}
