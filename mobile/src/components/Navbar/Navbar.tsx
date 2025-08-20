import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/global";
import { assets } from "../../assets/assets";
import { navbarStyles } from "../../styles/navbar";


export function Navbar() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={navbarStyles.navbar}>
                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <Image source={assets.brain} style={navbarStyles.navbarImage} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <Image source={assets.community} style={navbarStyles.navbarImageSelected} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <Image source={assets.volunteer} style={navbarStyles.navbarImage} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <Image source={assets.hamburger} style={navbarStyles.navbarImage} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
