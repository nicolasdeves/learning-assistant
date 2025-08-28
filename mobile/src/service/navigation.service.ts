import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../interfaces/navbar";

export function makeNavigation() {
    return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}