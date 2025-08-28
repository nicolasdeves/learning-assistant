import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { assets } from "../../assets/assets";
import { navbarStyles } from "../../styles/navbar";
import { useNavigation } from "@react-navigation/native";


export function Navbar() {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={navbarStyles.navbar}>
            <TouchableOpacity onPress={() => console.log('clicou')}>
                <Image source={assets.brain} style={navbarStyles.navbarImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('clicou')}>
                <Image source={assets.community} style={navbarStyles.navbarImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('clicou')}>
                <Image source={assets.volunteer} style={navbarStyles.navbarImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('clicou')}>
                <Image source={assets.hamburger} style={navbarStyles.navbarImageSelected} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
