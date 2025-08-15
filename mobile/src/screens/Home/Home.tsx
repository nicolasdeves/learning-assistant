import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";

export function Home() {

  return (
    <SafeAreaView style={ styles.container }>
        <Text> Home </Text>
    </SafeAreaView>
  );
}
