import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { AvailableTopics } from "./AvailableTopics";
import { Tip } from "./Tip";
import { Tools } from "./Tools";
import { getLoggedUser } from "../../auth/authentication";
import { getTopics } from "../../service/topic.service";
import { TopicResponse } from "../../interfaces/topic";
import { styles } from "./styles";
import { makeNavigation } from "../../service/navigation.service";
import { verifyUserIsAlreadyRegistered } from "../../service/topicUser.service";

export function Home() {
  const [userName, setUserName] = useState<string>("");
  const [googleUserId, setGoogleUserId] = useState<string>("");
  const [topics, setTopics] = useState<TopicResponse[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigation = makeNavigation();

  useEffect(() => {
    fetchUser();
    fetchTopics();
  }, []);

  const fetchUser = async () => {
    const user = await getLoggedUser();
    if (!user) navigation.navigate("Login");
    if (user?.displayName) setUserName(user.displayName);
    if (user?.uid) setGoogleUserId(user.uid)
  };

  const fetchTopics = async () => {
    const topics = await getTopics();
    setTopics(topics);
  };

  const redirect = async (topic: TopicResponse) => {
    const userAlreadyHasTopic = await verifyUserIsAlreadyRegistered(googleUserId, topic.id)

    userAlreadyHasTopic ? navigation.navigate("Learning") : navigation.navigate("RegisterTopic", { topic })
  }

  return (
    <Base>
      <ScrollView>
        <Text style={styles.welcomeText}>BEM-VINDO {userName}</Text>

        {topics && (
          <AvailableTopics
            topics={topics}
            onSelectTopic={(topic) => redirect(topic)}
          />
        )}

        <Tip />

        <Tools />
      </ScrollView>
    </Base>
  );
}
