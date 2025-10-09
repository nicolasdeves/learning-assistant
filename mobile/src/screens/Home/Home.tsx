import { useEffect, useState } from "react";
import { Base } from "../Base/Base";
import { Image, ScrollView, Text, View } from "react-native";
import { getUserName } from "../../auth/authentication";
import { styles } from "./styles";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { assets } from "../../assets/assets";
import { AvailableTopics } from "./AvailableTopics";
import { Tip } from "./Tip";
import { Tools } from "./Tools";

export function Home() {

  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    fetchUserName();
  }, [])

  const fetchUserName = async () => {
    const name = await getUserName();
    name && setUserName(name);
  }

  const activities = [
    { id: 1, image: "https://via.placeholder.com/100", description: "Inglês" },
    { id: 2, image: "https://via.placeholder.com/100", description: "Espanhol" },
    { id: 3, image: "https://via.placeholder.com/100", description: "História" },
    { id: 4, image: "https://via.placeholder.com/100", description: "Matemática" },
    { id: 5, image: "https://via.placeholder.com/100", description: "Leitura" },
  ];
  return (
    <Base>
      <Text style={styles.welcomeText}> BEM-VINDO, {userName} !</Text>

      <AvailableTopics activities={activities}/>

      <Tip/>

      <Tools/>

    </Base>
  );
}
