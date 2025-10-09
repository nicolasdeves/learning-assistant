import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "../../styles/header";
import { assets } from "../../assets/assets";
import { getUserPhoto } from "../../auth/authentication";
import { useEffect, useState } from "react";

interface HeaderProps {
    onHamburgerPress: () => void 
    onCalendarPress: () => void 
}

export function Header({ onHamburgerPress, onCalendarPress }: HeaderProps) {

  const [userImage, setUserImage] = useState<string>("https://randomuser.me/api/portraits/lego/1.jpg")

  useEffect(() => {
    fetchUserImage();
  }, [])

  const fetchUserImage = async () => {
    const url = await getUserPhoto();
    url && setUserImage(url)
  }

  return (
    <SafeAreaView>
      <View style={headerStyles.header}>
        <TouchableOpacity onPress={onHamburgerPress}>
          <Image source={{uri: userImage}} style={headerStyles.headerUserImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onCalendarPress}>
          <Image source={assets.menu} style={headerStyles.headerCalendarIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
