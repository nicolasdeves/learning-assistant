import { Animated, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useRef, useEffect } from "react";

const { width } = Dimensions.get("window");

export function Drawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const animation = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: width * 0.7,
        backgroundColor: "#fff",
        transform: [{ translateX }],
        zIndex: 10,
        elevation: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 5,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Menu</Text>

      <TouchableOpacity onPress={onClose} style={{ marginBottom: 15 }}>
        <Text>Fechar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Clicou Home")} style={{ marginBottom: 15 }}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Clicou Perfil")} style={{ marginBottom: 15 }}>
        <Text>Perfil</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
