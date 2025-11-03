import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { Modal } from "../../components/Modal/Modal";
import { Select } from "../../components/Select/Select";


export function ChooseTopic() {

  return (
    <SafeAreaView style={styles.container}>
        <View style={{ padding: 20 }}>
      <Select
        label="Escolha o assunto"
        options={[
          { label: "Matemática", value: "math" },
          { label: "Física", value: "physics" },
          { label: "Química", value: "chemistry" },
        ]}
        onValueChange={(v) => console.log("Selecionado:", v)}
      />
    </View>
    </SafeAreaView>
  );
}
