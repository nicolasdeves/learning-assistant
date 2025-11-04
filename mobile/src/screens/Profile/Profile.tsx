import { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Base } from "../Base/Base";
import { getLoggedUser } from "../../auth/authentication";
import { styles } from "./styles";

export function Profile() {
    const [user, setUser] = useState<any>(null);
    const [topics, setTopics] = useState<any[]>([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchUser();
        fetchTopics();
    }, []);

    const fetchUser = async () => {
        const user = await getLoggedUser();
        setUser(user);
    };

    const fetchTopics = async () => {
        // const userTopics = await getUserTopics();
        const mockTopics = [
            { id: 1, name: "English B1 Grammar", totalActivities: 32 },
            { id: 2, name: "Vocabulary Basics", totalActivities: 15 },
            { id: 3, name: "Listening Practice", totalActivities: 8 },
        ];

        setTopics(mockTopics);
    };

    return (
        <Base>
            <View style={styles.container}>

                {/* {user?.photoURL && (
                    <Image source={{ uri: user.photoURL }} style={styles.avatar} />
                )} */}

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
