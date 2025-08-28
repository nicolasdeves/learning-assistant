import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "../../styles/header";
import { assets } from "../../assets/assets";
import { navbarStyles } from "../../styles/navbar";

export function Header() {

    return (
        <SafeAreaView>
            <View style={headerStyles.header}>
                <TouchableOpacity onPress={() => console.log('clicou')}>
                    <Image source={assets.calendar} style={headerStyles.headerImage} />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={assets.brain_gear} style={[headerStyles.headerImage, headerStyles.mainIcon]} />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => console.log('clicou')} >
                    <Image source={assets.fire_lit} style={headerStyles.headerImage} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
