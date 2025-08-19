import { Text, View, Button } from "react-native";
import { loginWithGoogle } from "../../auth/authentication";
import { SafeAreaView } from "react-native-safe-area-context";

export function Login() {

  return (
    <SafeAreaView>
        <Text> Login </Text>
        <Button title="Entrar com o Google" onPress={loginWithGoogle}/>
    </SafeAreaView>
  );
}
