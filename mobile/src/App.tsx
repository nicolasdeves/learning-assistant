import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home/Home";
import { Login } from "./screens/Login/Login";
import { RootStackParamList } from "./interfaces/navbar";
import { ChooseTopic } from "./screens/ChooseTopic/ChooseTopic";
import { Learning } from "./screens/Learning/Learning";
import { Community } from "./screens/Community/Community";
import { Activity } from "./screens/Activity/Activity";
import { RegisterTopic } from "./screens/RegisterTopic/RegisterTopic";
import { CommunityChat } from "./screens/Community/components/CommunityChat";
import { Profile } from "./screens/Profile/Profile";
import { JournalTopics } from "./screens/Journal/JournalTopics";
import { JournalNotes } from "./screens/Journal/components/JournalNotes";
import { JournalCreateNote } from "./screens/Journal/components/JournalCreateNote";
import { JournalViewNote } from "./screens/Journal/components/JournalViewNote";
import Streak from "./screens/Streak/Streak";
import { MyTopics } from "./screens/MyTopics/MyTopics";

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
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="RegisterTopic" component={RegisterTopic} />
        <Stack.Screen name="CommunityChat" component={CommunityChat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="JournalTopics" component={JournalTopics} />
        <Stack.Screen name="JournalNotes" component={JournalNotes} />
        <Stack.Screen name="JournalCreateNote" component={JournalCreateNote} />
        <Stack.Screen name="JournalViewNote" component={JournalViewNote} />
        <Stack.Screen name="Streak" component={Streak} />
        <Stack.Screen name="MyTopics" component={MyTopics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
