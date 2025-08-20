import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { Navbar } from "../../components/Navbar/Navbar";

export function Home() {

  return (
    <SafeAreaView style={ styles.container }>
        <Text> Home </Text>

        <Navbar/>
    </SafeAreaView>
  );
}
