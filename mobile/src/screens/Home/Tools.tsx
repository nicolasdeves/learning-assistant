import { styles } from "./styles";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Image, Text, View } from "react-native";
import { assets } from "../../assets/assets";
import { makeNavigation } from "../../service/navigation.service";



export function Tools() {
    const navigation = makeNavigation();

    return (
        <View>
            <Text style={styles.second_title}> Ferramentas</Text>

            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <InfoCard
                    title="Diário"
                    height={60}
                    backgroundColor="#D9EEFA"
                    width={"40%"}
                    alignSelf="flex-start"
                    marginTop={10}
                    onPress={() => navigation.navigate("JournalTopics")}
                    icon={<Image source={assets.book} style={{ width: 30, height: 30 }}
                    />}
                />

                <InfoCard
                    title="Ritmo"
                    height={60}
                    backgroundColor="#D9EEFA"
                    width={"40%"}
                    alignSelf="flex-start"
                    marginLeft={25}
                    marginTop={10}
                    onPress={() => navigation.navigate("Streak")}
                    icon={<Image source={assets.fire} style={{ width: 30, height: 30 }} />}
                />
            </View>
        </View>
    )
}