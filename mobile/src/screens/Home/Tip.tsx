import { styles } from "./styles";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { getTip } from "../../service/ai.service";
import { getLoggedUserId } from "../../auth/authentication";

export function Tip() {
    const [tip, setTip] = useState<string>("")

    useEffect(() => {
        if (!tip) {
            fetchTip();
        }
    }, []);

    const fetchTip = async () => {
        const googleUserId = await getLoggedUserId();
        const tip = googleUserId && await getTip(googleUserId);
        setTip(tip);
    }

    return (
        <View>
            <Text style={styles.second_title}>Dica da IA</Text>
            <InfoCard
                title={tip ? "Toque de conhecimento" : "Carregando dica..."}
                description={tip ? tip : "Aguarde enquanto buscamos uma dica personalizada para você."}
                height={150}
                image="https://picsum.photos/300"
                backgroundColor="#D9EEFA"
                marginTop={10}
            />
        </View>
    )
}