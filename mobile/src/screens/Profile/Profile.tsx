import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Base } from "../Base/Base";
import { getLoggedUser } from "../../auth/authentication";
import { styles } from "./styles";
import { getActivityUserByUser } from "../../service/activityUser.service";
import { ActivityUserRespose } from "../../interfaces/activityUser";

export function Profile() {
    const [user, setUser] = useState<any>(null);
    const [topics, setTopics] = useState<any[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            fetchTopics();
        }
    }, [user]);

    const fetchUser = async () => {
        const user = await getLoggedUser();
        setUser(user);
    };

    const fetchTopics = async () => {
        const activitiesUser = await getActivityUserByUser(user.uid);

        if (activitiesUser) {
            const groupedByTopic = activitiesUser.reduce((acc, activityUser) => {
                const topicId = activityUser.activity.topicId;

                if (!acc[topicId]) {
                    acc[topicId] = [];
                }

                acc[topicId].push(activityUser);
                return acc;
            }, {} as Record<number, ActivityUserRespose[]>);

            console.log(groupedByTopic);

            const topicsWithTotalActivities = Object.values(groupedByTopic).map(group => {
                const topic = group[0].activity.topic; // pega info do topic do primeiro item do grupo
                return {
                    id: topic.id,
                    name: topic.name,
                    totalActivities: group.length, // quantidade de atividades naquele topic
                };
            });

            console.log(topicsWithTotalActivities)

            setTopics(topicsWithTotalActivities);
        }
    };

    return (
        <Base>
            <View style={styles.container}>
                <Text style={styles.name}>{user?.displayName}</Text>
                <Text style={styles.email}>{user?.email}</Text>

                <TouchableOpacity onPress={() => setOpen(!open)} style={styles.card}>
                    <Text style={styles.cardTitle}>
                        Tópicos Estudados
                    </Text>
                    <Text style={styles.plus}>{open ? "−" : "+"}</Text>
                </TouchableOpacity>

                {open && (
                    <FlatList
                        data={topics}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.list}
                        renderItem={({ item }) => (
                            <View style={styles.topicItem}>
                                <Text style={styles.topicName}>{item.name}</Text>
                                <Text style={styles.topicCount}>{item.totalActivities} atividades</Text>
                            </View>
                        )}
                    />
                )}
            </View>
        </Base>
    );
}
