import { Animated, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useRef, useEffect } from "react";
import { makeNavigation } from "../../service/navigation.service";

const { width } = Dimensions.get("window");

export function Drawer({ isOpen, onClose, onLogoff }: { isOpen: boolean, onClose: () => void, onLogoff: () => void }) {
  const animation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;
  const overlay = useRef(new Animated.Value(isOpen ? 1 : 0)).current;
  const navigation = makeNavigation();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(overlay, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  });

  const overlayOpacity = overlay.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.4],
  });

  const MenuItem = ({ label, onPress }: any) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{ paddingVertical: 14 }}
    >
      <Text style={{ fontSize: 16, color: "#222" }}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ position: "absolute", inset: 0, zIndex: 9, pointerEvents: isOpen ? "auto" : "none" }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "black",
          opacity: overlayOpacity,
          position: "absolute",
          inset: 0,
        }}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: width * 0.75,
          backgroundColor: "#fff",
          transform: [{ translateX }],
          paddingTop: 60,
          paddingHorizontal: 22,
        }}
      >
        {/* Menu */}
        <View style={{ marginBottom: 24 }}>
          <MenuItem label="Perfil" onPress={() => {navigation.navigate("Profile")}} />
          <MenuItem label="Meus tópicos" onPress={() => { navigation.navigate("Home"); onClose(); }} />
          <MenuItem label="Notificações" onPress={() => {}} />
          <MenuItem
            label="Começar a ensinar"
            onPress={() => {}}
          />
        </View>

        <View style={{ height: 1, backgroundColor: "#eee", marginVertical: 16 }} />

        {/* Stats */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ fontSize: 13, color: "#777", marginBottom: 6 }}>
            Atividades completadas
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 12 }}>
            47
          </Text>

          <Text style={{ fontSize: 13, color: "#777", marginBottom: 6 }}>
            Streak
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            12 dias
          </Text>
        </View>

        <View style={{ height: 1, backgroundColor: "#eee", marginBottom: 16 }} />

        <TouchableOpacity
          onPress={() => { navigation.navigate("Login"); onLogoff(); }}
          activeOpacity={0.6}
          style={{ paddingVertical: 14 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600", color: "#c03030" }}>
            Sair
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
