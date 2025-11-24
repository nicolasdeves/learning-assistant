import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { makeNavigation } from "../../service/navigation.service";
import { addTopic } from "../../service/topic.service";
import { getLoggedUserId } from "../../auth/authentication";

export function CreateTopic() {
  const navigation = makeNavigation();
  const [topicName, setTopicName] = useState<string>("");

  const handleCreateTopic = async () => {
    const googleUserId = await getLoggedUserId();
    googleUserId && await addTopic(topicName, googleUserId)
    navigation.navigate("Home");
  };

  return (
    <Base>
      <Text style={styles.title}>Criar Novo Tópico</Text>

      <ScrollView 
        style={styles.form}
        contentContainerStyle={styles.formContent}
      >
        <Text>Crie um tópico genérico ou sobre um assunto específico</Text>

        <Input
          label="Nome do Tópico"
          placeholder="Digite o nome do tópico..."
          value={topicName}
          onChangeText={setTopicName}
        />


        <Button
          label="Criar Tópico"
          onPress={handleCreateTopic}
          disabled={!topicName.trim()}
        />
      </ScrollView>
    </Base>
  );
}

