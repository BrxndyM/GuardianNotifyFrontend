import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Text, View } from './Themed';
import Colors from '@/constants/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/app/Navigation/AppNavigator';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

export default function WelcomeScreen({ navigation }: Props) {
  const handleNavigation = (screen: 'Register' | 'Login') => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Guardian Notify</Text>
      
      <Image
        source={require('../assets/images/soundimage.jpg')}
        style={styles.logo}
        resizeMode="contain"
      />
      
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleNavigation('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});