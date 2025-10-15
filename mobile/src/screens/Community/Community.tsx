import { ScrollView, Text } from "react-native";
import { Base } from "../Base/Base";
import { styles } from "./styles";



export function Community() {

  return (
    <Base>
      <Text style={styles.title}>COMUNIDADE</Text>

      <ScrollView
        style={styles.topics}
        showsVerticalScrollIndicator={false}
      >

      </ScrollView>
    </Base>
  )
}
