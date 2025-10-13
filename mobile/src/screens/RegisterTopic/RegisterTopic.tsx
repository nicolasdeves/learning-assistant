import { RouteProp, useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { RootStackParamList } from '../../interfaces/navbar';
import { Base } from '../Base/Base';

type RegisterTopicRouteProp = RouteProp<RootStackParamList, 'RegisterTopic'>;

export function RegisterTopic() {
    const route = useRoute<RegisterTopicRouteProp>();
    const { topicId } = route.params;

    return (
        <Base>
            <Text>Register topic: {topicId}</Text>;

        </Base>


    )
}