import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { assets } from "../../assets/assets";
import { navbarStyles } from "../../styles/navbar";
import { makeNavigation } from "../../service/navigation.service";
import { useRoute } from "@react-navigation/native";


export function Navbar() {

    const navigation = makeNavigation()
    const route = useRoute()

    const getIconStyle = (routeName: string) => {
        return route.name === routeName ? navbarStyles.navbarImageSelected : navbarStyles.navbarImage;
    }

    return (
        <SafeAreaView style={navbarStyles.navbar}>
            <TouchableOpacity onPress={() => navigation.navigate("Learning")}>
                <Image source={assets.brain} style={getIconStyle("Learning")} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Community")}>
                <Image source={assets.community} style={getIconStyle("Community")} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}
