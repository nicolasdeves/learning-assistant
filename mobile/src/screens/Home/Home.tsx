import { useEffect, useState } from "react";
import { Text } from "react-native";
import { Base } from "../Base/Base";
import { AvailableTopics } from "./AvailableTopics";
import { Tip } from "./Tip";
import { Tools } from "./Tools";
import { getLoggedUser } from "../../auth/authentication";
import { getTopics } from "../../service/topic.service";
import { TopicResponse } from "../../interfaces/topics";
import { styles } from "./styles";
import { makeNavigation } from "../../service/navigation.service";

export function Home() {
  const [userName, setUserName] = useState<string>("");
  const [topics, setTopics] = useState<TopicResponse[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigation = makeNavigation();

  useEffect(() => {
    fetchUser();
    fetchTopics();
  }, []);

  const fetchUser = async () => {
    const user = await getLoggedUser();
    if (user?.displayName) setUserName(user.displayName);
  };

  const fetchTopics = async () => {
    const topics = await getTopics();
    setTopics(topics);
  };

  return (
    <Base>
      <Text style={styles.welcomeText}>BEM-VINDO, {userName}</Text>


      {topics && (
        <AvailableTopics
          topics={topics}
          onSelectTopic={(topicId) => navigation.navigate("RegisterTopic", {topicId})}
        />
      )}

      <Tip />

      <Tools />
    </Base>
  );
}
