import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { RootStackParamList } from "./interfaces/navbar";
import { ChooseTopic } from "./screens/ChooseTopic/ChooseTopic";

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseTopic" component={ChooseTopic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
