import WelcomeScreen from '@/components/EditScreenInfo';
import LoginScreen from '@/components/Login';
import RegisterScreen from '@/components/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Export the RootStackParamList type
export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Register: undefined;
    // Add other screens here as needed
  };
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  
  export default function AppNavigator() {
    return (
   
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
  
    );
  }