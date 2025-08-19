import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '496449435162-4mgmtjekgqkcauqofhvnsljjh7jc7uq5.apps.googleusercontent.com',
});

export async function loginWithGoogle() {
    try {
        await GoogleSignin.hasPlayServices();
        const data = await GoogleSignin.signIn();
        console.log(data)
        
    } catch (error) {
      console.log('Erro completo:', JSON.stringify(error, null, 2));
    }
  }
  