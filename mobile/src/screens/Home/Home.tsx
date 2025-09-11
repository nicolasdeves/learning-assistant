import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { styles } from "../../styles/global";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Drawer } from "../../components/Drawner/Drawner";
import { getTopics, getTopicsByUser } from "../../service/topic.service";
import { getLoggedUser } from "../../auth/authentication";
import { TopicResponse } from "../../interfaces/topics";
import { makeNavigation } from "../../service/navigation.service";

export function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userId, setUserId] = useState<string>("")
  const [userTopics, setUserTopics] = useState<TopicResponse[] | null>(null)
  const [topics, setTopics] = useState<TopicResponse[] | null>(null)

  const navigation = makeNavigation();

  useEffect(() => {
    getUser();
    getAllTopics();
  }, [])

  useEffect(() => {
    getUserTopics()
  }, [userId])

  const getUser = async () => {
    try {
      const user = await getLoggedUser();
      user ? setUserId(user.uid) : navigation.navigate("Login")
    } catch (error) {
      console.log("Error on getUser")
    }
  }

  const getUserTopics = async () => {
    try {
      const userTopicResponse = await getTopicsByUser(userId);
      setUserTopics(userTopicResponse)
  
      console.log('userTopicResponse')
      console.log(userTopicResponse)

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
    <SafeAreaView style={styles.container}>
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <Header 
        onHamburgerPress={() => setDrawerOpen(true)} 
        onCalendarPress={() => setDrawerOpen(true)} 
      />

      <View style={{ flex: 1, alignItems: "center" }}>
        <InfoCard
          title="Atividades diárias"
          description="0/3"
          onPress={() => {getUser()}}
        />

        <InfoCard
          title="Histórico"
          description="Veja seu histórico semanal e mensal"
          onPress={() => {  }}
        />
      </View>

      <Navbar />

    </SafeAreaView>
  );
}
