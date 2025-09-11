import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "../../styles/header";
import { assets } from "../../assets/assets";

interface HeaderProps {
    onHamburgerPress: () => void 
    onCalendarPress: () => void 
}

export function Header({ onHamburgerPress, onCalendarPress }: HeaderProps) {
  return (
    <SafeAreaView>
      <View style={headerStyles.header}>
        <TouchableOpacity onPress={onHamburgerPress}>
          <Image source={assets.hamburger} style={headerStyles.headerImage} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={assets.brain_gear} style={[headerStyles.headerImage, headerStyles.mainIcon]} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onCalendarPress}>
          <Image source={assets.calendar} style={headerStyles.headerImage} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
