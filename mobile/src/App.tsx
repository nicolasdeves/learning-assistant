import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { RootStackParamList } from "./interfaces/navbar";
import { ChooseTopic } from "./screens/ChooseTopic/ChooseTopic";
import { Learning } from "./screens/Learning/Learning";
import { Community } from "./screens/Community/Community";

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChooseTopic" component={ChooseTopic} />
        <Stack.Screen name="Learning" component={Learning} />
        <Stack.Screen name="Community" component={Community} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
