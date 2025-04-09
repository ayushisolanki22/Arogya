import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PhoneLoginScreen = () => {
  const navigation = useNavigation();

  const handleNewUserPress = () => {
    navigation.navigate('PhoneRegistrationScreen');
  };

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const handleEmailPress = () => {
    navigation.navigate('EmailLoginScreen');
  };

  const handleSignInPress = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.newUser} onPress={handleNewUserPress}>New User?</Text>
      <Text style={styles.title}>Welcome Back, Log In to continue</Text>

      <View style={styles.inputContainer}>
        {/* Phone Number Input */}
        <View style={styles.inputRow}>
          <FontAwesome name="phone" size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="Enter your Phone Number"
            placeholderTextColor="black"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        {/* OTP Input */}
        <View style={styles.inputRow}>
          <FontAwesome size={20} color="black" style={styles.icon} />
          <TextInput
            placeholder="   Enter OTP"
            placeholderTextColor="black"
            style={styles.input}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orContinueText}>or continue with</Text>

      <TouchableOpacity style={styles.emailContainer} onPress={handleEmailPress}>
        <FontAwesome name="envelope" size={20} color="black" style={styles.emailIcon} />
        <Text style={styles.emailText}>Email</Text>
      </TouchableOpacity>

      <View style={styles.socialIconsContainer}>
        <TouchableOpacity onPress={() => openLink('https://www.facebook.com')}>
          <Image source={require('../../assets/images/Facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.google.com')}>
          <Image source={require('../../assets/images/Google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink('https://www.apple.com')}>
          <Image source={require('../../assets/images/Apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>

      <Image source={require('../../assets/images/ArogyaLogo.png')} style={styles.logo} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8E1',
        padding: 20,
        paddingTop: 110, // ⬅️ Increased to bring everything down
      },
      newUser: {
        fontSize: 14,
        color: '#2E7D32',
        alignSelf: 'flex-end',
        marginRight: 0,
        marginTop: -100,
        marginBottom: 15,
        fontWeight: 'bold',
      },
      title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2E7D32',
        textAlign: 'center',
        marginTop: 35,
        marginBottom: 30,
      },
      inputContainer: {
        width: '105%', // ⬅️ Changed from '100%' to '95%' to increase visual width
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
      },
      inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 5,
        marginBottom: 15,
        width: '100%',
        borderWidth: 1,              // 🆕 Added border
        borderColor: '#D3D3D3',      // 🆕 Light gray border color
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        color: 'black',
      },
      signInButton: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
        // borderWidth removed ❌
      },
      
      signInText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold', // 🆕 Made the text bold
      },
      
      orContinueText: {
        fontSize: 14,
        color: '#777',
        marginTop: -15,
        marginBottom: 20,
      },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
    width: '105%', // 🆙 Increased from 100%
    justifyContent: 'center',
  },
  emailIcon: {
    marginRight: 8,
  },
  emailText: {
    fontSize: 16,
    color: 'black',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40, // ⬆️ Increased from 20 to 40 to move icons down
    gap: 85,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    marginTop: 90, // ⬆️ Increased from 0 to 30 to bring logo further down
  },

});

export default PhoneLoginScreen;
