import { styles } from "./styles";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { Image, Text, View } from "react-native";
import { assets } from "../../assets/assets";



export function Tools() {
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
                    icon={<Image source={assets.book} style={{ width: 30, height: 30 }} />}
                />

                <InfoCard
                    title="Ritmo"
                    height={60}
                    backgroundColor="#D9EEFA"
                    width={"40%"}
                    alignSelf="flex-start"
                    marginLeft={25}
                    marginTop={10}
                    icon={<Image source={assets.fire} style={{ width: 30, height: 30 }} />}
                />
            </View>
        </View>
    )
}