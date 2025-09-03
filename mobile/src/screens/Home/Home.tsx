import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { Navbar } from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { InfoCard } from "../../components/InfoCard/InfoCard";

export function Home() {

  return (
    <SafeAreaView style={ styles.container }>
      <Header />

      <View style={{ 
        flex: 1, 
        alignItems: "center", 
      }}> 
        <InfoCard
          title="Atividades diárias"
          description="0/3"
          onPress={() => { console.log("in press") }}
        />

        <InfoCard
          title="Histórico"
          description="Veja seu histórico semanal e mensal"
          onPress={() => { console.log("in press") }}
        />
      </View>
      
      <Navbar/>
    </SafeAreaView>
  );
}
