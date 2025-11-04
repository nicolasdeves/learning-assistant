import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { headerStyles } from "../../styles/header";
import { assets } from "../../assets/assets";
import { getUserPhoto } from "../../auth/authentication";
import { useEffect, useState } from "react";

interface HeaderProps {
    onUserImagePress: () => void 
    onDrawnerPress: () => void 
}

export function Header({ onUserImagePress, onDrawnerPress }: HeaderProps) {

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
        <TouchableOpacity onPress={onUserImagePress}>
          <Image source={{uri: userImage}} style={headerStyles.headerUserImage} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDrawnerPress}>
          <Image source={assets.menu} style={headerStyles.headerCalendarIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
