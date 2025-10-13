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

    useEffect(() => {
        setSelectedLevelId(levelOptions[0].value)
    }, [levelOptions])

    const onFormSubmit = async () => {
        const googleUserId = await getLoggedUserId();
        if (selectedLevelId && googleUserId) {
            await linkUserToTopic(googleUserId, topic.id, selectedLevelId)
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

                <Button
                    label="Enviar"
                    onPress={onFormSubmit}
                />

            </View>



        </Base>


    )
}