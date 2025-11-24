import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import { makeNavigation } from "../../service/navigation.service";
import { getLoggedUserId } from "../../auth/authentication";
import { getTopicsByUser } from "../../service/topic.service";
import { TopicResponse } from "../../interfaces/topic";
import { updateTopicUser } from "../../service/topicUser.service";
import { Option } from "../../interfaces/option";

export function MyTopics() {
    const navigation = makeNavigation();
    const [topics, setTopics] = useState<TopicResponse[]>([]);
    const [selectedTopicId, setSelectedTopicId] = useState<number>(0);
    const [selectedLevelId, setSelectedLevelId] = useState<number>(0);
    const [selectedWeeklyGoal, setSelectedWeeklyGoal] = useState<number>(0);
    const [googleUserId, setGoogleUserId] = useState<string>("")

    const goalOptions = [
        { label: "1x semana", value: 1 },
        { label: "2x semana", value: 2 },
        { label: "3x semana", value: 3 },
        { label: "4x semana", value: 4 },
        { label: "5x semana", value: 5 },
        { label: "6x semana", value: 6 },
        { label: "7x semana", value: 7 },
    ];

    useEffect(() => {
        fetchUserTopics();
    }, []);

    const fetchUserTopics = async () => {
        const googleUserId = await getLoggedUserId();
        googleUserId && setGoogleUserId(googleUserId);
        const userTopics = googleUserId && await getTopicsByUser(googleUserId);
        if (userTopics) setTopics(userTopics);
    };

    const selectedTopic = topics.find(t => t.id === selectedTopicId);
    const [levelOptions, setLevelOptions] = useState<Option[]>([])

    useEffect(() => {
        selectedTopic && console.log(selectedTopic.levels)
        const levelOptions = selectedTopic && selectedTopic.levels && selectedTopic.levels.map((level) => ({
            label: level.name,
            value: level.id
        }))
        levelOptions && setLevelOptions(levelOptions)
    }, [selectedTopicId])

    const onSaveConfig = async () => {
        await updateTopicUser(googleUserId, selectedTopicId, selectedLevelId, selectedWeeklyGoal);
        navigation.navigate("Home");
    };

    return (
        <Base>
            <Text style={styles.title}>Editar Configurações</Text>

            <ScrollView style={styles.form}>
                {topics.length > 0 && (
                    <Select
                        label="Tópico"
                        options={[{ label: "Selecione seu tópico", value: 0 }, ...topics.map(topic => ({ label: topic.name, value: topic.id }))]}

                        onValueChange={(topicId) => {
                            setSelectedTopicId(Number(topicId));
                            const newTopic = topics.find(t => t.id === Number(topicId));
                            setSelectedLevelId(newTopic?.topicUser[0].levelId ?? 0);
                            setSelectedWeeklyGoal(newTopic?.topicUser[0].weeklyGoal ?? 1);
                        }}
                    />
                )}

                <Select
                    label="Nível"
                    options={[{ label: "Selecione seu novo nível", value: 0 }, ...levelOptions.map(level => ({ label: level.label, value: level.value }))]}
                    onValueChange={(levelId) => setSelectedLevelId(Number(levelId))}
                />

                <Select
                    label="Meta semanal"
                    options={[{ label: "Selecione sua meta semanal", value: 0 }, ...goalOptions]}
                    onValueChange={(goal) => setSelectedWeeklyGoal(Number(goal))}
                />

                <Button label="Salvar alterações" onPress={onSaveConfig} disabled={selectedTopicId == 0 || selectedLevelId == 0 || selectedLevelId == 0} />

            </ScrollView>
        </Base>
    );
}

