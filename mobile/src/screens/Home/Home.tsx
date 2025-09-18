import { useEffect, useState } from "react";
import { getTopics, getTopicsByUser } from "../../service/topic.service";
import { getLoggedUser } from "../../auth/authentication";
import { TopicResponse } from "../../interfaces/topics";
import { makeNavigation } from "../../service/navigation.service";
import { Base } from "../Base/Base";
import { Text } from "react-native";

export function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [googleUserId, setGoogleUserId] = useState<string>("")
  const [userTopics, setUserTopics] = useState<TopicResponse[] | null>(null)
  const [topics, setTopics] = useState<TopicResponse[] | null>(null)

  const navigation = makeNavigation();

  useEffect(() => {
    getUser();
    getAllTopics();
  }, [])

  useEffect(() => {
    getUserTopics()
  }, [])

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
  
      if (!userTopicResponse) {
        navigation.navigate("ChooseTopic")
        console.log('nao tem topicos')
      }

    } catch (error) {
      console.log("Error on getUserTopics")
    }
  }

  const getAllTopics = async () => {
    try {
      const topicResponse = await getTopics();
      setTopics(topicResponse)
    } catch (error) {
      console.log("Error on getAllTopics")
    }
  }

  return (
    <Base>
      <Text>  </Text>
    </Base>
  );
}
