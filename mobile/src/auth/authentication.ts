import { getAuth, GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../interfaces/navbar';


GoogleSignin.configure({
  webClientId: '496449435162-4mgmtjekgqkcauqofhvnsljjh7jc7uq5.apps.googleusercontent.com',
});

const auth = getAuth();

export async function loginWithGoogle(navigation: NativeStackNavigationProp<RootStackParamList>) {
  try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();

      const idToken = userInfo.data?.idToken

      if (!idToken) throw new Error('Não foi possível obter idToken do Google');

      const googleCredential = GoogleAuthProvider.credential(idToken);

      await signInWithCredential(auth, googleCredential);

      navigation.navigate("Home");
  } catch (error) {
      console.log('Erro completo:', JSON.stringify(error, null, 2));
      navigation.navigate("Login");
  }
}
  
export async function getLoggedUser() {
  console.log(auth)
  return auth.currentUser;
}

export async function signOutUser(navigation: NativeStackNavigationProp<RootStackParamList>) {
  try {
      navigation.navigate("Login")
      auth.signOut()
  } catch(error: any) {
    console.log(error)
  }
}

export async function getUserPhoto() {
  try {
    return auth.currentUser?.photoURL;
  } catch (error) {
    console.log(error)
  }
}

export async function getUserName() {
  try {
    return auth.currentUser?.displayName
  } catch (error) {
    console.log(error)
  }
}

