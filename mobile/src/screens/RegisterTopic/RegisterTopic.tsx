import { RouteProp, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../interfaces/navbar';
import { Base } from '../Base/Base';
import { styles } from './styles';
import { Select } from '../../components/Select/Select';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { useEffect, useState } from 'react';
import { addDailyRegister } from '../../service/daily.service';
import { linkUserToTopic } from '../../service/topicUser.service';
import { getLoggedUserId } from '../../auth/authentication';
import { makeNavigation } from '../../service/navigation.service';

type RegisterTopicRouteProp = RouteProp<RootStackParamList, 'RegisterTopic'>;

export function RegisterTopic() {
    const navigation = makeNavigation();

    const [selectedLevelId, setSelectedLevelId] = useState<number | null>(null)
    const [wantToLearnDescription, setWantToLearnDescription] = useState<string>(" ")
    const route = useRoute<RegisterTopicRouteProp>();
    const { topic } = route.params;

    const levelOptions = topic.levels ? topic.levels.map((level) => ({
        label: level.name,
        value: level.id
    })) : []

    const goalOptions = [
        { label: '1', value: 1},
        { label: '2', value: 2},
        { label: '3', value: 3},
        { label: '4', value: 4},
        { label: '5', value: 5},
        { label: '6', value: 6},
        { label: '7', value: 7}
    ];

    const [selectedWeeklyGoal, setSelectedWeeklyGoal] = useState<number>(1);

    useEffect(() => {
        setSelectedLevelId(levelOptions[0].value)
    }, [levelOptions])

    const onFormSubmit = async () => {
        const googleUserId = await getLoggedUserId();
        if (selectedLevelId && googleUserId) {
            await linkUserToTopic(googleUserId, topic.id, selectedLevelId, selectedWeeklyGoal)
            await addDailyRegister(wantToLearnDescription, topic.id, selectedLevelId)

            navigation.navigate("Learning")
        }
    }

    return (
        <Base>
            <Text style={styles.title}>Realizar inscrição</Text>
            <Text style={styles.topic_name}>{topic.name}</Text>

            <View style={styles.form}>
                {
                    levelOptions && (
                        <Select
                            label="Nível"
                            options={levelOptions}
                            onValueChange={(levelId) => setSelectedLevelId(Number(levelId))}
                        />
                    )
                }


                <Input
                    label={`O que você quer aprender sobre ${topic.name}?`}
                    placeholder='Digite...'
                    value={wantToLearnDescription}
                    onChangeText={(value) => setWantToLearnDescription(value)}
                />

                <Select
                    label="Meta semanal"
                    options={goalOptions}
                    onValueChange={(goal) => setSelectedWeeklyGoal(Number(goal))}
                />

                <Button
                    label="Enviar"
                    onPress={onFormSubmit}
                />

            </View>
        </Base>


    )
}