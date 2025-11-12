import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../../../components/Button/Button';
import { TopicUserResponse } from '../../../interfaces/topicUser';
import { getActivitiesByUser } from '../../../service/activity.service';

interface Props {
    topic: TopicUserResponse;
    onStartActivity: (topicUser: TopicUserResponse) => void;
}

export function LearningTopic({ topic, onStartActivity }: Props) {
    const [googleUserId, setGoogleUserId] = useState<string | null>(null)
    const [activitiesQuantity, setActivitiesQuantity] = useState<number>(0)

    useEffect(() => {
        fetchQuantityDailyActivities();
    }, []);

    const fetchQuantityDailyActivities = async () => {
        const activities = googleUserId && await getActivitiesByUser(googleUserId)
        activities && setActivitiesQuantity(activities?.length || 0)
    }

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{topic.topic?.name || 'Sem nome'}</Text>
                <View style={styles.levelBadge}>
                    <Text style={styles.levelText}>{topic.level?.name || 'Sem nível definido'}</Text>
                </View>
            </View>

            {/* <Text style={styles.progressText}>
                Tarefas diárias: {activitiesQuantity}/{topic.weeklyGoal} 
            </Text> */}

            <Button
                label='Iniciar Atividade'
                onPress={() => onStartActivity(topic)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 22,
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111',
    },
    levelBadge: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    levelText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    progressContainer: {
        height: 8,
        width: '100%',
        backgroundColor: '#eee',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 6,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#007AFF',
    },
    progressText: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    lastActivity: {
        fontSize: 13,
        color: '#777',
        marginBottom: 4,
    },
    activitiesDone: {
        fontSize: 13,
        color: '#777',
        marginBottom: 12,
    },
});
