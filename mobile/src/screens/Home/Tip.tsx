import { styles } from "./styles";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Text, View } from "react-native";



export function Tip() {
    return (
        <View>
            <Text style={styles.second_title}> Dica da IA</Text>
            <InfoCard
                title="Pratique a leitura em voz alta"
                description="Ler em voz alta ajuda a melhorar a pronúncia e fluência"
                height={150}
                image="https://picsum.photos/100"
                backgroundColor="#D9EEFA"
                marginTop={10}
            />
        </View>
    )
}